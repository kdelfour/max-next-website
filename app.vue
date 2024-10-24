<script setup lang="ts">
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: { lang: "fr" },
  title: "MAX – L'Entreprise libérée et durable",
});

useSeoMeta({
  ogImage: "https://landing-template.nuxt.dev/social-card.png",
  twitterImage: "https://landing-template.nuxt.dev/social-card.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>

  <UNotifications />
</template>
