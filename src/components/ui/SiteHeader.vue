<script setup>
import logo from "../../assets/logo.webp";
</script>

<template>
  <header class="header">
    <a class="brand" href="/">
      <img :src="logo" alt="" width="40" height="40" />
      <span>Sono</span>
    </a>
    <nav aria-label="Main">
      <a href="#features">Features</a>
      <a href="https://github.com/appsono/sono-new" target="_blank">GitHub</a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 8px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;

  /*img {
    border-radius: 11px;
  }*/

  span {
    font-family: var(--font-heading);
    font-size: 26px;
    letter-spacing: -0.01em;
  }
}

nav {
  display: flex;
  gap: 4px;

  a {
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: var(--text-primary);
      background: var(--bg-surface-hover);
    }
  }
}
</style>
