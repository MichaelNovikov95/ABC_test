<template>
  <nav class="nav" v-if="route.path === '/'">
    <button @click="showModal = true" class="nav_button"
      ><img src="../assets/menu.svg" alt="burger-menu"
    /></button>
  </nav>

  <nav class="nav nav_test" v-else>
    <button @click="showModal = true" class="nav_button"
      ><img src="../assets/menu.svg" alt="burger-menu"
    /></button>
    <div class="nav_test">
      <img class="nav_brain" src="../assets/blue_brain.svg" alt="brain_logo" />
      <p class="nav_text" v-if="route.path === '/test'"
        >тест на определение IQ</p
      >
      <p class="nav_text results" v-if="route.path === '/result'">ГОТОВО!</p>
    </div>
  </nav>
  <Transition to="body">
    <ModalComponent
      v-if="showModal"
      :showModal="showModal"
      @modalState="changeModalState"
    />
  </Transition>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import ModalComponent from "./ModalComponent.vue";

const showModal = ref(false);

const route = useRoute();

function changeModalState() {
  return (showModal.value = false);
}
</script>

<style>
.nav {
  position: relative;
  box-shadow: 0px 4px 4px 0px #00000040;
}
.nav_button {
  display: flex;
  padding: 17px 0 17px 15px;
}
.nav_test {
  display: flex;
  align-items: center;
}
.nav_text {
  font-family: Yeseva One;
  font-size: 12px;
  line-height: 13.86px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #ffc700;
  text-transform: uppercase;
  margin-left: 9px;
}
.nav_brain {
  width: 47px;
  height: 47px;
  margin-left: 9px;
}
.results {
  font-size: 20px;
  margin-left: 24px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
