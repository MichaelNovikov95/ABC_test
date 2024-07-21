<template>
  <section class="result_container">
    <h3 class="result_title"> Ваш результат рассчитан: </h3>
    <p class="result_text"
      ><span class="underline_text">Вы относитесь к 3%</span> респондентов, чей
      уровень интеллекта более чем на 15 пунктов отличается от среднего в
      большую или меньшую сторону!
    </p>
    <h3 class="result_title_green">Скорее получите свой результат! </h3>
    <div class="result_modal">
      <p class="result_modal-text">
        В целях защиты персональных данных результат теста, их подробная
        интерпретация и рекомендации доступны в виде голосового сообщения по
        звонку с вашего мобильного телефона
      </p>
    </div>
    <p class="result_text-green">Звоните скорее, запись доступна всего </p>
    <p class="result_timer">{{ minutes }}:{{ seconds }} МИНУТ </p>
    <div class="result_alert-wrapper">
      <button @click="fetchData" class="result_alert">
        <img class="alert_image" src="../assets/call.svg" alt="cell" />
        <p class="alert_text">позвонить и прослушать результат </p>
      </button>
    </div>
    <FetchedComponent :fetchedData="fetchedData" v-if="fetchedData !== null" />
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

import FetchedComponent from "./FetchedComponent.vue";

const timer = ref(600000);
const fetchedData = ref(null);

const minutes = computed(() => {
  const minutes = String(
    Math.floor((timer.value % (1000 * 60 * 60)) / (1000 * 60))
  );
  if (minutes.length < 2) {
    return `0${minutes}`;
  } else {
    return minutes;
  }
});
const seconds = computed(() => {
  const seconds = String(Math.floor((timer.value % (1000 * 60)) / 1000));
  if (seconds.length < 2) {
    return `0${seconds}`;
  } else {
    return seconds;
  }
});

async function fetchData() {
  try {
    const response = await fetch("https://swapi.dev/api/people/1/", {
      method: "GET",
    });
    const data = await response.json();
    fetchedData.value = data;
  } catch (e) {
    console.log(e.message);
  }
}

const timerInterval = setInterval(() => {
  if (timer.value > 0) {
    timer.value = timer.value - 1000;
  } else {
    clearInterval(timerInterval);
  }
}, 1000);
</script>

<style>
.result_container {
  background-image: url("../assets/star_sky.svg");
  padding: 0 23px;
  height: 100vh;
}
.result_title {
  padding-top: 20px;
  font-family: PT Serif;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-align: center;
  color: white;
}
.result_text {
  margin-top: 15px;
  font-family: PT Serif;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: white;
}
.result_title_green {
  margin-top: 22px;
  font-family: PT Serif;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #3bde7c;
}
.underline_text {
  text-decoration: underline;
}
.result_modal {
  margin-top: 12px;
  background-color: #1c2741;
  border-radius: 6px;
}
.result_modal-text {
  padding: 15px 12px;
  font-family: Roboto;
  font-size: 8px;
  line-height: 14px;
  letter-spacing: 2px;
  text-align: center;
  color: white;
}
.result_text-green {
  margin-top: 5px;
  font-family: PT Serif;
  font-size: 11px;
  line-height: 30px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #3bde7c;
}
.result_timer {
  margin-top: 5px;
  font-family: PT Serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #3bde7c;
}
.result_alert {
  padding: 30px 0;
  margin-top: 6px;
  display: flex;
  background-color: #eb1b00;
  color: white;
  border-radius: 5px;
}
.alert_image {
  padding-left: 15px;
}
.alert_text {
  padding-right: 15px;

  margin-left: 18px;
  font-family: Roboto;
  font-size: 15px;
  line-height: 17.58px;
  letter-spacing: 0.05em;
  text-align: left;
}

.result_alert-wrapper {
  display: flex;
  justify-content: center;
}
</style>
