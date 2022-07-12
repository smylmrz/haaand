<template>
  <div class="wrapper">
    <Alert :message="alertMessage" />
    <div class="bg">
      <img src="../assets/bg.jpg" alt="" />
    </div>
    <header>
      <div class="logo">
        <img src="../assets/logo.png" title="Haaand logo" alt="logo" />
      </div>
    </header>
    <main>
      <h1>For the artist in you</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet
        volutpat, sagittis, id in leo, aenean eget. id in leo, aenean eget.
      </p>
      <div class="form-box">
        <input type="text" v-model="email" placeholder="Your email address" />
        <button @click="submit">
          <img src="../assets/right-arrow.svg" alt="right-arrow" />
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { watchEffect, ref } from "vue";
import { getUsers, addUser } from "@/firebase";
import Alert from "./Alert.vue";

const alertMessage = ref(null);

// import { getAnalytics } from "firebase/analytics";
let users = getUsers();
const email = ref("");

const reset = () => {
  email.value = "";

  setTimeout(() => {
    alertMessage.value = null;
  }, 3000);
};

const submit = () => {
  if (!email.value) {
    return;
  }

  alertMessage.value = addUser(email.value);

  reset();
};
</script>
