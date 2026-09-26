<script setup>
import ExtrasSection from "./components/ui/sections/ExtrasSection.vue";
import FeaturesSection from "./components/ui/sections/FeaturesSection.vue";
import HeroSection from "./components/ui/sections/HeroSection.vue";
import SiteHeader from "./components/ui/SiteHeader.vue";
</script>

<template>
  <div class="layout">
    <SiteHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <ExtrasSection />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: min(1180px, 100% - 32px);
  margin-inline: auto;
}
</style>
