<template>
  <div>
    <h3 class="question_title">{{ props.title }}</h3>
    <div class="colors_grid">
      <div
        v-for="(color, index) of props.colors"
        :key="index"
        @click="changeActiveState(color)"
        class="rectangle"
        :class="{ 'picked_color': index === pickedColor }"
        :style="{ 'background-color': color }"
      ></div>
    </div>
    <div class="button_container">
      <ButtonComponent
        :nextQuestion="props.nextQuestion"
        @click="changePassiveState"
        class="default_button next_button"
        :class="{
          main_button: props.activeButton,
          unactive_button: !props.activeButton,
        }"
        :disabled="!props.activeButton"
        text="ДАЛЕЕ"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonComponent from "./ButtonComponent.vue";

const props = defineProps({
  title: String,
  colors: Array,
  nextQuestion: Function,
  activeButton: Boolean,
  buttonStateIsChanged: Function,
  buttonStateIsFalse: Function,
});

const pickedColor = ref(null);

const emit = defineEmits(["buttonStateIsChanged", "buttonStateIsFalse"]);

function changeActiveState(color) {
  const pickedColorIndex = props.colors.indexOf(color);
  pickedColor.value = pickedColorIndex;
  emit("buttonStateIsChanged", !props.activeButton);
}

function changePassiveState() {
  emit("buttonStateIsFalse", props.activeButton);
}
</script>

<style>
.rectangle {
  height: 75px;
}
.colors_grid {
  display: grid;
  justify-content: center;
  padding: 0 26px;
  column-gap: 21px;
  row-gap: 24px;
  grid-template-columns: 75px 75px 75px;
  grid-template-rows: 75px 75px 75px;
}
.picked_color {
  height: 65px;
  border: 6px solid #ffc700;
}
</style>
