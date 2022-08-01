<template>
  <section class="hero">
    <!-- Hero Title -->
    <h1 class="hero__title">
      Kiçik biznesinizi <br />
      Böyütməyin vaxtıdır

      <img src="../assets/img/stars.png" alt="star icon">
    </h1>
    <!-- Hero Description -->
    <p class="hero__desc">
      Veb sayta ehtiyyacınız yoxdur!
      Tezliklə əl işlərinizi hamı ilə bölüşə biləcəyiniz onlayn mağazanız
      olacaq. <br /> Kiçik biznesinizi daha peşəkar göstərməyin
      vaxtıdır.
    </p>
    <!-- Hero form -->
    <div class="hero__form">
      <div class="hero__img">
        <img src="../assets/img/envelope.png" alt="" />
      </div>
      <form @submit="submit">
        <input v-model="email" type="email" placeholder="E-mail adresiniz" />
        <button type="submit">Bizə qoşul</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";
import { addUser } from "@/firebase";

const email = ref("");

const emit = defineEmits(['subscribed']);

const submit = () => {
  if (!email.value) {
    return;
  }

  addUser(email.value);

  emit('subscribed')
};
</script>
