<script setup>
import SonoIcon from "../../SonoIcon.vue";
import SonoPanel from "../SonoPanel.vue";

const links = [
  {
    icon: "github",
    title: "Source code",
    text: "Issues, feature requests and releases",
    href: "https://github.com/appsono/sono-new",
  },
  {
    icon: "translate",
    title: "Translate in Weblate",
    text: "Help bring Sono to your language",
    href: "https://hosted.weblate.org/projects/sono/",
  },
  {
    icon: "discord",
    title: "Join the Discord",
    text: "Updates, feedback and questions",
    href: "https://discord.gg/48fvsUCNwu",
  },
  {
    icon: "kofi",
    title: "Support on Ko-fi",
    text: "Fund the development of Sono",
    href: "https://ko-fi.com/mathiiis",
  },
];
</script>

<template>
  <SonoPanel tint="butter" class="open">
    <SonoIcon name="polygon" class="glyph" />

    <div class="copy">
      <h2 class="headline">Built in the <span>open</span></h2>
      <p>
        Sono is open source under GPL-3.0 and built with Flutter. Found a bug,
        have an idea or want to help translate Sono? Feel free to contribute. :D
      </p>
      <p class="privacy">
        It reads the audio files on your device and nothing else. There is no
        analytics SDK and no advertising ID.
      </p>
    </div>

    <div class="links">
      <a
        v-for="link in links"
        :key="link.title"
        class="link"
        :href="link.href"
        target="_blank"
      >
        <SonoIcon :name="link.icon" class="icon" />
        <span>
          <strong>{{ link.title }}</strong>
          <small>{{ link.text }}</small>
        </span>
      </a>
    </div>
  </SonoPanel>
</template>

<style lang="scss" scoped>
@use "../../../styles/_breakpoints.scss" as *;

.open {
  display: grid;
  gap: 32px;
  margin-top: 96px;
  padding: 48px 28px;

  @include up(split) {
    grid-template-columns: 1.1fr 1fr;
    align-items: center;
    padding: 72px 64px;
  }
}

.glyph {
  right: -140px;
  bottom: -200px;
  font-size: 520px;
  transform: rotate(-10deg);
}

.headline {
  font-size: clamp(32px, 4.4vw, 48px);
}

.copy p {
  max-width: 46ch;
  margin-top: 18px;
  color: var(--text-secondary);
}

.links {
  display: grid;
  gap: 10px;
}

.link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 18px;
  border-radius: 20px;
  background: color-mix(in srgb, var(--mark) 45%, transparent);
  text-decoration: none;
  transition: background-color var(--duration-fast) ease;

  &:hover {
    background: color-mix(in srgb, var(--mark) 80%, transparent);
  }

  strong {
    display: block;
    font-weight: 600;
  }

  small {
    display: block;
    color: var(--text-secondary);
    font-size: 13px;
  }
}

.icon {
  font-size: 24px;
}
</style>
