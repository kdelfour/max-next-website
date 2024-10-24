<template>
  <div v-if="data">
    <BlocksHero :content="data.hero" />

    <BlocksCallToAction :content="data.cta" />

    <BlocksSectionServices :content="data.services" />

    <BlocksSectionPiers :content="data.piers" />

    <BlocksSectionWorkTogetherDevs
      :headline="data.workTogetherDevs.headline"
      :title="data.workTogetherDevs.title"
      :description="data.workTogetherDevs.description"
      :links="data.workTogetherDevs.links"
    />

    <BlocksSectionWorkTogetherCustomers
      :headline="data.workTogetherCustomers.headline"
      :title="data.workTogetherCustomers.title"
      :description="data.workTogetherCustomers.description"
      :links="data.workTogetherCustomers.links"
    />

    <BlocksSectionTestimonials
      :title="data.testimonials.title"
      :description="data.testimonials.description"
    />
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("index", () => queryContent("/").findOne());
</script>

<style scoped></style>
