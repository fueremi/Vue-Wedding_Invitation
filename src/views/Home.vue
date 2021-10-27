<template>
  <div class="screen-wrapper" :class="[show ? 'show' : '']">
    <div class="card-wrapper fw-bold">
      <div class="card text-center">
        <p>Kepada Yth. <br />Bapak/Ibu/Saudara/i</p>
        <p class="nama-penerima mb-0">Messy Triandani</p>
        <p class="nama-penerima my-0">&</p>
        <p class="nama-penerima mt-0">Partner</p>

        <button
          class="btn btn-primary btn-sm d-flex align-items-center justify-content-center"
          @click="onClickBukaUndangan"
        >
          <img src="@/assets/love-letter.png" class="icon-love-letter" />
          Buka Undangan
        </button>
      </div>
    </div>
  </div>
  <div class="main">
    <button @click="onClickMuted" class="btn btn-muted">
      <i class="fas" :class="[!muted ? 'fa-volume-up' : 'fa-volume-mute']"></i>
    </button>
    <audio id="audio" loop>
      <source src="../assets/audio/backsound.mp3" type="audio/mpeg" />
    </audio>
    <!-- <img src="@/assets/decoration-2.png" class="decoration-header" alt="" /> -->
    <div class="content p-1">
      <p class="mb-0">Assalamu`alaikum</p>
      <p class="mb-0">Warahmatullaahi Wabarakaatuh</p>
      <p class="mt-3 mb-0">
        Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
        Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan putra-putri
        kami:
      </p>
      <p class="nama-penerima mt-3 mb-0">Saharuddin, M.Clin.Farm.</p>
      <small class="d-block mt-3 mb-0">Putra xxxxx dari</small>
      <small class="d-block mb-0">Bapak Anwar (Alm.)</small>
      <small class="d-block mb-0">& Ibu Hj. Sinar</small>

      <p class="nama-penerima my-3">- & -</p>

      <p class="nama-penerima mb-0">Septina Azrida, Amd.Farm., Apt.</p>
      <small class="d-block mt-3 mb-0">Putri xxxxx dari</small>
      <small class="d-block mb-0">Bapak Darmansyah A, S.P.</small>
      <small class="d-block mb-0">& Ibu Rosmalaina, S.Pd.</small>
    </div>
    <!-- <img src="@/assets/decoration-3.png" class="decoration-footer" alt="" /> -->
    <!-- <div class="main"> -->
    <!-- <img src="@/assets/decoration-2.png" class="decoration-header" alt="" /> -->
    <!-- <div class="content p-1">
          <p class="mb-0">Assalamu`alaikum</p>
          <p class="mb-0">Warahmatullaahi Wabarakaatuh</p>
          <p class="mt-3 mb-0">
            Maha Suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi
            pernikahan putra-putri kami:
          </p>
          <p class="nama-penerima mt-3 mb-0">Saharuddin, M.Clin.Farm.</p>
          <small class="d-block mt-3 mb-0">Putra xxxxx dari</small>
          <small class="d-block mb-0">Bapak Anwar (Alm.)</small>
          <small class="d-block mb-0">& Ibu Hj. Sinar</small>

          <p class="nama-penerima my-3">- & -</p>

          <p class="nama-penerima mb-0">Septina Azrida, Amd.Farm., Apt.</p>
          <small class="d-block mt-3 mb-0">Putri xxxxx dari</small>
          <small class="d-block mb-0">Bapak Darmansyah A, S.P.</small>
          <small class="d-block mb-0">& Ibu Rosmalaina, S.Pd.</small>
        </div> -->
    <!-- <img src="@/assets/decoration-3.png" class="decoration-footer" alt="" /> -->
    <!-- </div> -->
  </div>
</template>

<script>
// path to file
export default {
  name: "App",
  data() {
    return {
      show: false,
      muted: false,
    };
  },
  methods: {
    onClickBukaUndangan() {
      this.show = true;
      const audio = document.getElementById("audio");
      audio.play();
    },
    onClickMuted() {
      const audio = document.getElementById("audio");
      this.muted = !this.muted;
      audio.muted = this.muted;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap");

* {
  font-family: "Ubuntu", sans-serif;
}

.screen-wrapper {
  background: url("../assets/background-3.jpg") center center/cover;
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

    .card {
      width: 100%;
      margin-top: -70px;
      padding: 50px;
      backdrop-filter: blur(5px) saturate(180%);
      -webkit-backdrop-filter: blur(5px) saturate(180%);
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 12px;
      border: 1px solid rgba(209, 213, 219, 0.3);

      p {
        line-height: 1.2;

        &:first-child {
          font-size: 0.7rem;
        }

        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          font-size: 1.3rem;
        }
      }

      .btn {
        font-size: 0.8rem;
      }

      .icon-love-letter {
        height: 16px;
        margin-right: 10px;
      }
    }
  }
}

.main {
  position: absolute;
  z-index: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("../assets/background-3.jpg") no-repeat center center/cover;

  .decoration-header {
    position: absolute;
    top: 0;
    width: 90%;
  }

  .decoration-footer {
    position: absolute;
    bottom: 0;
    width: 90%;
  }

  p {
    font-size: 0.8rem;
    margin: 0 auto;
    width: 70%;
    text-align: center;
  }

  small {
    font-size: 0.7rem;
  }
}

.btn-primary {
  font-weight: 700;
  background-color: #db9b7c;
  border-color: #db9b7c;
  color: #555;

  &:hover {
    background-color: #db9b7c;
    border-color: #db9b7c;
    color: #555;
  }
}

.nama-penerima {
  font-family: "Dancing Script", cursive;
  font-size: 1.3rem !important;
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
</style>
