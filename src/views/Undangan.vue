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
    <form @submit.prevent="onLogin">
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="no hp ..." />
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="nama ..." />
      </div>
      <input type="submit" value="Sign In" class="btn btn-success mt-3" />
    </form>
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
          html: `Salah <span style="text-decoration:underline">username</span> atay <span style="text-decoration:underline">password</span> itu kak! <br><small class="text-danger">Hubungi kak messy kalo mau tau passwordnya kak</small>`,
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Halo 😁",
        text: `Kak Tina dan Bang Uddin`,
      });
    },
  },
};
</script>

<style></style>
