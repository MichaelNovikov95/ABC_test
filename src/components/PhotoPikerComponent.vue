<template>
  <div>
    <h3 class="question_title">{{ props.title }}</h3>
    <div class="image_container"><img :src="props?.url" alt="def" /></div>
    <div class="number_container">
      <div
        class="box_style"
        v-for="(number, index) of props.numbers"
        @click="changeActiveState(number)"
        :class="{ 'picked_color': index === pickedNumber }"
        :key="index"
        ><h3 class="text_number">{{ number }}</h3></div
      >
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
const emit = defineEmits(["buttonStateIsChanged", "buttonStateIsFalse"]);

const props = defineProps({
  numbers: Array,
  title: String,
  url: String,
  nextQuestion: Function,
  activeButton: Boolean,
  buttonStateIsChanged: Function,
  buttonStateIsFalse: Function,
});

const pickedNumber = ref(null);

function changeActiveState(number) {
  const pickedNumberIndex = props.numbers.indexOf(number);
  pickedNumber.value = pickedNumberIndex;
  emit("buttonStateIsChanged", !props.activeButton);
}

function changePassiveState() {
  emit("buttonStateIsFalse", props.activeButton);
}
</script>

<style scoped>
.image_container {
  display: flex;
  justify-content: center;
}
.number_container {
  display: flex;
  margin-top: 25px;
  justify-content: space-evenly;
}
.box_style {
  display: flex;
  width: 40px;
  height: 40px;
  background-color: white;
  align-items: center;
  justify-content: center;
}
.text_number {
  font-family: PT Serif;
  font-size: 20px;
  line-height: 49px;
  text-align: center;
}
.picked_color {
  height: 40px;
}
</style>
