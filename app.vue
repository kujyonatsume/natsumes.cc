<template>
  <Head>
    <Link rel="icon" href="/favicon.ico" />
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;600;700&display=swap" rel="stylesheet" />

  </Head>
  <Body>
    <v-app>
      <!-- Navigation Drawer -->
      <v-navigation-drawer v-model="drawer" expand-on-hover>
        <v-list nav density="comfortable">
          <v-list-item :to="'/'" prepend-icon="mdi-home" title="首頁" />
          <v-list-item
            :to="'/about'"
            prepend-icon="mdi-account"
            title="關於我"
          />
          <v-divider class="my-2" />
        </v-list>
        <template #append>
          <v-list nav density="comfortable">
            <v-list-item
              :href="site.footer.repo_link"
              target="_blank"
              prepend-icon="mdi-github"
              title="原始碼"
            />
            <v-divider class="my-2" />
            <v-list-item
              @click="toggleDark"
              :prepend-icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
              :title="isDark ? '切換為淺色' : '切換為深色'"
            />
          </v-list>
        </template>
      </v-navigation-drawer>

      <!-- App Bar -->
      <v-app-bar flat class="backdrop-blur border-b" :color="barColor">
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-app-bar-title class="font-semibold text-primary-700">
          <NuxtLink to="/" class="no-underline text-inherit">{{
            site.title
          }}</NuxtLink>
        </v-app-bar-title>
        <v-spacer />
      </v-app-bar>

      <!-- Main -->
      <v-main>
        <div id="body" class="min-h-screen">
          <NuxtPage />
        </div>
      </v-main>

      <!-- Footer -->
      <v-footer
        app
        class="justify-center py-4 text-sm text-neutral-700 dark:text-neutral-300"
      >
        <span class="text-xs opacity-70">© 2025 九条夏目．版權所有</span>
      </v-footer>
    </v-app>
  </Body>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import site from "./assets/site.json";

const drawer = ref(true);
const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const barColor = computed(() => (isDark.value ? "surface-variant" : "white"));

function setTheme(name: "light" | "dark") {
  theme.global.name.value = name;
  if (process.client) {
    localStorage.setItem("theme-preference", name);
    // 同步 <meta name="theme-color">
    const meta = document.querySelector(
      'meta[name="theme-color"]'
    ) as HTMLMetaElement | null;
    if (meta)
      meta.setAttribute(
        "content",
        name === "dark" ? "#101b39" : site.theme_color
      );
    // 配合 Tailwind 的 dark 類
    document.documentElement.classList.toggle("dark", name === "dark");
  }
}
function toggleDark() {
  setTheme(isDark.value ? "light" : "dark");
}

onMounted(() => {
  // 讀取偏好
  const saved = localStorage.getItem("theme-preference") as
    | "light"
    | "dark"
    | null;
  if (saved) return setTheme(saved);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
});
</script>

<style scoped>
/* 讓 app-bar 與內容有細邊框感 */
.border-b {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
:deep(html.dark) .border-b {
  border-color: rgba(255, 255, 255, 0.08);
}
</style>
