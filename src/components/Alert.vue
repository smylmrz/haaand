<template>
  <div class="alert" :class="{ active: message }">
    <img
      v-if="message?.type === 'success'"
      src="@/assets/success.png"
      alt="success icon"
    />
    <img v-else src="@/assets/error.png" alt="error icon" />
    <span>{{ message?.message }}</span>
  </div>
</template>

<script setup>
defineProps({
  message: Object,
});
</script>
