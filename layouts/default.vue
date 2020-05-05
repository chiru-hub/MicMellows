<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/navigation.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header, Footer
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






/* Slick Fix */

.slick-track {
  display: flex;
}

.slick-list {
  overflow: hidden;
}

.slick-prev:before,
.slick-next:before {
  color: black !important;
}

.slick-slider.slick-initialized {
  position: relative;
}

.middle {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-flow: column;
}


.slick-slider img{
  height: 100%;
    width: 100%;
    -o-object-fit: cover!important;
    object-fit: cover!important;
}

.homepageSlider img{
  height: 700px;
}
.homepageSlider .slick-prev {
  left: 45px !important;
}


.homepageSlider .slick-next {
  right: 60px !important;
}

.homepageSlider .slick-prev,
.homepageSlider .slick-next {
  z-index: 99;
  top: 300px !important;
}

.homepageSlider .slick-prev:before,
.homepageSlider .slick-next:before {
  font-size: 60px;
  opacity: 1;
  color: white !important;
}

@media screen and (max-width: 601px) {
  .homepageSlider .slick-prev:before,
  .homepageSlider .slick-next:before {
    font-size: 25px;
    opacity: 0;
    color: white !important;
  }

  .homepageSlider .slick-prev,
  .homepageSlider .slick-next {
    z-index: 99;
    top: 190px !important;
  }

  .homepageSlider .slick-prev {
    left: 2px !important;
  }

  .homepageSlider .slick-next {
    right: 5px !important;
  }
}

// @media screen and (max-width: 991px) {
  .homepageSlider .slick-prev:before,
  .homepageSlider .slick-next:before {
    font-size: 25px;
    opacity: 0;
    color: white !important;
  }
// }





.header{
  width: 100%;
  height: 700px;
  overflow: hidden;
  position: relative
}









@charset "UTF-8";@font-face{font-family:slick;src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format("woff")}.slick-next,.slick-prev{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:20px;padding:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;border:none}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:none;background:transparent}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-family:slick;font-size:20px;line-height:1;opacity:.75;color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:"←"}[dir=rtl] .slick-prev:before{content:"→"}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}.slick-next:before{content:"→"}[dir=rtl] .slick-next:before{content:"←"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;margin:0 5px;padding:0}.slick-dots li,.slick-dots li button{width:20px;height:20px;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;padding:5px;color:transparent;border:0;outline:none;background:transparent}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-family:slick;font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:"•";text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{opacity:.75;color:#000}


</style>
