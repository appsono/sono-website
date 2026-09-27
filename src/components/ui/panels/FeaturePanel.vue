<script setup>
import { computed } from "vue";
import SonoIcon from "../../SonoIcon.vue";
import SonoPanel from "../SonoPanel.vue";

const props = defineProps({
  tint: { type: String, required: true },
  glyph: { type: String, required: true },
  image: { type: String, required: true },
  alt: { type: String, required: true },
  tilt: { type: Number, default: 0 },
  x: { type: Number, default: 50 },
  y: { type: Number, default: 28 },
  flip: { type: Boolean, default: false },
});

const hoverTilt = computed(() => props.tilt + (props.tilt < 0 ? -3 : 3));
</script>

<template>
  <SonoPanel :tint="tint" class="feature" :class="{ flip }">
    <SonoIcon :name="glyph" class="glyph" />

    <div class="copy">
      <h2 class="headline"><slot name="title" /></h2>
      <p v-if="$slots.default" class="text"><slot /></p>
    </div>

    <div class="shot">
      <img
        :src="image"
        :alt="alt"
        :style="{
          '--tilt': `${tilt}deg`,
          '--tilt-hover': `${hoverTilt}deg`,
          '--x': `${x}%`,
          '--y': `${y}px`,
        }"
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

.text {
  max-width: 36ch;
  margin-top: 14px;
  color: var(--text-secondary);
}

.shot {
  position: relative;
  flex: 1;
  min-height: 360px;

  img {
    position: absolute;
    top: var(--y);
    left: 50%;
    width: 260px;
    transform: translateX(-50%) rotate(var(--tilt));
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));

    @include up(split) {
      left: var(--x);
    }
  }
}

.flip .shot img {
  @include up(split) {
    top: auto;
    bottom: var(--y);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .shot img {
    --lift: -14px;

    transition:
      translate 900ms cubic-bezier(0.2, 0.8, 0.2, 1),
      transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .flip .shot img {
    @include up(split) {
      --lift: 14px;
    }
  }

  @media (hover: hover) {
    .feature:hover .shot img {
      transform: translateX(-50%) translateY(var(--lift))
        rotate(var(--tilt-hover));
    }
  }

  .reveal:not(.revealed) .shot img {
    translate: 0 120px;
  }

  .flip.reveal:not(.revealed) .shot img {
    @include up(split) {
      translate: 0 -120px;
    }
  }
}
</style>
