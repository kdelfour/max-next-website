<script lang="ts" setup>
const links = [
  { label: "Accueil", to: "/" },
  {
    label: "Nos agences",
    children: [
      { label: "Rennes", to: "/agences/rennes" },
      { label: "Lyon", to: "/agences/lyon" },
    ],
  },
  { label: "Notre Vision et Philosophie", to: "/philosophy" },
  { label: "Nos services", to: "/services" },
  { label: "Nous rejoindre", to: "/join-us" },
  { label: "Contactez nous", to: "/contact" },
];
</script>
<template>
  <UHeader :links="links">
    <template #logo>
      <img src="~/assets/images/logo.svg" class="w-auto h-6" />
    </template>

    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>
