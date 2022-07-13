<template>
  <div class="wrapper">
    <Alert v-if="alertMessage" :message="alertMessage" />

    <Header />

    <main>
      <h1 class="title">For the artist in you</h1>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet
        volutpat, sagittis, id in leo, aenean eget. id in leo, aenean eget.
      </p>
      <form class="form-box" @submit.prevent="submit">
        <input type="text" v-model="email" placeholder="Your email address" />
        <button>
          <img src="../assets/right-arrow.svg" alt="right-arrow" />
        </button>
      </form>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { addUser } from "@/firebase";
import Alert from "./Alert.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

const alertMessage = ref(null);

// import { getAnalytics } from "firebase/analytics";
const email = ref("");

const reset = () => {
  email.value = "";

  setTimeout(() => {
    alertMessage.value = null;
  }, 5000);
};

const submit = () => {
  if (!email.value) {
    return;
  }

  alertMessage.value = addUser(email.value);

  reset();
};
</script>

<style scoped>
@font-face {
  font-family: "MadeSunflower";
  src: url("../assets/fonts/Made.woff");
}

.alert {
  position: absolute;
  top: 30px;
  min-width: 300px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: -18px 20px 21px -10px rgba(145, 145, 145, 0.11);
  padding: 20px;
  right: 30px;
  display: flex;
  gap: 8px;
  align-items: center;
  z-index: 3;
}

.wrapper {
  min-height: 100vh;
  position: relative;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  position: relative;
}

.wrapper::after {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  inset: 0;
  content: "";
  opacity: 0.7;
}

main {
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
}

main {
  height: 100vh;
  margin-top: -110px;
  margin-bottom: -110px;
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.title {
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 30px;
  font-family: "MadeSunflower";
}

.text {
  max-width: 530px;
  line-height: 36px;
  font-size: 1.125rem;
  margin-bottom: 50px;
  opacity: 0.8;
}

.form-box {
  max-width: -webkit-fit-content;
  max-width: -moz-fit-content;
  max-width: fit-content;
  display: flex;
  gap: 20px;
}

input {
  height: 48px;
  width: 480px;
  border: none;
  background-color: rgb(255, 255, 255, 0.5);
  outline: none;
  transition: 0.2s ease-in-out;
  padding-left: 20px;
  font-size: 18px;
  transition: 0.2s ease-in-out;
}

input:focus {
  background-color: #fff;
}

input::-webkit-input-placeholder {
  color: #cccccc;
}

input::-moz-placeholder {
  color: #cccccc;
}

input:-ms-input-placeholder {
  color: #cccccc;
}

input::-ms-input-placeholder {
  color: #cccccc;
}

input::placeholder {
  color: #cccccc;
}

button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #e8bb7d;
  border: none;
  color: #fff;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

button img {
  transition: 0.2s ease-in-out;
  filter: invert(1);
}

button:hover {
  background-color: #ad8c5e;
}

button:hover img {
  transform: translateX(4px);
}

@media screen and (min-width: 568px) {
  .title {
    font-size: 6rem;
  }
}
</style>
