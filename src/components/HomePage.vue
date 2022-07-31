<template>
  <div class="container">
    <Header />
    <Alert v-if="subscribed" />
    <div v-else>
      <Form  @subscribed="subscribed = true" />
      <Services />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Services from "./Services.vue";
import Header from "./Header.vue";
import Form from "./Form.vue"
import Alert from "./Alert.vue"

const subscribed = ref(false)
</script>


