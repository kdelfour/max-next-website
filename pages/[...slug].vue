<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <ULandingSection :title="doc.title">
        <template #description>
          <ContentRenderer class="container" :value="doc" />
        </template>
      </ULandingSection>
    </template>
    <template #not-found>
      <h1>Document not found</h1>
    </template>
  </ContentDoc>
</template>

<script setup lang="ts"></script>

<style>
.container {
  text-align: justify;
}
.container h2 {
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.container h3 {
  font-size: 1.25rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>
