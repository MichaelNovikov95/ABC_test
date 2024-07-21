<template>
  <FormUnit
    v-if="currentQuestion === 1"
    :answers="props.firstQuestion"
    title="Bаш пол:"
    :nextQuestion="nextQuestion"
    :activeButton="activeButton"
    @buttonStateIsChanged="changeActiveState"
    @buttonStateIsFalse="changePassiveState"
  />
  <FormUnit
    v-if="currentQuestion === 2"
    title="Укажите ваш возраст:"
    :answers="props.secondQuestion"
    :nextQuestion="nextQuestion"
    :activeButton="activeButton"
    @buttonStateIsChanged="changeActiveState"
    @buttonStateIsFalse="changePassiveState"
  />
  <FormUnit
    v-if="currentQuestion === 3"
    title="Выберите лишнее:"
    :answers="props.thirdQuestion"
    :nextQuestion="nextQuestion"
    :activeButton="activeButton"
    @buttonStateIsChanged="changeActiveState"
    @buttonStateIsFalse="changePassiveState"
  />
  <FormUnit
    v-if="currentQuestion === 4"
    title="Продолжите числовой ряд: 18 20 24 32"
    :answers="props.forthQuestion"
    :nextQuestion="nextQuestion"
    :activeButton="activeButton"
    @buttonStateIsChanged="changeActiveState"
    @buttonStateIsFalse="changePassiveState"
  />
  <ColorPickerComponent
    v-if="currentQuestion === 5"
    title="Выберите цвет, который сейчас наиболее Вам приятен:"
    :colors="props.colorQuestion"
    :nextQuestion="nextQuestion"
    :activeButton="activeButton"
    @buttonStateIsChanged="changeActiveState"
    @buttonStateIsFalse="changePassiveState"
  />
  <ColorPickerComponent
    v-if="currentQuestion === 6"
    title="Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:"
    :colors="props.colorQuestion"
    :nextQuestion="nextQuestion"
    :activeButton="activeButton"
    @buttonStateIsChanged="changeActiveState"
    @buttonStateIsFalse="changePassiveState"
  />
  <FormUnit
    v-if="currentQuestion === 7"
    title="Какой из городов лишний?"
    :answers="props.sixthQuestion"
    :nextQuestion="nextQuestion"
    :activeButton="activeButton"
    @buttonStateIsChanged="changeActiveState"
    @buttonStateIsFalse="changePassiveState"
  />
  <PhotoPikerComponent
    v-if="currentQuestion === 8"
    title="Выберите правильную фигуру из четырёх пронумерованных."
    :nextQuestion="nextQuestion"
    :numbers="props.numbersQuestion"
    url="../src/assets/human.jpg"
    :activeButton="activeButton"
    @buttonStateIsChanged="changeActiveState"
    @buttonStateIsFalse="changePassiveState"
  />
  <FormUnit
    v-if="currentQuestion === 9"
    title="Вам привычнее и важнее:"
    :answers="props.eightQuestion"
    :nextQuestion="nextQuestion"
    :activeButton="activeButton"
    @buttonStateIsChanged="changeActiveState"
    @buttonStateIsFalse="changePassiveState"
  />
  <FormUnit
    v-if="currentQuestion === 10"
    title="Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: "
    :answers="props.nineQuestion"
    url="../src/assets/triangle.jpg"
    :nextQuestion="nextQuestion"
    :activeButton="activeButton"
    @buttonStateIsChanged="changeActiveState"
    @buttonStateIsFalse="changePassiveState"
  />
  <PhotoPikerComponent
    v-if="currentQuestion === 11"
    title="Вставьте подходящее число"
    url="../src/assets/star_1.jpg"
    :numbers="secondNumbersQuestion"
    :nextQuestion="nextQuestion"
    :activeButton="activeButton"
    @buttonStateIsChanged="changeActiveState"
    @buttonStateIsFalse="changePassiveState"
  />
  <PreFinishedComponent
    v-if="currentQuestion === 12"
    title="Обработка результатов"
  />
</template>

<script setup>
import { computed, ref } from "vue";

import ButtonComponent from "./ButtonComponent.vue";
import FormUnit from "./FormUnit.vue";
import ColorPickerComponent from "./ColorPickerComponent.vue";
import PhotoPikerComponent from "./PhotoPikerComponent.vue";
import PreFinishedComponent from "./PreFinishedComponent.vue";

const activeButton = ref(false);

const props = defineProps({
  currentQuestion: Number,
  nextQuestion: Function,
  firstQuestion: Array,
  secondQuestion: Array,
  thirdQuestion: Array,
  forthQuestion: Array,
  colorQuestion: Array,
  sixthQuestion: Array,
  eightQuestion: Array,
  nineQuestion: Array,
  numbersQuestion: Array,
  secondNumbersQuestion: Array,
  pickedAged: String,
  pickedGender: String,
  pickedWrong: String,
  calcNumber: String,
  pickedColor: String,
  pickedCity: String,
  preference: String,
  opinion: String,
});

function changeActiveState() {
  activeButton.value = true;
}

function changePassiveState() {
  activeButton.value = false;
}
</script>
