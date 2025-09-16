<template>
  <v-container class="py-8">
    <!-- About (摘要，連到 /about) -->
    <section>
      <!-- 左：頭貼 1/3 -->
      <h2 class="text-2xl font-semibold mb-4">關於我</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <a
          class="text-primary hover:underline md:col-span-1 mt-6 flex flex-col items-center gap-3 text-sm text-center"
          :href="site.footer.author.link"
          target="_blank"
        >
          <v-avatar size="128" color="primary" variant="tonal">
            <v-img :src="site.avatar" :alt="site.title" cover />
          </v-avatar>
          <p>{{ site.footer.author.name }} <span>(本名 : 許家銘)</span></p>
        </a>
        <div class="md:col-span-2">
          <v-card :class="glass" variant="flat">
            <v-card-text class="prose max-w-none">
              <p>
                嗨，我是九条夏目！一位熱愛技術與創作的前端工程師。從接觸網頁設計開始，就深深著迷於將想法轉化為能互動的網站，
                並在不斷實作中追求更高的品質與更好的用戶體驗。
              </p>
              <p>
                目前專注於使用
                <strong>Nuxt3</strong>、<strong>Vue3</strong>、<strong
                  >TypeScript</strong
                >
                和 <strong>TailwindCSS</strong>
                進行現代化前端開發；同時也探索桌面應用與遊戲開發，持續拓展技術邊界。
              </p>
              <v-btn
                class="mt-4 rounded-2xl"
                color="primary"
                variant="tonal"
                to="/about"
              >
                閱讀更多
              </v-btn>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="mt-16">
      <h2 class="text-2xl font-semibold mb-4">技能</h2>
      <v-sheet :class="`p-4 ${glass}`" variant="flat">
        <div class="flex flex-wrap gap-2">
          <v-chip
            v-for="s in skills"
            :key="s"
            color="secondary"
            variant="elevated"
            >{{ s }}</v-chip
          >
        </div>
      </v-sheet>
    </section>

    <!-- Projects -->
    <section class="mt-16">
      <div class="flex items-baseline justify-between mb-4">
        <h2 class="text-2xl font-semibold">專案</h2>
        <v-btn
          :href="site.footer.author.link"
          target="_blank"
          variant="text"
          color="primary"
          >在 GitHub 查看</v-btn
        >
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <v-card
          v-for="p in projects"
          :key="p.title"
          :class="glass"
          :href="p.link"
          target="_blank"
        >
          <v-card-title class="text-lg">{{ p.title }}</v-card-title>
          <v-card-subtitle>{{ p.stack }}</v-card-subtitle>
          <v-card-text>{{ p.desc }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" variant="tonal">開啟</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </section>

    <!-- Timeline -->
    <section class="mt-16">
      <h2 class="text-2xl font-semibold mb-4">時間線</h2>
      <v-timeline
        density="comfortable"
        line-color="primary"
        truncate-line="both"
      >
        <v-timeline-item
          v-for="(t, i) in timeline"
          :key="i"
          :dot-color="i % 2 ? 'secondary' : 'primary'"
          size="small"
        >
          <template #opposite>
            <span class="block w-24 md:w-28 text-right tabular-nums">{{
              t.date
            }}</span>
          </template>

          <v-card :class="[glass, 'rounded-2xl']" variant="flat">
            <v-card-title class="text-base">{{ t.title }}</v-card-title>
            <v-card-text class="text-sm">{{ t.desc }}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </section>
  </v-container>
</template>

<script setup lang="ts">
import site from "../assets/site.json";

useHead({
  link: [{ rel: "canonical", href: site.url }],
});

const glass =
  "rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md border border-white/20 dark:border-white/10";

const skills = [
  "Nuxt 3",
  "Vue 3",
  "TypeScript",
  "API 整合",
  "TailwindCSS",
  "Vuetify",
  "Minecraft 插件 (Spigot/Bukkit)",
  "Electron + TypeScript",
  "Unity C#",
  "C# WPF",
];

const projects = [
  {
    title: "個人網站",
    stack: "Nuxt 3 · Tailwind · Vuetify",
    desc: "本站原始碼與建置設定。",
    link: site.footer.repo_link,
  },
  {
    title: "VTuber Button Template",
    stack: "Nuxt 3 · TypeScript",
    desc: "合力製作互動按鈕模板，支援簡易主題。",
    link: "https://github.com/7Red4/vtuber-button-template",
  },
  {
    title: "Discord X-Bot",
    stack: "TypeORM · better-sqlite3",
    desc: "使用TypeORM與SQLite並解析GraphApi將推文轉發到Discord",
    link: "https://github.com/kujyonatsume/djs14bot",
  },
];

const timeline = [
    {
    date: "2025-09-16",
    title: "新增相關連結頁面",
    desc: "新增快速連結頁面，參考lit.link排版。",
  },
  {
    date: "2025-08-17",
    title: "樣式及內容更新(正式上線)",
    desc: "新增關於與專案區塊，導入 Vuetify 主題色，整合 Tailwind 配色。",
  },
  {
    date: "2025-04-21",
    title: "本機測試",
    desc: "完成基本頁面與部署。",
  },
];
</script>

<style scoped>
.prose p {
  margin: 0.5rem 0;
}
</style>
