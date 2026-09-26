<script setup>
import FeaturePanel from "../panels/FeaturePanel.vue";
import album from "../../../assets/screenshots/album.webp";
import equalizer from "../../../assets/screenshots/equalizer.webp";
import home from "../../../assets/screenshots/home.webp";
import lyrics from "../../../assets/screenshots/lyrics.webp";
import search from "../../../assets/screenshots/search.webp";
import tagEditor from "../../../assets/screenshots/tag-editor.webp";
</script>

<template>
  <section id="features">
    <div class="intro">
      <h2>Made for people that still own their music files.</h2>
      <p>
        Sono plays the music your already own. No streaming, no account, no ads,
        not tracking.
      </p>
    </div>

    <div class="grid">
      <FeaturePanel
        tint="peach"
        glyph="home"
        :image="home"
        alt="Sono home screen"
        :tilt="8"
        :x="64"
        :y="24"
      >
        <template #title>Your <span>Collection</span></template>
        Recently added, albums, artists and recently played on one home screen.
      </FeaturePanel>
      <FeaturePanel
        tint="sky"
        glyph="search"
        :image="search"
        alt="Sono search screen"
        :tilt="-9"
        :x="40"
        :y="12"
      >
        <template #title><span>Search</span> your whole library</template>
      </FeaturePanel>
      <FeaturePanel
        tint="pink"
        glyph="lyrics"
        :image="lyrics"
        alt="Sono synced lyrics view"
        :tilt="-6"
        :x="36"
        :y="48"
      >
        <template #title><span>Synced Lyrics</span>, even offline</template>
      </FeaturePanel>
      <FeaturePanel
        tint="lilac"
        glyph="equalizer"
        :image="equalizer"
        alt="Sono equalizer"
        :tilt="10"
        :x="62"
        :y="20"
      >
        <template #title><span>Audio Tuning</span>, from EQ to pitch</template>
      </FeaturePanel>
      <FeaturePanel
        tint="sage"
        glyph="album"
        :image="album"
        alt="Sono album page"
        :tilt="-7"
        :x="42"
        :y="16"
      >
        <template #title>Complete <span>Album View</span></template>
        Gapless transitions between songs, the way the albums was meant to be
        listened to.
      </FeaturePanel>
      <FeaturePanel
        tint="sky"
        glyph="edit"
        :image="tagEditor"
        alt="Sono tag editor"
      >
        <template #title><span>Metadata</span> Control</template>
        Fix a wrong artist or missing track number without leaving the app.
      </FeaturePanel>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../../styles/_breakpoints.scss" as *;

.intro {
  max-width: 640px;
  padding: 96px 8px 32px;

  h2 {
    margin-bottom: var(--font-heading);
    font-size: clamp(28px, 4vw, 36px);
    font-weight: 400;
    line-height: 1.2;
  }

  p {
    color: var(--text-secondary);
  }
}

.grid {
  display: grid;
  gap: 16px;

  @include up(split) {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 120px;

    > :nth-child(even) {
      translate: 0 120px;
    }
  }
}
</style>
