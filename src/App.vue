<script setup>
import StickyDownloadBar from "./components/ui/bars/StickyDownloadBar.vue";
import ExtrasSection from "./components/ui/sections/ExtrasSection.vue";
import FeaturesSection from "./components/ui/sections/FeaturesSection.vue";
import HeroSection from "./components/ui/sections/HeroSection.vue";
import OpenSourceSection from "./components/ui/sections/OpenSourceSection.vue";
import SiteFooter from "./components/ui/SiteFooter.vue";
import SiteHeader from "./components/ui/SiteHeader.vue";
</script>

<template>
  <div class="layout">
    <SiteHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <ExtrasSection />
      <OpenSourceSection />
    </main>
    <SiteFooter />
  </div>
  <StickyDownloadBar />
</template>

<style lang="scss" scoped>
.layout {
  width: min(1180px, 100% - 32px);
  margin-inline: auto;
}
</style>
