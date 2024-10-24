<template>
  <ULandingSection v-bind="content">
    <ULandingLogos align="center">
      <div
        class="flex flex-col items-center"
        v-for="service in content?.services"
      >
        <Motion
          v-motion-pop-visible-once
          :initial="{ opacity: 0.5, scale: 1 }"
          :enter="{ scale: 1 }"
          :hovered="{ opacity: 1, scale: 2 }"
        >
          <img :src="images[service.illustration]" class="services w-full rounded-xl shadow-xl ring-1 ring-gray-300 dark:ring-gray-700" />
        </Motion>
        <span>{{ service.name }}</span>
      </div>
    </ULandingLogos>
  </ULandingSection>
</template>

<script setup lang="ts">
import { filename } from "pathe/utils";

const glob = import.meta.glob("@/assets/images/illustrations/index/services/*.png", {
  eager: true,
});
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [
    filename(key),
    (value as { default: string }).default,
  ])
);

interface ServicesProps {
  headline: string;
  title: string;
  description: string;
  links: Array<any>;
  services: Array<any>;
}
defineProps({
  content: Object as PropType<ServicesProps>,
});
</script>

<style scoped>
.services {
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
  margin-bottom: 1rem;
}
</style>
