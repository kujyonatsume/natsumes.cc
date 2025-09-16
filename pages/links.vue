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

      <!-- Links -->
      <div class="links">
        <v-btn block :href="`https://discordapp.com/users/386473957806833664`" target="_blank"
               prepend-icon="mdi-discord" class="glass-btn" size="large">
          Discord <span class="hint">@natsume0304</span>
        </v-btn>

        <v-btn block :href="`https://www.facebook.com/adam200134`" target="_blank"
               prepend-icon="mdi-facebook" class="glass-btn" size="large">
          Facebook <span class="hint">@natsume0304</span>
        </v-btn>

        <v-btn block :href="`https://x.com/${twitterHandle}`" target="_blank"
               prepend-icon="mdi-twitter" class="glass-btn" size="large">
          Twitter / X <span class="hint">{{ site.twitter_user }}</span>
        </v-btn>

        <v-btn block :href="`https://www.youtube.com/channel/UCLdnm3oXAE3ZWNcIq2hORpQ`" target="_blank"
               prepend-icon="mdi-youtube" class="glass-btn" size="large">
          YouTube <span class="hint">@目頭人</span>
        </v-btn>

        <v-btn block href="mailto:adam200134@gmail.com"
               prepend-icon="mdi-email" class="glass-btn" size="large">
          Email <span class="hint">adam200134@gmail.com</span>
        </v-btn>

        <v-btn block :href="site.footer.author.link" target="_blank"
               prepend-icon="mdi-github" class="glass-btn" size="large">
          GitHub <span class="hint">{{ site.footer.author.name }}</span>
        </v-btn>

        <v-btn block :href="site.url" target="_blank"
               prepend-icon="mdi-link-variant" class="glass-btn" size="large">
          網站 <span class="hint">{{ site.url }}</span>
        </v-btn>
      </div>

      <footer class="mt-6 text-center">
        <span class="badge">Made with <span class="accent">Vuetify</span></span>
      </footer>
    </section>
  </v-container>
</template>

<script setup lang="tsx">
import site from '../assets/site.json'
definePageMeta({ layout: 'blank' })
useHead({ title: `我的連結` });

const twitterHandle = computed(() => site.twitter_user?.replace('@','') || '')
// 可選：const avatarUrl = new URL('../assets/avatar.jpg', import.meta.url).href

</script>

<style scoped>
.linkbio { max-width: 520px; }
.text-muted { color: rgba(0,0,0,.55); }
:deep(html.dark) .text-muted { color: rgba(255,255,255,.7); }

.avatar {
  width: 88px; height: 88px; border-radius: 9999px;
  background: linear-gradient(135deg,#38bdf8,#818cf8);
  color: #fff; font-weight: 800; font-size: 32px;
  margin: 0 auto;
}

.links { display: grid; gap: 12px; }

/* lit.link 風格玻璃按鈕 */
.glass-btn {
  justify-content: flex-start;
  border-radius: 18px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,.25);
  background: color-mix(in oklab, white 55%, transparent);
  color: rgb(var(--v-theme-on-surface));
  text-transform: none;
  font-weight: 600;
  letter-spacing: .2px;
}
:deep(.v-btn__content) { width: 100%; display: flex; justify-content: space-between; align-items: center; }
.hint { font-weight: 500; opacity: .65; font-size: .9rem; }

/* 暗色 */
:deep(html.dark) .glass-btn {
  background: color-mix(in oklab, rgb(var(--v-theme-surface)) 70%, transparent);
  border-color: rgba(255,255,255,.12);
}
.badge {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 10px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,.25);
  background: rgba(255,255,255,.35);
  font-size: 12px;
}
:deep(html.dark) .badge { background: rgba(255,255,255,.12); }
.accent { color: #38bdf8; }
</style>
