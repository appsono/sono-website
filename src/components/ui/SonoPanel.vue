<script setup>
defineProps({
  tint: {
    type: String,
    required: true,
    validator: (value) =>
      ["pink", "peach", "sage", "lilac", "sky"].includes(value),
  },
  tag: { type: String, default: "section" },
});
</script>

<template>
  <component :is="tag" class="panel" :class="`tint-${tint}`">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.panel {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border-radius: var(--radius-panel);
  background: var(--tint);
}

@each $name in "pink", "peach", "sage", "lilac", "sky" {
  .tint-#{$name} {
    --tint: var(--tint-#{$name});
    --mark: var(--mark-#{$name});
    --glyph: var(--glyph-#{$name});
  }
}

:slotted(.glyph) {
  position: absolute;
  z-index: -1;
  color: var(--glyph);
  pointer-events: none;
}
</style>
