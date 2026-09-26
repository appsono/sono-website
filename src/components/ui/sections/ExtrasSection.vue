<script setup>
import SonoIcon from "../../SonoIcon.vue";

const extras = [
  {
    icon: "volume_mute",
    tint: "pink",
    accent: "primary",
    title: "Pauses on unplug",
    text: "Stops the music when your headphones disconnect.",
  },
  {
    icon: "bell",
    tint: "sky",
    accent: "accent-blue",
    title: "Lookscreen controls",
    text: "Control your playback from the Lookscreen.",
  },
  {
    icon: "appearance",
    tint: "lilac",
    accent: "accent-purple",
    title: "Appearance",
    text: "Customize the look of Sono with themese, button styles, home screen tinting and more to come.",
  },
  {
    icon: "folder",
    tint: "peach",
    accent: "accent-orange",
    title: "Folder control",
    text: "Choose which folders get scanned and which get skipped.",
  },
  {
    icon: "discord",
    tint: "lilac",
    accent: "accent-purple",
    title: "Discord presence",
    text: "Optional, show what you are listening to on Discord.",
  },
  {
    icon: "backup",
    tint: "sage",
    accent: "accent-green",
    title: "Backups",
    text: "Easily export Liked songs, playlists and settings in one file.",
  },
];
</script>

<template>
  <section class="extras">
    <h2 class="section-title">...but there is more</h2>
    <div class="grid">
      <div v-for="extra in extras" :key="extra.title" class="extra">
        <div
          class="chip"
          :style="{
            background: `var(--tint-${extra.tint})`,
            color: `var(--${extra.accent})`,
          }"
        >
          <SonoIcon :name="extra.icon" />
        </div>
        <h3>{{ extra.title }}</h3>
        <p>{{ extra.text }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../../styles/_breakpoints.scss" as *;

.extras {
  padding-top: 34px;
}

.section-title {
  padding: 0 8px 24px;
}

.grid {
  display: grid;
  gap: 12px;

  @include up(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include up(split) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.extra {
  padding: 22px 22px 24px;
  border: 1px solid var(--border-light-10);
  border-radius: 20px;
  background: var(--bg-container);

  h3 {
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 600;
  }

  p {
    color: var(--text-secondary);
    font-size: 14px;
  }
}

.chip {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-bottom: 14px;
  border-radius: var(--radius);
  font-size: 22px;
}
</style>
