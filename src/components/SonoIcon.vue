<script setup>
import { computed } from "vue";

const icons = import.meta.glob("../assets/icons/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

const props = defineProps({
  name: { type: String, required: true },
});

const svg = computed(() => icons[`../assets/icons/${props.name}.svg`]);
</script>

<template>
  <span class="sono-icon" aria-hidden="true" v-html="svg" />
</template>

<style lang="scss" scoped>
.sono-icon {
  display: inline-flex;
  flex: none;
  width: 1em;
  height: 1em;

  :deep(svg) {
    width: 100%;
  }
}
</style>
