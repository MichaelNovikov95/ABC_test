<template>
  <div class="model_container">
    <div class="modal_wrapper"
      ><button class="modal_button" @click="closeModal"
        ><img src="../assets/x.svg" alt="cancel"
      /></button>
      <ul class="modal_container-text"
        ><li class="modal_text">ГЛАВНАЯ </li
        ><li class="modal_text">ИНФОРМАЦИЯ О ТЕСТЕ</li
        ><li class="modal_text"
          ><RouterLink
            to="/test"
            @click="closeModal"
            class="yellow modal-text_yellow"
            >ПРОЙТИ ТЕСТ</RouterLink
          ></li
        ></ul
      ></div
    >
  </div>
</template>

<script setup>
const props = defineProps({
  showModal: Boolean,
});

const emit = defineEmits(["modalState"]);

function closeModal() {
  emit("modalState", !props.showModal);
}
</script>

<style>
.model_container {
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: black;
  width: 100%;
}

.modal_container-text {
  padding-left: 23px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  color: white;
}

.modal-text_yellow {
  text-decoration: none;
}

.modal_wrapper {
  display: flex;
  flex-direction: column;
}

.modal_button {
  padding-top: 18px;
  padding-right: 13px;
  background-color: inherit;
  margin-left: auto;
}

.modal_text {
  margin-top: 27px;
}
</style>
