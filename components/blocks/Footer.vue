<script setup lang="ts">
const links = [
  {
    label: "Liens utiles",
    children: [
      {
        label: "Mentions légales",
        to: "/mentions-legales",
      },
      {
        label: "Politique de confidentialité",
        to: "/politique-de-confidentialite",
      },
    ],
  },
];
</script>

<template>
  <UFooter>
    <template #left>
      © {{ new Date().getFullYear() }}, Max Digital Services. Tous droits
      réservés
    </template>

    <template #right>
      <UFooterColumns :links="links">
        <template #right>
          <UButton
            icon="i-simple-icons-x"
            color="gray"
            variant="ghost"
            to="https://x.com/nuxt_js"
            target="_blank"
          />
          <UButton
            icon="i-simple-icons-discord"
            color="gray"
            variant="ghost"
            to="https://discord.com/invite/ps2h6QT"
            target="_blank"
          />
          <UButton
            icon="i-simple-icons-github"
            color="gray"
            variant="ghost"
            to="https://github.com/nuxt/nuxt"
            target="_blank"
          />
        </template>
      </UFooterColumns>
    </template>
  </UFooter>
</template>
