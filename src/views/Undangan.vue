<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center"
    style="height: 100vh; width: 100vw;"
    v-if="!isLogin"
  >
    <h1 class="mb-5">Login</h1>
    <form @submit.prevent="onLogin">
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="username"
          placeholder="username ..."
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          v-model="password"
          placeholder="password ..."
        />
      </div>
      <input type="submit" value="Sign In" class="btn btn-success mt-3" />
    </form>
  </div>

  <div
    class="d-flex flex-column justify-content-center align-items-center"
    style="height: 100vh; width: 100vw;"
    v-else
  >
    <h1 class="mb-5">Undangan</h1>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="no hp ..."
        v-model="nohp"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control text-capitalize"
        placeholder="nama ..."
        v-model="nama"
      />
    </div>
    <button type="button" class="btn btn-success mt-3" @click="sendToWA">
      Share via WA Personal
    </button>
    <button
      @click.stop.prevent="toCopy"
      type="button"
      class="btn btn-success mt-3"
    >
      Copy Undangan
    </button>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Undangan",
  data() {
    return {
      isLogin: false,
      username: null,
      password: null,
      nohp: "+628",
      nama: null,
      isi: null,
    };
  },
  methods: {
    onLogin() {
      if (
        this.username === null ||
        this.password === null ||
        this.username === "" ||
        this.password === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops 😭",
          html: `Masukkin <span style="text-decoration:underline">username</span> sama <span style="text-decoration:underline">password</span> dulu kak!`,
        });
        return;
      }

      if (this.username !== "tinauddin" && this.password !== "11062022") {
        Swal.fire({
          icon: "error",
          title: "Oops 😭",
          html: `Salah <span style="text-decoration:underline">username</span> atau <span style="text-decoration:underline">password</span> itu kak! <br><small class="text-danger">Hubungi kak messy kalo mau tau passwordnya kak</small>`,
        });
        return;
      }

      this.username = null;
      this.password = null;
      this.isLogin = true;
      Swal.fire({
        icon: "success",
        title: "Halo 😁",
        text: `Kak Tina dan Bang Uddin`,
      });
    },
    toCopy() {
      const temp = this.nama.replace(/ /g, ";").replace("&", "=");
      this.isi = `Bismillahirrahmanirrahim

Assalamualaikum Wr. Wb.

Yth. ${this.nama.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      })}

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami :

Septina Azrida, Amd.Farm.
          dan
Apt. Saharuddin, M.Clin.Farm.

Berikut link undangan kami untuk info lengkap dari acara bisa kunjungi :

https://saharuddin-septina-weddings.netlify.app/${temp};

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu

Mohon maaf perihal undangan hanya di bagikan melalui pesan ini. Karena suasana masih pandemi diharapkan untuk menggunakan masker dan datang pada jam yang telah ditentukan. Terima kasih banyak atas perhatiannya.

Wassalamu'alaikum Wr. Wb.
Terima Kasih.
`;

      const mySmartTextarea = document.createElement("textarea");
      mySmartTextarea.innerHTML = this.isi;
      document.body.appendChild(mySmartTextarea);

      mySmartTextarea.select();
      document.execCommand("copy");
      Swal.fire({
        icon: "success",
        title: "Yeay 😀",
        html: `Undangan berhasil di copy ke clipboard`,
      });
      mySmartTextarea.remove();

      this.nama = "";
      this.nohp = "+628";
    },
    sendToWA() {
      const temp = this.nama.replace(/ /g, ";").replace("&", "=");
      window.open(
        `https://wa.me/${this.nohp
          .replace(/[^a-zA-Z 0-9+]+/g, "")
          .replace(
            /\s/g,
            ""
          )}?text=Bismillahirrahmanirrahim%0A%0AAssalamualaikum%20Wr.%20Wb.%0A%0AYth.%20${this.nama.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        )}%0A%0ATanpa%20mengurangi%20rasa%20hormat,%20perkenankan%20kami%20mengundang%20Bapak/Ibu/Saudara/i,%20teman%20sekaligus%20sahabat,%20untuk%20menghadiri%20acara%20pernikahan%20kami:%0A%0ASeptina%20Azrida,%20Amd.Farm.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dan%0Aapt.%20Saharuddin,%20M.Clin.Farm%0A%0ABerikut%20link%20undangan%20kami%20untuk%20info%20lengkap%20dari%20acara%20bisa%20kunjungi:%0A%0Ahttps://saharuddin-septina-weddings.netlify.app/${temp};%0A%0AMerupakan%20suatu%20kebahagiaan%20bagi%20kami%20apabila%20Bapak/Ibu/Saudara/i%20berkenan%20untuk%20hadir%20dan%20memberikan%20doa%20restu%0A%0AMohon%20maaf%20perihal%20undangan%20hanya%20dibagikan%20melalui%20pesan%20ini.%20Karena%20suasana%20masih%20pandemi%20diharapkan%20untuk%20menggunakan%20maskter%20dan%20datang%20pada%20jam%20yang%20telah%20ditentukan.%20Terima%20kasih%20banyak%20atas%20perhatiannya%0A%0ATerima%20kasih%0AWassalamu'alaikum%20Wr.%20Wb.`,
        "_blank"
      );
      this.nama = "";
      this.nohp = "+628";
    },
  },
};
</script>
