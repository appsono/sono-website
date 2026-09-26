<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import SonoButton from "../SonoButton.vue";
import logo from "../../../assets/logo.webp";

const visible = ref(false);
let observer;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    visible.value = !entry.isIntersecting && entry.boundingClientRect.top < 0;
  });
  observer.observe(document.getElementById("download"));
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <aside
    class="mini"
    :class="{ visible }"
    :inert="!visible"
    aria-label="Download"
  >
    <img :src="logo" alt="Sono Logo" width="50" height="50" />
    <div class="text">
      <strong>Sono</strong>
      <small>A Local music player</small>
    </div>
    <SonoButton
      class="get"
      href="https://play.google.com/store/apps/details?id=wtf.sono.app"
      target="_blank"
      >Get Sono</SonoButton
    >
  </aside>
</template>

<style lang="scss" scoped>
.mini {
  position: fixed;
  z-index: 10;
  bottom: 16px;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 12px;
  width: min(560px, 100% - 24px);
  height: var(--player-height);
  padding: 0 10px;
  border: 1px solid var(--border-light-10);
  border-radius: var(--radius-nav);
  background: var(--bg-container);
  box-shadow: var(--shadow-nav);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  backdrop-filter: blur(20px) saturate(1.4);
  visibility: hidden;
  transform: translate(-50%, calc(100% + 32px));
  transition:
    transform var(--duration-slow) cubic-bezier(0.2, 0.9, 0.3, 1.2),
    visibility 0s var(--duration-slow);

  &.visible {
    visibility: visible;
    transform: translate(-50%, 0);
    transition-delay: 0s;
  }

  img {
    border-radius: var(--radius-lg);
  }
}

.text {
  flex: 1;
  min-width: 0;
  line-height: 1.3;

  strong {
    display: block;
    font-size: 15px;
    font-weight: 700;
  }

  small {
    display: block;
    overflow: hidden;
    color: var(--text-secondary);
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.mini .get {
  height: 44px;
  padding: 0 18px;
  font-size: 14px;
}
</style>
