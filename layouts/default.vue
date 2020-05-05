<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from "@/components/navigation.vue";
export default {
  components: {
    Header
  }
};
</script>

<style lang='scss'>
@font-face {
  font-family: "Poppings";
  src: url("/static/fonts/Poppins-Light.ttf"); /* IE9 Compat Modes */
  font-weight: 300;
}
@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins-Regular.ttf"); /* IE9 Compat Modes */
  font-weight: 400;
}
@font-face {
  font-family: "Poppings";
  src: url("/fonts/Poppins-Bold.ttf"); /* IE9 Compat Modes */
  font-weight: 700;
}

html {
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
}

.middle {
  display: flex;
  justify-content: center;
  align-items: center;
}







.navbar-padding {
  padding-top: 80px;
}

.no-padd {
  padding: 0 !important;
}

@font-face {
  font-family: "Regular";
  src: url("~static/fonts/Sailec-Regular.woff");

  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Bold";
  src: url("~static/fonts/Sailec-Bold.woff");

  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
}

// html,
// body,
// button,
// input,
// select,
// textarea {
//   font-family: "Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//     "Helvetica Neue", Arial, sans-serif !important;
// }
// html {
//   font-family: "Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//     "Helvetica Neue", Arial, sans-serif;
//   font-size: 16px;
//   word-spacing: 1px;
//   -ms-text-size-adjust: 100%;
//   -webkit-text-size-adjust: 100%;
//   -moz-osx-font-smoothing: grayscale;
//   -webkit-font-smoothing: antialiased;
//   box-sizing: border-box;
// }

html,
body {
  min-width: 360px;
}

.h-100 {
  height: 100%;
}

.w-100 {
  width: 100%;
}

.underline span {
  position: relative;
  width: 100%;
}

.underline {
  padding: 14px 0;
}

.underline span::after {
  /* border-bottom: 3px solid #4a4a4a;
  height: 54px;
  width: 10%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  content: ""; */

  height: 4px;
  width: 78px;
  position: absolute;
  left: 0;
  bottom: -15px;
  margin: auto;
  content: "";
  background: #11998e; /* fallback for old browsers */
  background: linear-gradient(to right, #008494, #11998e);
}

.underline.right span::after {
  height: 4px;
  width: 78px;
  position: absolute;
  right: 0 !important;
  left: initial;
  bottom: -15px;
  margin: auto;
  z-index: -1;
  content: "";
  background: #11998e;
  background: linear-gradient(to right, #008494, #11998e);
}

.underline span.white::after {
  border-bottom: 3px solid white;
}

.hide {
  display: none;
}

.opacity-hide {
  opacity: 0;
  visibility: hidden;
}





</style>
