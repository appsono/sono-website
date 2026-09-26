<script setup>
const year = new Date().getFullYear();
const repo = "https://github.com/appsono/sono-new/blob/main";
</script>

<template>
  <footer class="footer">
    <span
      >© {{ year }} mathiiiiiis. Do not use this project for illegal
      purposes.</span
    >
    <nav aria-label="Footer">
      <a :href="`${repo}/legal/privacy_policy.md`" target="_blank"
        >Privacy Policy</a
      >
      <a :href="`${repo}/LICENSE`" target="_blank">License</a>
      <a :href="`${repo}/CHANGELOG.md`" target="_blank">Changelog</a>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  padding: 40px 8px 56px;
  color: var(--text-tertiary);
  font-size: 13px;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  a {
    text-decoration: none;
    transition: color var(--duration-fast) ease;

    &:hover {
      color: var(--text-primary);
    }
  }
}
</style>
