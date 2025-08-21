<template>
  <v-container class="py-8">
    <header class="flex flex-col md:flex-row items-center gap-6 mb-8">
      <v-avatar size="96" color="primary" variant="tonal">
        <v-img :src="site.avatar" :alt="site.title" cover />
      </v-avatar>
      <div>
        <h1 class="text-3xl font-bold text-primary-700">關於我</h1>
        <p class="text-neutral-700 mt-2">九条夏目 · 工程與內容創作</p>
      </div>
    </header>

    <v-row class="g-6">
      <!-- 左側主要內容 -->
      <v-col cols="12" md="8">
        <!-- 自我介紹 -->
        <v-card :class="glass" variant="flat">
          <v-card-title class="text-lg">自我介紹</v-card-title>
          <v-card-text class="prose max-w-none">
            <p>
              嗨，我是九条夏目！一位熱愛技術與創作的前端工程師。從接觸網頁設計開始，就深深著迷於將想法轉化為能互動的網站，
              並在不斷實作中追求更高的品質與更好的用戶體驗。
            </p>
            <p>
              目前專注於使用 <b>Nuxt3</b>、<b>Vue3</b>、<b>TypeScript</b> 和
              <b>TailwindCSS</b> 進行現代化前端開發，
              同時也積極探索桌面應用與遊戲開發領域，持續拓展自己的技術邊界。
            </p>
          </v-card-text>
        </v-card>

        <!-- 技術專長 -->
        <v-card class="rounded-3xl mt-6">
          <v-card-title class="text-lg">技術專長</v-card-title>
          <v-card-text>
            <ul
              class="list-disc list-inside grid grid-cols-2 gap-x-8 gap-y-2 text-gray-600 dark:text-gray-300 text-sm"
            >
              <li>Nuxt3 + TypeScript 前端開發</li>
              <li>API 串接與前後端整合</li>
              <li>Minecraft 插件開發 (Spigot / Bukkit)</li>
              <li>Electron + TypeScript 桌面應用開發</li>
              <li>Unity C# 遊戲開發</li>
              <li>C# WPF 桌面應用開發</li>
            </ul>
          </v-card-text>
        </v-card>

        <!-- 學習歷程 -->
        <v-card class="rounded-3xl mt-6">
          <v-card-title class="text-lg">學習歷程</v-card-title>
          <v-card-text class="prose max-w-none">
            <p>
              我從自學網頁設計起步，透過 HTML 和 CSS 奠定前端基礎，進而深入
              JavaScript，並專精於
              <b>Nuxt3</b>、<b>Vue3</b> 與
              <b>TypeScript</b>，致力於打造高效、優雅且響應式的網站。
            </p>
            <p>
              除了前端領域，我也涉獵 <b>Minecraft 插件開發</b>，熟悉 Spigot /
              Bukkit 平台，從遊戲邏輯到插件功能設計，累積了豐富的實作經驗。
            </p>
            <p>
              在桌面開發方面，使用 <b>Electron + TypeScript</b> 製作跨平台應用，
              同時也掌握了
              <b>C# WPF</b> 桌面程式開發，能靈活整合不同平台的使用體驗。
            </p>
            <p>
              此外，我對 <b>Unity C#</b> 遊戲開發充滿熱情，曾製作過簡單的 2D /
              3D 小型專案， 體驗從程式邏輯設計到互動體驗優化的完整流程。
            </p>
            <p>
              未來，我會持續鑽研更多技術領域，並在實作中不斷挑戰自我、累積經驗，將學習轉化為創造力，記錄並分享每一段成長歷程。
            </p>
          </v-card-text>
        </v-card>

        <!-- 興趣愛好 -->
        <v-card class="rounded-3xl mt-6">
          <v-card-title class="text-lg">興趣愛好</v-card-title>
          <v-card-text class="prose max-w-none">
            <p>
              除了寫程式之外，我也喜歡逛展覽、旅行探索不同文化，以及記錄生活中的小確幸。
              在閒暇時，我熱衷於接觸二次元文化，特別喜愛
              Vtuber、動漫、遊戲與角色設計 🎮✨，
              這些愛好也成為我在開發作品時的重要靈感來源。
            </p>
            <p>
              希望透過這個部落格，分享我在學習、開發、生活各方面的體驗，
              一步步累積屬於自己的成長故事，也歡迎志同道合的朋友們一起交流！
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 右側資訊 -->
      <v-col cols="12" md="4">
        <v-card :class="glass" variant="flat">
          <v-card-title class="text-lg">社群與聯絡</v-card-title>
          <v-list lines="two">
            <v-list-item
              :href="`https://discordapp.com/users/386473957806833664`"
              target="_blank"
              prepend-icon="mdi-discord"
              title="Discord"
              subtitle="@natsume0304"
            />
            <v-list-item
              :href="`https://www.facebook.com/adam200134`"
              target="_blank"
              prepend-icon="mdi-facebook"
              title="Facebook"
              subtitle="@natsume0304"
            />
            <v-list-item
              :href="`https://x.com/${site.twitter_user.replace('@', '')}`"
              target="_blank"
              prepend-icon="mdi-twitter"
              title="Twitter"
              :subtitle="site.twitter_user"
            />
            <v-list-item
              :href="`https://www.youtube.com/channel/UCLdnm3oXAE3ZWNcIq2hORpQ`"
              target="_blank"
              prepend-icon="mdi-youtube"
              title="Youtube"
              subtitle="@目頭人"
            />
            <v-list-item
              href="mailto:adam200134@gmail.com"
              prepend-icon="mdi-email"
              title="Email"
              subtitle="adam200134@gmail.com"
            />
            <v-list-item
              :href="site.footer.author.link"
              target="_blank"
              prepend-icon="mdi-github"
              title="GitHub"
              :subtitle="site.footer.author.name"
            />
            <v-list-item
              :href="site.url"
              target="_blank"
              prepend-icon="mdi-link-variant"
              title="網站"
              :subtitle="site.url"
            />
          </v-list>
        </v-card>

        <v-card class="rounded-3xl mt-6">
          <v-card-title class="text-lg">站點資訊</v-card-title>
          <v-card-text class="text-sm">
            <div class="mb-2">
              <span class="font-medium">標題：</span>{{ site.title }}
            </div>
            <div class="mb-2">
              <span class="font-medium">描述：</span>{{ site.description }}
            </div>
            <div class="mb-2">
              <span class="font-medium">主題色：</span>
              <v-chip color="primary" class="mr-2" size="small">primary</v-chip>
              <v-chip color="secondary" size="small">secondary</v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="tsx">
import site from "../assets/site.json";

useHead({ title: `關於我 · ${site.title}` });
const glass = 'rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md border border-white/20 dark:border-white/10'

</script>

<style scoped>
.prose p {
  margin: 0.5rem 0;
}
</style>
