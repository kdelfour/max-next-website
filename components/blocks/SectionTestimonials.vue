<template>
  <ULandingSection
    :title="title"
    :description="description"
  >
    <UCarousel
      v-slot="{ item, index }"
      :items="items"
      :ui="{
        item: 'basis-full',
        container: 'rounded-lg',
        indicators: {
          wrapper: 'relative bottom-0 mt-4',
        },
      }"
      class="w-3/4 mx-auto"
      indicators
    >
      <ULandingTestimonial
        :quote="item.message"
        :author="{
          name: item.name,
          description: 'CEO at Google',
          to: 'https://google.com',
          target: '_blank',
          avatar: { src: item.avatar.src },
        }"
        card
      />
    </UCarousel>
  </ULandingSection>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String
});

const items = [
  {
    name: "Sébastien Chopin",
    description: "Développeur Full Stack",
    message:
      "Duis fermentum, magna nec elementum fringilla, tortor leo fringilla neque, porttitor hendrerit ligula diam sed ex. In eget tellus ac ex pellentesque sodales. In nec est auctor, tristique purus a, tristique elit. Nullam maximus orci et felis tempus, pulvinar tristique diam accumsan. Ut vehicula, est ac dictum congue, sapien diam commodo nunc, in suscipit nibh lacus quis ipsum. Donec blandit scelerisque sapien, nec commodo leo efficitur non. Quisque at neque nec felis sodales facilisis pellentesque quis nibh. Nam justo erat, congue vitae ultrices at, tempor non nunc. Maecenas ut risus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum dignissim ultricies risus ac sodales.",
    to: "https://github.com/Atinux",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/atinux" },
  },
  {
    name: "Pooya Parsa",
    description: "Développeur Full Stack",
    message:
      "Duis fermentum, magna nec elementum fringilla, tortor leo fringilla neque, porttitor hendrerit ligula diam sed ex. In eget tellus ac ex pellentesque sodales. In nec est auctor, tristique purus a, tristique elit. Nullam maximus orci et felis tempus, pulvinar tristique diam accumsan. Ut vehicula, est ac dictum congue, sapien diam commodo nunc, in suscipit nibh lacus quis ipsum. Donec blandit scelerisque sapien, nec commodo leo efficitur non. Quisque at neque nec felis sodales facilisis pellentesque quis nibh. Nam justo erat, congue vitae ultrices at, tempor non nunc. Maecenas ut risus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum dignissim ultricies risus ac sodales.",
    to: "https://github.com/pi0",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/pi0" },
  },
  {
    name: "Daniel Roe",
    description: "Développeur Full Stack",
    message:
      "Duis fermentum, magna nec elementum fringilla, tortor leo fringilla neque, porttitor hendrerit ligula diam sed ex. In eget tellus ac ex pellentesque sodales. In nec est auctor, tristique purus a, tristique elit. Nullam maximus orci et felis tempus, pulvinar tristique diam accumsan. Ut vehicula, est ac dictum congue, sapien diam commodo nunc, in suscipit nibh lacus quis ipsum. Donec blandit scelerisque sapien, nec commodo leo efficitur non. Quisque at neque nec felis sodales facilisis pellentesque quis nibh. Nam justo erat, congue vitae ultrices at, tempor non nunc. Maecenas ut risus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum dignissim ultricies risus ac sodales.",
    to: "https://github.com/danielroe",
    avatar: {
      src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/danielroe",
    },
  },
  {
    name: "Anthony Fu",
    description: "Développeur Full Stack",
    message:
      "Duis fermentum, magna nec elementum fringilla, tortor leo fringilla neque, porttitor hendrerit ligula diam sed ex. In eget tellus ac ex pellentesque sodales. In nec est auctor, tristique purus a, tristique elit. Nullam maximus orci et felis tempus, pulvinar tristique diam accumsan. Ut vehicula, est ac dictum congue, sapien diam commodo nunc, in suscipit nibh lacus quis ipsum. Donec blandit scelerisque sapien, nec commodo leo efficitur non. Quisque at neque nec felis sodales facilisis pellentesque quis nibh. Nam justo erat, congue vitae ultrices at, tempor non nunc. Maecenas ut risus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum dignissim ultricies risus ac sodales.",
    to: "https://github.com/antfu",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/antfu" },
  },
];
</script>
