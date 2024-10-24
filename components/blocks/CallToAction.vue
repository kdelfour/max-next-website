<template>
  <div class="mt-10">
    <ULandingCTA
    v-bind="content"
    class="mx-20"
    />
  </div>
</template>

<script setup lang="ts">
interface CallToActionProps {
  title: string;
  description: string;
  links: Array<any>;
}

defineProps({
  content: Object as PropType<CallToActionProps>,
});
</script>
