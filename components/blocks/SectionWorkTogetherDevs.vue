<template>
  <ULandingSection v-bind="content" align="left">
    <img
      src="~/assets/images/illustrations/index/dev-join-us.png"
      class="w-full rounded-3xl shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
</template>

<script setup lang="ts">
interface SectionWorkTogetherDevsProps {
  headline: string;
  title: string;
  description: string;
  links: Array<any>;
}

defineProps({
  content: Object as PropType<SectionWorkTogetherDevsProps>,
});
</script>
