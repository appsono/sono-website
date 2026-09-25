<script setup>
import SonoIcon from "../SonoIcon.vue";

defineProps({
  href: { type: String, required: true },
  icon: { type: String, default: null },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "quiet"].includes(value),
  },
});
</script>

<template>
  <a class="button" :class="variant" :href="href">
    <SonoIcon v-if="icon" :name="icon" class="icon" />
    <slot />
  </a>
</template>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 52px;
  padding: 0 22px;
  border-radius: var(--radius-lg);
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  transition:
    transform var(--duration-fast) ease,
    background-color var(--duration-fast) ease;
}

.icon {
  font-size: 20px;
}

.primary {
  color: var(--text-light);
  background: linear-gradient(180deg, var(--accent-start), var(--accent-end));

  &:hover {
    border-radius: var(--radius-sm);
  }
}

.quiet {
  color: var(--text-primary);
  background: var(--bg-container);

  &:hover {
    background: var(--bg-surface-hover);
  }
}
</style>
