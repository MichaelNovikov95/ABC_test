<template>
  <div>
    <h3 class="question_title">{{ props.title }}</h3>
    <img
      v-if="props?.url"
      class="triangle_container"
      :src="props?.url"
      alt="default"
    />
    <fieldset class="field_wrapper">
      <div
        class="input_wrapper"
        :class="{ 'picked': index === pickedAnswer }"
        v-for="(answer, index) of props.answers"
        :key="index"
      >
        <input
          class="input_component"
          type="radio"
          :id="answer.id"
          :name="answer.category"
          :value="answer.value"
          :v-model="answer.model"
          @click="changeActiveState(answer)"
        />
        <label
          class="radio_text"
          :class="{ 'picked': index === pickedAnswer }"
          :for="answer.id"
          ><p>{{ answer.value }}</p></label
        >
      </div>
    </fieldset>
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
  answers: Array,
  url: String,
  nextQuestion: Function,
  activeButton: Boolean,
  buttonStateIsChanged: Function,
  buttonStateIsFalse: Function,
});

const emit = defineEmits(["buttonStateIsChanged", "buttonStateIsFalse"]);

const pickedAnswer = ref(null);

function changeActiveState(pickAnswer) {
  const pickedAnswerIndex = props.answers.indexOf(pickAnswer);
  pickedAnswer.value = pickedAnswerIndex;
  emit("buttonStateIsChanged", !props.activeButton);
}

function changePassiveState() {
  emit("buttonStateIsFalse", props.activeButton);
}
</script>

<style>
.question_title {
  margin-top: 30px;
  margin-bottom: 40px;
  font-family: PT Serif;
  font-size: 20px;
  line-height: 26.5px;
  letter-spacing: 0.05em;
  text-align: center;
  color: white;
}

.input_wrapper:nth-child(1n) {
  margin-top: 8px;
}

.field_margin {
  margin-top: 8px;
}

.unactive_button {
  background: #dadada;
  box-shadow: 0px 4px 10px 0px #00000040 inset;
}
.wrongAnswer {
  height: 50px;
  display: flex;
  align-items: center;
}
.pickedNumber {
  height: 40px;
  display: flex;
  align-items: center;
}
.triangle_container {
  padding-left: 80px;
  width: 175px;
  height: 115px;
}

.picked {
  background-color: #ffc700;
  color: black;
}

.input_component {
  width: 100%;
}
</style>
