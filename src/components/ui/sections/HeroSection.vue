<script setup>
import SonoButton from "../SonoButton.vue";
import SonoIcon from "../../SonoIcon.vue";
import SonoPanel from "../SonoPanel.vue";
import library from "../../../assets/screenshots/library.webp";
import nowPlaying from "../../../assets/screenshots/now-playing.webp";
</script>

<template>
  <SonoPanel tint="pink" class="hero">
    <SonoIcon name="skip_next" class="glyph skip" />
    <SonoIcon name="polygon" class="glyph polygon" />

    <div class="copy">
      <h1 class="headline">Only you and <span>your music</span>.</h1>
      <p class="lede">
        A local music player for Android and iOS, with Linux and Windows on the
        way. Gapless playback, a nice equalizer and your library in the way you
        wanted it to look.
      </p>
      <div class="actions">
        <SonoButton
          href="https://play.google.com/store/apps/details?id=wtf.sono.app"
          target="_blank"
          icon="googleplay"
        >
          Get it on Google Play
        </SonoButton>
        <SonoButton
          href="https://github.com/appsono/sono-new/releases/latest"
          target="_blank"
          icon="github"
          variant="quiet"
        >
          GitHub releases
        </SonoButton>
      </div>
      <p class="license">
        Free and open source under GPL-3.0. Also on
        <a href="https://sono.mathiiis.de/get" target="_blank">Obtanium</a>.
      </p>
    </div>

    <div class="stage">
      <img class="phone back" :src="library" alt="Sono library screen" />
      <img
        class="phone front"
        :src="nowPlaying"
        alt="Sono now playing screen"
      />
    </div>
  </SonoPanel>
</template>

<style lang="scss" scoped>
@use "../../../styles/_breakpoints.scss" as *;

.hero {
  display: grid;
  gap: 8px;
  min-height: 640px;

  @include up(split) {
    grid-template-columns: 1.05fr 1fr;
    align-items: center;
    min-height: 700px;
  }
}

.skip {
  top: -140px;
  right: -120px;
  font-size: 560px;
  transform: rotate(-12deg);
}

.polygon {
  bottom: -120px;
  left: -120px;
  font-size: 380px;
  transform: rotate(18deg);
}

.copy {
  max-width: 560px;
  padding: 48px 28px 0;

  @include up(split) {
    padding: 64px 0 64px 64px;
  }
}

.headline {
  font-size: clamp(40px, 7vw, 62px);
}

.lede {
  max-width: 34ch;
  margin: 20px 0 32px;
  color: var(--text-secondary);
  font-size: 18px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.license {
  margin-top: 18px;
  color: var(--text-tertiary);
  font-size: 13px;
}

.stage {
  --phone-width: 220px;

  position: relative;
  height: calc(var(--phone-width) * 1.2);

  @include up(tablet) {
    --phone-width: 270px;
  }

  @include up(split) {
    --phone-width: 300px;

    height: 700px;
  }
}

.phone {
  position: absolute;
  left: 50%;
  width: var(--phone-width);
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25));
}

.front {
  z-index: 1;
  top: 40px;
  transform: translateX(-84%) rotate(-7deg);

  @include up(split) {
    top: 90px;
  }
}

.back {
  top: 110px;
  transform: translateX(-12%) rotate(6deg);

  @include up(split) {
    top: 170px;
  }
}
</style>
