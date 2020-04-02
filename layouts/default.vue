<template>
  <div>
    <nuxt />
  </div>
</template>

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
</style>
