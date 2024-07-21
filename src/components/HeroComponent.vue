<template>
  <div class="hero_wrapper"
    ><section class="hero">
      <h3 class="hero_subtitle">Пройдите точный и быстрый </h3>
      <h1 class="hero_title">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ </h1>
      <ButtonComponent
        class="default_button main_button"
        :style="{ 'margin-top': 150 + 'px' }"
        text="ПРОЙТИ ТЕСТ"
      />
      <div class="hero_text-container">
        <p class="hero_text yellow"
          >И получите рекомендации по развитию своего интеллекта
        </p>
        <p class="hero_text white"
          >и улучшению финансового благосостояния и личной жизни</p
        >
      </div>
      <div class="hero_more">
        <img src="../assets/arrow.svg" alt="arrow" />
        <p class="hero_more-text white">Подробнее</p>
      </div>
    </section>
    <section class="hero_quote">
      <img class="quote_up" src="../assets/quote_up.svg" alt="quote1" />
      <p class="hero_quote-text white"
        >Профессиональный IQ-тест позволяет не только определить коэффициент
        вашего интеллекта, но и выработать список рекомендаций для повышения
        этого показателя.
      </p>
      <img class="quote_down" src="../assets/quote_down.svg" alt="quote2" />
    </section>
    <div class="hero_recom">
      <p class="recom_text white"
        >Также по результатам теста <b class="bold">ВЫ ПОЛУЧИТЕ</b> подробные
        <b class="bold">СОВЕТЫ</b> по определению наиболее перспективной
        <b class="bold">ДЛЯ ВАШЕГО ТИПА интеллекта СФЕРЫ ДЕЯТЕЛЬНОСТИ</b>,
        которая принесет вам скорейший финансовый результат.
      </p>
      <div class="button-image_wrapper"
        ><img class="hero_recom-img" src="../assets/brain.svg" alt="brain" />
        <ButtonComponent class="default_button main_button" text="ПРОЙТИ ТЕСТ"
      /></div>
    </div>
    <div class="hero_recom2">
      <p class="hero_recom2-text"
        >Прохождение теста займет у вас не более
        <span class="yellow">12 минут</span>, а его
        <span class="bold">результаты </span>вы сможете
        <span class="yellow">использовать всю жизнь</span>.
      </p>
      <div class="hero_recom2-modal"
        ><p class="hero_recom2-modal-text"
          >Профессиональная интерпретация и детально
          <span class="bold">проработанные рекомендации</span> позволят вам
          качественно
          <span class="bold">изменить все аспекты своей жизни</span>: от
          финансового до любовного.</p
        ></div
      >
      <div class="button_container"
        ><ButtonComponent
          class="default_button hero_recom2-button"
          text="ПРОЙТИ ТЕСТ"
      /></div>
      <p class="footer_elements"
        ><span><img src="../assets/copyright_sign.svg" alt="copyright" /></span
        ><span class="footer_text">2019</span></p
      >
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "./ButtonComponent.vue";
</script>

<style>
.hero_wrapper {
  text-align: center;
}
.hero {
  background-image: url("../assets/rain_bk.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 15px 11px 15px;
}
.hero_subtitle {
  font-family: PT Serif;
  font-size: 18px;
  line-height: 23.85px;
  letter-spacing: 0.05em;
  text-align: center;

  color: white;
  padding-top: 27px;
}
.hero_title {
  font-family: Yeseva One;
  font-size: 30px;
  line-height: 34.65px;
  letter-spacing: 0.03em;
  text-align: center;

  color: #ffc700;
  margin-top: 40px;
}

.hero_text-container {
  margin-top: 22px;
}
.hero_text {
  font-family: PT Serif;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  text-align: center;
}
.yellow {
  color: #ffc700;
}
.white {
  color: white;
}
.hero_more {
  margin-top: 11px;
}
.hero_more-text {
  font-family: PT Serif;
  font-size: 8px;
  line-height: 10.6px;
  letter-spacing: 0.05em;

  margin-top: 3px;
}
.hero_quote {
  display: flex;
  flex-direction: column;
  background-image: url("../assets/image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 45px 30px 30px 23px;
}
.hero_quote-text {
  font-family: Yeseva One;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-align: center;

  margin-top: 20px;
}
.quote_down {
  margin-left: auto;
}
.quote_up,
.quote_down {
  width: 23px;
  height: 23px;
}
.hero_recom {
  background-color: beige;
  padding: 0 11px 38px 11px;
}
.recom_text {
  font-family: PT Serif;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-align: left;

  padding-top: 38px;
  color: #272727;
}
.bold {
  font-weight: bold;
}
.hero_recom-img {
  margin-top: 38px;
  min-width: 250px;
  max-width: 580px;
}
.hero_recom2 {
  background: url("../assets/lightning_right.svg") no-repeat top right,
    url("../assets/lightning_left.svg") no-repeat bottom left,
    url("../assets/star_sky.svg");
  text-align: left;
  padding: 0 11px;
}
.hero_recom2-text {
  font-family: Merriweather;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: left;

  padding-top: 56px;
  padding-right: 51px;
  color: white;
}
.hero_recom2-modal {
  margin-top: 14px;
  border-radius: 8px;
  background: #f3f3f2cc;
  padding: 30px 15px;
}
.hero_recom2-modal-text {
  font-family: Merriweather;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-align: left;
}

.hero_recom2-button {
  border: 1px solid;
  border-color: white;
  background-color: transparent;
  color: white;
}
.footer_text {
  margin-left: 2px;
  font-family: Roboto;
  font-size: 10px;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #ffffff80;
}
.footer_elements {
  margin-top: 52px;
  padding-bottom: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-image_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
