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
    <nav class="menu">
      <div
        class="container-fluid d-flex justify-content-center align-items-center"
      >
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#section1">
              <img
                src="@/assets/images/menu-1.png"
                style="height:40px; width:40px"
                alt=""
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section2"
              ><img
                src="@/assets/images/menu-2.png"
                style="height:40px; width:40px"
                alt=""
            /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section3"
              ><img
                src="@/assets/images/menu-3.png"
                style="height:40px; width:40px"
                alt=""
            /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section4"
              ><img
                src="@/assets/images/menu-4.png"
                style="height:40px; width:40px"
                alt=""
            /></a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="main-content pb-5" id="section1">
      <button @click="onClickMuted" class="btn btn-muted">
        <i
          class="fas"
          :class="[!muted ? 'fa-volume-up' : 'fa-volume-mute']"
        ></i>
      </button>
      <div class="main-content-doa">
        <img
          src="@/assets/images/decoration-1.png"
          class="decoration-header mb-3"
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
          src="@/assets/images/decoration-1.png"
          class="decoration-header my-3"
          style="transform: rotate(180deg)"
          alt=""
        />
      </div>

      <div class="main-content-hari">
        <p class="text-sm text-roboto">Pernikahan dari:</p>
        <p class="text-lg text-primary text-honey-carrot">
          Setpina & Saharuddin
        </p>
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
    <div class="main-kata-sambutan p-4" id="section2">
      <img
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        data-aos-once="true"
        src="@/assets/images/bismillah.svg"
        class="mt-5 w-50 mb-4"
        alt=""
      />
      <p
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-once="true"
        class="text-lg text-honey-carrot text-primary"
      >
        Assalamual`aikum Wr. Wb.
      </p>
      <p
        class="d-inline-block text-sm text-roboto"
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta
        Kerabat sekalian untuk menghadiri acara pernikahan kami:
      </p>
      <p
        class="text-sm text-roboto"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        Dikarenakan PPKM di Kota Palembang, merupakan suatu kehormatan dan
        kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir pada
        saat resepsi dan memberikan Do’a Restu kepada kedua mempelai.
      </p>
      <div
        class="position-relative my-5"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <img src="@/assets/images/pl.png" class="mt-3 w-25" alt="" />
        <img
          src="@/assets/images/golden-wreath-png.png"
          class="position-absolute top-50 start-50 translate-middle w-40 mt-3"
          alt=""
        />
      </div>
      <p
        class="text-lg text-honey-carrot text-primary mt-4"
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        Septina Azrida, Amd.Farm.
      </p>
      <p
        class="text-sm text-roboto"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        Putri Kedua dari Bapak Darmansyah A, S.P. <br />& Ibu Rosmalaina, S.Pd.
      </p>
      <p
        class="text-xl text-honey-carrot text-primary my-4"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        &
      </p>
      <div
        class="position-relative my-5"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <img src="@/assets/images/tl.png" class="mt-3 w-25 decor" alt="" />
        <img
          src="@/assets/images/golden-wreath-png.png"
          class="position-absolute top-50 start-50 translate-middle w-40 mt-3"
          alt=""
        />
      </div>
      <p
        class="text-lg text-honey-carrot text-primary mt-3"
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        Apt. Saharuddin, M.Clin.Farm.
      </p>
      <p
        class="text-sm text-roboto mb-5"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        Putra Ketiga dari Bapak Anwar (Alm.) <br />& Ibu Hj. Sinar
      </p>
    </div>
    <div class="main-acara" id="section3">
      <img src="@/assets/images/wave.png" class="w-100" alt="" />
      <div class="bg-primary py-3 px-1">
        <p class="text-honey-carrot text-xl m-0 text-secondary">
          Acara
        </p>
      </div>

      <div class="mt-4">
        <div
          class="card-acara"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <p class="text-lg text-honey-carrot text-primary">Akad Nikah</p>
          <p class="text-md text-roboto mb-1">Minggu, 26 Desember 2021</p>
          <p class="text-sm text-roboto mb-1">Pukul 08.00</p>
          <p class="text-sm text-roboto mb-1">
            <em><sup>*</sup>hanya dihadiri Keluarga Besar</em>
          </p>
          <p class="text-sm text-roboto">
            Alamat: Jl.Tanah Mas Komp.Azhar Permai Blok A2 No.5 RT.12 RW.04
            KM.14
          </p>
        </div>
        <div
          class="card-acara mt-4"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <p class="text-lg text-honey-carrot text-primary">Resepsi</p>
          <p class="text-md text-roboto mb-1">Minggu, 26 Desember 2021</p>
          <p class="text-sm text-roboto mb-1">Pukul 11.00</p>
          <p class="text-sm text-roboto">
            Alamat: Jl.Tanah Mas Komp.Azhar Permai Blok A2 No.5 RT.12 RW.04
            KM.14
          </p>
        </div>
        <div
          class="card-acara mt-4"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <p class="text-lg text-honey-carrot text-primary mb-1">Maps</p>
          <a
            class="btn bg-primary text-sm text-secondary blink-1"
            href="https://www.google.com/maps/place/2%C2%B055'51.7%22S+104%C2%B039'52.7%22E/@-2.9310298,104.6624536,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-2.9310298!4d104.6646423?hl=en"
            target="__blank"
          >
            Lihat Lokasi
          </a>
        </div>
      </div>
    </div>
    <div class="main-ucapan pt-5" id="section4">
      <p class="text-honey-carrot text-lg text-primary">
        Ucapkan Sesuatu
      </p>
      <p class="text-roboto text-sm">
        Berikan Ucapan & Doa Restu
      </p>
      <div class="container">
        <select class="form-select form-select-sm w-75 mx-auto mb-3">
          <option class="text-muted" selected>Konfirmasi Kehadiran</option>
          <option value="akan hadir">Akan Hadir</option>
          <option value="tidak hadir">Tidak Hadir</option>
        </select>
        <input
          class="form-control form-control-sm w-75 mx-auto mb-3"
          type="text"
          placeholder="Nama"
        />
        <textarea
          class="form-control form-control-sm w-75 mx-auto mb-3"
          rows="3"
          placeholder="Berikan Ucapan & Do'a Restu"
        ></textarea>
        <button class="btn bg-primary text-secondary btn-sm text-sm">
          Submit
        </button>
        <div class="container">
          <hr />
          <div>
            <div class="card-ucapan-wrapper">
              <div class="card-ucapan mb-4 shadow-sm">
                <div class="d-flex align-items-center">
                  <p class="text-sm text-start text-roboto m-0">
                    Messy Triandani
                  </p>
                  <span class="ms-2 badge rounded-pill bg-primary text-xs"
                    ><i class="fas fa-check"></i> Hadir</span
                  >
                </div>
                <p
                  class="text-sm text-roboto text-start mt-2 mb-1 text-justify"
                >
                  <em
                    >"Selamat menempuh hidup baru Septina & Suami, semoga
                    menjadi keluarga Samawa Aamiin"</em
                  >
                </p>
              </div>
              <div class="card-ucapan mb-4 shadow-sm">
                <div class="d-flex align-items-center">
                  <p class="text-sm text-start text-roboto m-0">
                    Messy Triandani
                  </p>
                  <span class="ms-2 badge rounded-pill bg-primary text-xs"
                    ><i class="fas fa-check"></i> Hadir</span
                  >
                </div>
                <p
                  class="text-sm text-roboto text-start mt-2 mb-1 text-justify"
                >
                  <em
                    >"Selamat menempuh hidup baru Septina & Suami, semoga
                    menjadi keluarga Samawa Aamiin"</em
                  >
                </p>
              </div>
              <div class="card-ucapan mb-4 shadow-sm">
                <div class="d-flex align-items-center">
                  <p class="text-sm text-start text-roboto m-0">
                    Messy Triandani
                  </p>
                  <span class="ms-2 badge rounded-pill bg-primary text-xs"
                    ><i class="fas fa-check"></i> Hadir</span
                  >
                </div>
                <p
                  class="text-sm text-roboto text-start mt-2 mb-1 text-justify"
                >
                  <em
                    >"Selamat menempuh hidup baru Septina & Suami, semoga
                    menjadi keluarga Samawa Aamiin"</em
                  >
                </p>
              </div>
              <div class="card-ucapan mb-4 shadow-sm">
                <div class="d-flex align-items-center">
                  <p class="text-sm text-start text-roboto m-0">
                    Messy Triandani
                  </p>
                  <span class="ms-2 badge rounded-pill bg-primary text-xs"
                    ><i class="fas fa-check"></i> Hadir</span
                  >
                </div>
                <p
                  class="text-sm text-roboto text-start mt-2 mb-1 text-justify"
                >
                  <em
                    >"Selamat menempuh hidup baru Septina & Suami, semoga
                    menjadi keluarga Samawa Aamiin"</em
                  >
                </p>
              </div>
              <div class="card-ucapan mb-4 shadow-sm">
                <div class="d-flex align-items-center">
                  <p class="text-sm text-start text-roboto m-0">
                    Messy Triandani
                  </p>
                  <span class="ms-2 badge rounded-pill bg-primary text-xs"
                    ><i class="fas fa-check"></i> Hadir</span
                  >
                </div>
                <p
                  class="text-sm text-roboto text-start mt-2 mb-1 text-justify"
                >
                  <em
                    >"Selamat menempuh hidup baru Septina & Suami, semoga
                    menjadi keluarga Samawa Aamiin"</em
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    class="modal zoom-in"
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
import AOS from "aos";
import "aos/dist/aos.css";

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
    AOS.init();
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
    background: url("../assets/images/background-2.png") no-repeat center
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
    background: url("../assets/images/background-1.png") center center/cover;
  }

  .main-acara {
    background: url("../assets/images/background-2.png") no-repeat center
      center/cover;
    padding-bottom: 50px;
    .card-acara {
      padding: 20px 40px;
      box-shadow: 0px 10px 30px -5px rgb(0 0 0 / 30%);
      background: url("../assets/images/background-0.png") no-repeat center
        center/cover;
      width: 80%;
      margin: 0 auto;
      border-radius: 26px;
    }
  }

  .main-ucapan {
    background: url("../assets/images/background-1.png") center center/cover;
    height: 100vh;

    .card-ucapan-wrapper {
      height: 180px;
      overflow-y: scroll;
      width: 80%;
      margin: 0 auto;

      @media (min-height: 540px) {
        height: 250px;
      }

      @media (min-height: 720px) {
        height: 300px;
      }

      @media (min-height: 760px) {
        height: 400px;
      }

      .card-ucapan {
        width: 90%;
        padding: 10px 20px;
        background: #fff;
        // background: url("../assets/images/background-0.png") no-repeat center
        //   center/cover;
        margin: 0 auto;
      }
    }
  }
}

.w-40 {
  width: 45% !important;
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

.text-secondary {
  color: #fef8f4 !important;
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

.text-xs {
  font-size: 0.5rem !important;
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

.menu {
  position: fixed;
  bottom: 20px;
  left: 50%;
  width: 90%;
  border-radius: 25px;
  transform: translateX(-50%);
  background: #ae8f7a;
  z-index: 1000;
}
</style>
