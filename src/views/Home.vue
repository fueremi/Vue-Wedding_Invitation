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
          @click="show = true"
        >
          <img src="@/assets/love-letter.png" class="icon-love-letter" />
          Buka Undangan
        </button>
      </div>
    </div>
  </div>
  <div class="main">
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
export default {
  name: "App",
  data() {
    return {
      show: false,
    };
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
    width: 80%;
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
    margin: 0 auto;
    width: 85%;
    text-align: center;
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
  font-size: 1.6rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-100%);
}
</style>
