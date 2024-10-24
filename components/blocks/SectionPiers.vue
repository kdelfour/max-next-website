<template>
  <ULandingSection v-bind="content" align="right">
    <img
      src="~/assets/images/illustrations/index/transparence.svg"
      class="w-full rounded-3xl shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
</template>

<script setup lang="ts">
interface PiersProps {
  headline: string;
  title: string;
  description: string;
  features: Array<any>;
}
defineProps({
  content: Object as PropType<PiersProps>,
});
</script>
