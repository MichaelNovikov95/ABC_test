<template>
  <button v-if="route.path === '/'"
    ><RouterLink class="link_style" to="/test">{{
      props.text
    }}</RouterLink></button
  >
  <button v-else @click="nextQuestion">{{ props.text }}</button>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
  text: String,
  nextQuestion: Function,
});
</script>

<style>
.link_style {
  text-decoration: none;
  color: inherit;
}
</style>
