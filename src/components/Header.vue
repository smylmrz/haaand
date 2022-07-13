<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" title="Haaand logo" alt="logo" />
    </div>
  </header>
</template>

<style scoped>
.logo {
  filter: invert(1);
  position: relative;
  z-index: 2;
  width: 140px;
}

.logo img {
  width: 100%;
}

header {
  height: 110px;
  display: flex;
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
</style>
