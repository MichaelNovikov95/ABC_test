<template>
  <section class="test">
    <ProgressBar :progress="progress" />
    <FormComponent
      :currentQuestion="currentQuestion"
      :nextQuestion="nextQuestion"
      :firstQuestion="firstQuestion"
      :secondQuestion="secondQuestion"
      :thirdQuestion="thirdQuestion"
      :forthQuestion="forthQuestion"
      :pickedAged="pickedAged"
      :pickedGender="pickedGender"
      :pickedWrong="pickedWrong"
      :calcNumber="calcNumber"
      :colorQuestion="colorQuestion"
      :pickedColor="pickedColor"
      :sixthQuestion="sixthQuestion"
      :pickedCity="pickedCity"
      :eightQuestion="eightQuestion"
      :preference="preference"
      :nineQuestion="nineQuestion"
      :opinion="opinion"
      :numbersQuestion="numbersQuestion"
      :secondNumbersQuestion="secondNumbersQuestion"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";

import FormComponent from "./FormComponent.vue";
import ProgressBar from "./ProgressBar.vue";

const progress = ref(8);
const currentQuestion = ref(1);

function nextQuestion() {
  currentQuestion.value++;
  progress.value = progress.value + 8;
}

const pickedAged = ref(null);
const pickedGender = ref(null);
const pickedWrong = ref(null);
const calcNumber = ref(null);
const pickedColor = ref(null);
const pickedCity = ref(null);
const preference = ref(null);
const opinion = ref(null);

const firstQuestion = [
  {
    id: "male",
    category: "gender",
    value: "Мужчина",
    model: pickedGender.value,
  },
  {
    id: "female",
    category: "gender",
    value: "Женщина",
    model: pickedGender.value,
  },
];
const secondQuestion = [
  { id: "<18", category: "age", value: "<18", model: pickedAged.value },
  { id: "18-28", category: "age", value: "18-28", model: pickedAged.value },
  { id: "29-35", category: "age", value: "29-35", model: pickedAged.value },
  { id: ">36", category: "age", value: ">36", model: pickedAged.value },
];
const thirdQuestion = [
  { id: "home", category: "wrongDom", value: "Дом", model: pickedWrong.value },
  {
    id: "shalash",
    category: "wrongDom",
    value: "Шалаш",
    model: pickedWrong.value,
  },
  {
    id: "bungalo",
    category: "wrongDom",
    value: "Бунгало",
    model: pickedWrong.value,
  },
  {
    id: "skameika",
    category: "wrongDom",
    value: "Скамейка",
    model: pickedWrong.value,
  },
  {
    id: "hizgina",
    category: "wrongDom",
    value: "Хижина",
    model: pickedWrong.value,
  },
];
const forthQuestion = [
  { id: 62, category: "calcNumber", value: 62, model: calcNumber.value },
  { id: 48, category: "calcNumber", value: 48, model: calcNumber.value },
  { id: 74, category: "calcNumber", value: 74, model: calcNumber.value },
  { id: 57, category: "calcNumber", value: 57, model: calcNumber.value },
  { id: 60, category: "calcNumber", value: 60, model: calcNumber.value },
  { id: 77, category: "calcNumber", value: 77, model: calcNumber.value },
];
const colorQuestion = [
  "#A8A8A8",
  "#0000A9",
  "#00A701",
  "#F60100",
  "#FDFF19",
  "#A95403",
  "#000000",
  "#850068",
  "#46B2AC",
];
const sixthQuestion = [
  { id: "WN", category: "city", value: "Вашингтон", model: pickedCity.value },
  { id: "LN", category: "city", value: "Лондон", model: pickedCity.value },
  { id: "PR", category: "city", value: "Париж", model: pickedCity.value },
  { id: "NY", category: "city", value: "Нью-Йорк", model: pickedCity.value },
  { id: "MK", category: "city", value: "Москва", model: pickedCity.value },
  { id: "OT", category: "city", value: "Оттава", model: pickedCity.value },
];
const eightQuestion = [
  {
    id: 1,
    category: "pref",
    value: "Наслаждаться каждой минутой проведенного времени",
    model: preference.value,
  },
  {
    id: 2,
    category: "pref",
    value: "Быть устремленными мыслями в будущее",
    model: preference.value,
  },
  {
    id: 3,
    category: "pref",
    value: "Учитывать в ежедневной практике прошлый опыт",
    model: preference.value,
  },
];
const nineQuestion = [
  {
    id: 1,
    category: "triangle",
    value: "оно остроконечное",
    model: opinion.value,
  },
  {
    id: 2,
    category: "triangle",
    value: "оно устойчиво",
    model: opinion.value,
  },
  {
    id: 3,
    category: "triangle",
    value: "оно-находится в состоянии равновесия",
    model: opinion.value,
  },
];
const numbersQuestion = [1, 2, 3, 4];
const secondNumbersQuestion = [34, 36, 53, 44, 66, 42];
</script>

<style>
.test {
  background-image: url("../assets/star_sky.svg");
  padding: 25px 0;
  height: 100vh;
}
</style>
