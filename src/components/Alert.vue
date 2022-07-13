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

<style scoped>
.alert {
  position: absolute;
  bottom: 30px;
  min-width: 300px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: -18px 20px 21px -10px rgba(145, 145, 145, 0.11);
  padding: 20px;
  display: flex;
  gap: 8px;
  align-items: center;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (min-width: 568px) {
  .alert {
    top: 30px;
    bottom: unset;
    left: unset;
    right: 30px;
    transform: translateX(0);
  }
}
</style>
