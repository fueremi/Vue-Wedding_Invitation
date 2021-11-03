<template>
  <div class="screen-wrapper" :class="[show ? 'show' : '']">
    <audio id="audio" loop>
      <source src="../assets/audio/backsound.mp3" type="audio/mpeg" />
    </audio>
    <div class="card-wrapper">
      <div class="text-center">
        <p class="fade-in-top text-md text-uppercase text-roboto fw-light">
          Undangan Pernikahan
        </p>
        <p class="scale-in-bottom text-xl text-honey-carrot">
          Septina & Saharuddin
        </p>
        <p class="fade-in-bottom text-sm text-roboto fw-light">
          <i class="fas fa-heart text-danger"></i> Minggu, 26 Desember 2021
          <i class="fas fa-heart text-danger"></i>
        </p>
        <div class="scale-in-bottom-1">
          <p class="text-md text-roboto">Dear</p>
          <p class="text-md text-roboto">Messy Triandani</p>
        </div>
        <p class="text-sm fade-in-bottom-1 text-roboto">
          Kami Mengundang Anda Untuk hadir Di Acara Pernikahan Kami.
        </p>
        <button
          class="btn btn-primary btn-sm blink-1 badge rounded-pill mt-5"
          style="visibility:hidden;"
          @click="onClickBukaUndangan"
          id="btn-undangan"
        >
          <img src="@/assets/images/love-letter.png" class="icon-love-letter" />
          Buka Undangan
        </button>
      </div>
    </div>
  </div>
  <div class="main" v-if="show">
    <div class="main-content">
      <button @click="onClickMuted" class="btn btn-muted">
        <i
          class="fas"
          :class="[!muted ? 'fa-volume-up' : 'fa-volume-mute']"
        ></i>
      </button>
      <div class="main-content-doa">
        <img
          src="@/assets/images/decoration-1.webp"
          class="decoration-header"
          alt=""
        />
        <div class="content p-1">
          <p class="text-md mb-0">
            وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ
          </p>
          <p class="mt-3 mb-0 text-sm">
            Artinya: “Dan segala sesuatu Kami Ciptakan Berpasang – pasangan
            supaya kamu mengingat kebesaran Allah.”(Adz-Dzariyat ayat 49)
          </p>
        </div>
        <img
          src="@/assets/images/decoration-1.webp"
          class="decoration-header"
          style="transform: rotate(180deg)"
          alt=""
        />
      </div>

      <div class="main-content-hari">
        <p class="text-sm">
          Kami harap Anda menjadi bagian dari hari istimewa kami!
        </p>
        <Countdown
          :time="dday"
          v-slot="{ days, hours, minutes, seconds }"
          v-if="dday > 0"
        >
          <div class="d-flex justify-content-center gap-3">
            <span class="badge rounded bg-primary text-sm py-1 px-3">
              <p class="m-0 mb-1 text-md">{{ days }}</p>
              <p class="m-0">Hari</p>
            </span>
            <span class="badge rounded bg-primary text-sm py-1 px-3">
              <p class="m-0 mb-1 text-md">{{ hours }}</p>
              <p class="m-0">Jam</p>
            </span>
            <span class="badge rounded bg-primary text-sm py-1 px-3">
              <p class="m-0 mb-1 text-md">{{ minutes }}</p>
              <p class="m-0">Menit</p>
            </span>
            <span class="badge rounded bg-primary text-sm py-1 px-3">
              <p class="m-0 mb-1 text-md">{{ seconds }}</p>
              <p class="m-0">Detik</p>
            </span>
          </div>
        </Countdown>
        <div class="text-lg text-honey-carrot" v-else>
          Acara telah selesai <br />
          Terima kasih atas partisipasi anda!
        </div>
      </div>
    </div>
    <div class="main-kata-sambutan p-4 mb-4">
      <img src="@/assets/images/bismillah.svg" class="w-50 mb-4" alt="" />
      <p class="text-lg text-honey-carrot text-primary">
        Assalamual`aikum Wr. Wb.
      </p>
      <p class="text-sm text-roboto">
        Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta
        Kerabat sekalian untuk menghadiri acara pernikahan kami:
      </p>
      <p class="text-sm text-roboto">
        Dikarenakan PPKM di Kota Palembang, merupakan suatu kehormatan dan
        kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir pada
        saat resepsi dan memberikan Do’a Restu kepada kedua mempelai.
      </p>

      <img
        src="@/assets/images/decoration-photos.webp"
        class="mt-4 w-50"
        alt=""
      />
      <p class="text-lg text-honey-carrot text-primary mt-3">
        Septina Azrida, Amd.Farm., Apt.
      </p>
      <p class="text-sm text-roboto">
        Putri Pertama dari Bapak Darmansyah A, S.P. <br />& Ibu Rosmalaina,
        S.Pd.
      </p>
      <p class="text-xl text-honey-carrot text-primary my-4">
        &
      </p>
      <img src="@/assets/images/decoration-photos.webp" class="w-50" alt="" />
      <p class="text-lg text-honey-carrot text-primary mt-3">
        Saharuddin, M.Clin.Farm.
      </p>
      <p class="text-sm text-roboto">
        Putri Pertama dari Bapak Anwar (Alm.) <br />& Ibu Hj. Sinar
      </p>
    </div>
  </div>

  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary d-none"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
    id="buttonProtokol"
  >
    Launch static backdrop modal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <p class="text-md fw-bold">Protokol Kesehatan (Covid-19)</p>
          <p class="text-sm">
            Demi mendukung kesehatan bersama alangkah baiknya para tamu yang
            akan hadir memenuhi protokol kesehatan sebagai berikut:
          </p>
          <img
            src="@/assets/images/prokes-covid.jpg"
            alt="Prokes Covid 19"
            style="width: 100%;"
          />
          <button
            type="button"
            class="btn btn-primary text-sm mt-4"
            data-bs-dismiss="modal"
          >
            Baik, Saya mengerti
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// path to file
import Countdown from "@chenfengyuan/vue-countdown";

export default {
  name: "App",
  data() {
    return {
      show: false,
      muted: false,
    };
  },
  computed: {
    dday() {
      return (
        new Date("December 26, 2021 08:00:00").getTime() - new Date().getTime()
      );
    },
  },
  components: {
    Countdown,
  },
  methods: {
    onClickBukaUndangan() {
      this.show = true;

      document.getElementById("buttonProtokol").click();
      const audio = document.getElementById("audio");
      audio.play();
    },
    onClickMuted() {
      const audio = document.getElementById("audio");
      this.muted = !this.muted;
      audio.muted = this.muted;
    },
  },
  created() {
    setTimeout(function() {
      document.getElementById("btn-undangan").style.visibility = "visible";
    }, 1600);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap");
@import url("https://fonts.cdnfonts.com/css/honey-carrot");

* {
  font-family: "Ubuntu", sans-serif;
}

.screen-wrapper {
  background: url("../assets/images/background-3.jpg") center center/cover;
  height: 100vh;
  position: relative;
  z-index: 100;
  transition: transform 0.5s ease-in-out;

  &.show {
    transform: translateY(-100%);
  }

  .card-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
    margin: 0 auto;
    color: #555;

    .btn {
      font-size: 0.8rem;
    }

    .icon-love-letter {
      height: 16px;
      margin-right: 10px;
    }
  }
}

.main {
  position: absolute;
  z-index: 0;
  top: 0;

  .decoration-header,
  .decoration-footer {
    // position: absolute;
    // top: 200px;
    width: 65%;
  }

  .main-content {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    background: url("../assets/images/background-1.png") no-repeat center
      center/cover;

    &-doa {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      .content {
        width: 80%;
      }
    }
  }
  .main-kata-sambutan {
    background: url("../assets/images/background-0.png");
  }
}

.bg-primary {
  background: #ae8f7a !important;
}

.btn-primary {
  font-weight: 700;
  background-color: #e2b097;
  border-color: #e2b097;
  color: #555;

  &:hover {
    background-color: #e2b097;
    border-color: #e2b097;
    color: #555;
  }
}

.btn-secondary {
  font-weight: 700;
  background-color: #e2d4c8;
  border-color: #e2d4c8;
  color: #555;

  &:hover {
    background-color: #e2d4c8;
    border-color: #e2d4c8;
    color: #555;
  }
}

.text-primary {
  color: #ae8f7a !important;
}

.text-ubuntu {
  font-family: "Ubuntu", sans-serif;
}

.text-honey-carrot {
  font-family: "Honey Carrot", sans-serif;
}

.text-roboto {
  font-family: "Roboto", sans-serif;
}

.text-sm {
  font-size: 0.8rem !important;
}

.text-md {
  font-size: 1rem !important;
}

.text-lg {
  font-size: 1.6rem !important;
}

.text-xl {
  font-size: 2.2rem !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-100%);
}

.btn-muted {
  position: fixed;
  bottom: 40%;
  right: 0;
  outline: none;

  &:active {
    border: none;
  }

  &:focus {
    border: none;
  }
}

.fade-in-top {
  -webkit-animation: fade-in-top 1s ease-in-out 0.8s both;
  animation: fade-in-top 1s ease-in-out 0.8s both;
}
.scale-in-bottom {
  -webkit-animation: scale-in-bottom 1s ease-in-out 1s both;
  animation: scale-in-bottom 1s ease-in-out 1s both;
}
.fade-in-bottom {
  -webkit-animation: fade-in-bottom 1s ease-in-out 1.3s both;
  animation: fade-in-bottom 1s ease-in-out 1.3s both;
}
.fade-in-bottom-1 {
  -webkit-animation: fade-in-bottom 1s ease-in-out 1.5s both;
  animation: fade-in-bottom 1s ease-in-out 1.3s both;
}
.scale-in-bottom-1 {
  -webkit-animation: scale-in-bottom 1s ease-in-out 1.4s both;
  animation: scale-in-bottom 1s ease-in-out 1.4s both;
}
.blink-1 {
  -webkit-animation: blink-1 4s infinite 0.8s both;
  animation: blink-1 4s infinite 0.8s both;
}

/* ----------------------------------------------
 * Generated by Animista on 2021-11-2 1:3:35
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in-top
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes scale-in-bottom {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: 1;
  }
}
@keyframes scale-in-bottom {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: 1;
  }
}
@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 0;
  }
  25%,
  75% {
    opacity: 1;
  }
}
@keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
</style>
