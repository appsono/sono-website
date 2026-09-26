<script setup>
import SonoIcon from "../../SonoIcon.vue";
import SonoPanel from "../SonoPanel.vue";

defineProps({
  tint: { type: String, required: true },
  glyph: { type: String, required: true },
  image: { type: String, required: true },
  alt: { type: String, required: true },
  tilt: { type: Number, default: 0 },
  x: { type: Number, default: 50 },
  y: { type: Number, default: 28 },
  flip: { type: Boolean, default: false },
});
</script>

<template>
  <SonoPanel :tint="tint" class="feature" :class="{ flip }">
    <SonoIcon :name="glyph" class="glyph" />

    <div class="copy">
      <h2 class="headline"><slot name="title" /></h2>
    </div>

    <div class="shot">
      <img
        :src="image"
        :alt="alt"
        :style="{ '--tilt': `${tilt}deg`, '--x': `${x}%`, '--y': `${y}px` }"
        loading="lazy"
      />
    </div>
  </SonoPanel>
</template>

<style lang="scss" scoped>
@use "../../../styles/_breakpoints.scss" as *;

.feature {
  display: flex;
  flex-direction: column;
}

.glyph {
  top: -70px;
  right: -70px;
  font-size: 320px;
  transform: rotate(10deg);
}

.flip .glyph {
  @include up(split) {
    top: auto;
    right: auto;
    bottom: -70px;
    left: -70px;
    transform: rotate(-14deg);
  }
}

.copy {
  padding: 36px 28px 0;

  @include up(tablet) {
    padding: 44px 40px 0;
  }
}

.flip .copy {
  @include up(split) {
    order: 2;
    padding-top: 0;
    padding-bottom: 44px;
  }
}

.headline {
  font-size: clamp(36px, 4.4vw, 52px);
}

.shot {
  position: relative;
  flex: 1;
  min-height: 360px;

  img {
    position: absolute;
    top: var(--y);
    left: var(--x);
    width: 260px;
    transform: translateX(-50%) rotate(var(--tilt));
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
  }
}

.flip .shot img {
  @include up(split) {
    top: auto;
    bottom: var(--y);
  }
}
</style>
