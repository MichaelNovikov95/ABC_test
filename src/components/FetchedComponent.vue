<template>
  <div class="fetch_container">
    <table>
      <tr>
        <th scope="row">Name</th>
        <th>{{ fetchedData?.name }}</th>
      </tr>
      <tr>
        <th scope="row">Height</th>
        <th>{{ fetchedData?.height }} sm</th>
      </tr>
      <tr>
        <th scope="row">Mass</th>
        <th>{{ fetchedData?.mass }} kg</th>
      </tr>
      <tr>
        <th scope="row">Hair color</th>
        <th>{{ fetchedData?.hair_color }}</th>
      </tr>
      <tr>
        <th scope="row">Skin color</th>
        <th>{{ fetchedData?.skin_color }}</th>
      </tr>
      <tr>
        <th scope="row">Birth</th>
        <th>{{ fetchedData?.birth_year }}</th>
      </tr>
      <tr>
        <th scope="row">Gender</th>
        <th>{{ fetchedData?.gender }}</th>
      </tr>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  fetchedData: Object,
});
</script>

<style>
.fetch_container {
  padding-left: 50px;
  margin-top: 10px;
  color: white;
}
</style>
