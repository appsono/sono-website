<script setup>
import HeroSection from "./components/ui/sections/HeroSection.vue";
import SiteHeader from "./components/ui/SiteHeader.vue";
</script>

<template>
  <div class="layout">
    <SiteHeader />
    <main>
      <HeroSection />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: min(1180px, 100% - 32px);
  margin-inline: auto;
}
</style>
