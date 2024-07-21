<template>
  <div class="shell">
    <div class="bar" :style="{ width: props.progress + '%' }"></div>
  </div>
</template>

<script setup>
const props = defineProps(["progress"]);
</script>

<style>
.shell {
  margin: 0 auto;
  height: 11px;
  width: 250px;
  border: 1px solid #aaa;
  border-radius: 13px;
  background-color: #dadada;
}

.bar {
  background: green;
  height: 11px;
  width: 15px;
  border-radius: 9px;
}
</style>
