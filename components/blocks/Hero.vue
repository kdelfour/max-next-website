<template>
  <div v-if="content">
    <ULandingHero class="hero-image relative overflow-hidden bg-no-repeat">
      <template #default>
        <div class="flex flex-col items-center" style="text-align: center">
          <Motion
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1.5, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :hovered="{ scale: 1.5 }"
            :delay="200"
            :duration="500"
          >
            <img src="~/assets/images/logo.svg" />
          </Motion>
          <h1
            class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl"
          >
            {{ content.title }}
          </h1>
          <div
            class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300"
          >
            {{ content.description }}
          </div>
        </div>
      </template>
    </ULandingHero>
  </div>
</template>

<script setup lang="ts">
interface HeroProps {
  title: string;
  description: string;
}

defineProps({
  content: Object as PropType<HeroProps>,
});
</script>

<style scoped>
.hero-image {
  background-image: url("~/assets/images/hero.png");
  background-size: cover;
  background-position: center;
}
</style>
