<template>
  <ULandingSection v-bind="content" align="right">
    <img
      src="~/assets/images/illustrations/index/customer-discover-services.png"
      class="w-full rounded-3xl shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
</template>

<script setup lang="ts">
interface SectionWorkTogetherCustomersProps {
  headline: string;
  title: string;
  description: string;
  links: Array<any>;
}

defineProps({
  content: Object as PropType<SectionWorkTogetherCustomersProps>,
});
</script>
