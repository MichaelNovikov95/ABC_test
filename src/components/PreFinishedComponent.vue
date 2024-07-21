<template>
  <div class="pre-finished_container">
    <h3 class="question_title">{{ props.title }}</h3>
    <div class="spinner_box"><SpinnerComponent /></div>
    <p class="text_loader"
      >Определение стиля мышления........... ....
      ...................................................</p
    >
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

import SpinnerComponent from "./SpinnerComponent.vue";

const props = defineProps({
  title: String,
});

onMounted(() => {
  setTimeout(() => {
    router.push({ path: "/result" });
  }, 7000);
});
</script>

<style>
.text_loader {
  padding: 0 22px;
  margin-top: 300px;
  font-family: PT Serif;
  font-size: 14px;
  line-height: 18.55px;
  letter-spacing: 0.05em;
  text-align: left;
  color: white;
}

.pre-finished_container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
