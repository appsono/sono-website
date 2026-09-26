<script setup>
import SiteHeader from "./components/ui/SiteHeader.vue";
import SonoButton from "./components/ui/SonoButton.vue";
</script>

<template>
  <div class="layout">
    <SiteHeader />
    <SonoButton href="#" icon="googleplay">Google Play</SonoButton>

    <main></main>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: min(1180px, 100% - 32px);
  margin-inline: auto;
}
</style>
