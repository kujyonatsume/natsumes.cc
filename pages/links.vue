<template>
  <v-container class="py-10">
    <section class="linkbio mx-auto">
      <!-- Header -->
      <header class="text-center mb-6">
        <!-- 有頭像就換成 <v-img :src="avatarUrl" class="avatar" cover /> -->
        <div class="avatar grid place-items-center">夏</div>
        <h1 class="mt-4 text-2xl font-bold">夏目</h1>
        <p class="text-sm text-muted mt-1">社群與聯絡 · Link in bio</p>
      </header>

      <!-- v-for 產生按鈕 -->
      <div class="links">
        <v-btn
          v-for="link in links"
          :key="link.label"
          block
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :prepend-icon="link.icon"
          class="glass-btn"
          size="large"
        >
          {{ link.label }}
          <span v-if="link.hint" class="hint">{{ link.hint }}</span>
        </v-btn>
      </div>

      <footer class="mt-6 text-center">
        <span class="badge">Made with <span class="accent">Vuetify</span></span>
      </footer>
    </section>
  </v-container>
</template>

<script setup lang="tsx">
import { computed } from "vue";
import site from "../assets/site.json";

definePageMeta({ layout: "blank" });
useHead({ title: `相關連結` });

const twitterHandle = computed(() => site.twitter_user?.replace("@", "") || "");

type LinkItem = {
  label: string;
  href: string;
  icon: string;
  hint?: string;
  external?: boolean;
};

const links = computed<LinkItem[]>(() => [
    {
    label: "網站",
    href: site.url,
    icon: "mdi-link-variant",
    hint: site.url,
    external: true,
  },
  {
    label: "Discord",
    href: "https://discordapp.com/users/386473957806833664",
    icon: "mdi-discord",
    hint: "@natsume0304",
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/adam200134",
    icon: "mdi-facebook",
    hint: "@natsume0304",
    external: true,
  },
  {
    label: "Twitter / X",
    href: `https://x.com/${twitterHandle.value}`,
    icon: "mdi-twitter",
    hint: site.twitter_user,
    external: true,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCLdnm3oXAE3ZWNcIq2hORpQ",
    icon: "mdi-youtube",
    hint: "@目頭人",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:adam200134@gmail.com",
    icon: "mdi-email",
    hint: "adam200134@gmail.com",
  },
  {
    label: "GitHub",
    href: site.footer.author.link,
    icon: "mdi-github",
    hint: site.footer.author.name,
    external: true,
  },
    {
    label: "GitHub",
    href: "https://iruni-button.natssumes.cc",
    icon: "mdi-link-variant",
    hint: site.footer.author.name,
    external: true,
  },
]);
</script>

<style scoped>
.linkbio {
  max-width: 520px;
}
.text-muted {
  color: rgba(0, 0, 0, 0.55);
}
:deep(html.dark) .text-muted {
  color: rgba(255, 255, 255, 0.7);
}

.avatar {
  width: 88px;
  height: 88px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #38bdf8, #818cf8);
  color: #fff;
  font-weight: 800;
  font-size: 32px;
  margin: 0 auto;
}

.links {
  display: grid;
  gap: 12px;
}

/* lit.link 風格玻璃按鈕 */
.glass-btn {
  justify-content: flex-start;
  border-radius: 18px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: color-mix(in oklab, white 55%, transparent);
  color: rgb(var(--v-theme-on-surface));
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0.2px;
}
:deep(.v-btn__content) {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hint {
  font-weight: 500;
  opacity: 0.65;
  font-size: 0.9rem;
}

/* 暗色 */
:deep(html.dark) .glass-btn {
  background: color-mix(in oklab, rgb(var(--v-theme-surface)) 70%, transparent);
  border-color: rgba(255, 255, 255, 0.12);
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.35);
  font-size: 12px;
}
:deep(html.dark) .badge {
  background: rgba(255, 255, 255, 0.12);
}
.accent {
  color: #38bdf8;
}
</style>
