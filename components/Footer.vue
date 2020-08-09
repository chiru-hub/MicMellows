<template>
<div class="footer">
  <div class="footer flex flex-wrap my-container py-12">
    <div class="w-full md:w-1/3">
      <p class="mb-5">Contacts</p>
      <p>Call us</p>
      <a class="block mb-1" href="tel:+916003680660">+91-6003680660</a>
      <a href="tel:+918486135064">+91-8486135064</a>
      <p class="mt-5">Mail Us</p>
      <a href="mailto:micmellows.dm@gmail.com">micmellows.dm@gmail.com</a>
    </div>
    <div class="w-1/2 md:w-1/3 mt-8 md:mt-0">
      <p class="mb-5">Information</p>
      <nuxt-link
            class="link"
            v-scroll-to="{
                el: 'html',
                duration: 1000,
            }"
            to="/"
          >Home</nuxt-link><br/>
          <nuxt-link
            class="link"
            v-scroll-to="{
                el: '.courses',
                duration: 1000,
            }"
            to="/"
          >Courses</nuxt-link><br/>
          <nuxt-link
            class="link"
            v-scroll-to="{
                el: '.events',
                duration: 1000,
            }"
            to="/"
          >Events</nuxt-link><br/>
          <nuxt-link
            class="link"
            v-scroll-to="{
                el: '.blog',
                duration: 1000,
            }"
            to="/blogs"
          >Blogs</nuxt-link><br/>
          <nuxt-link
            v-scroll-to="{
                el: '.about',
                duration: 1000,
            }"
            class="link"
            to="/"
          >About Us</nuxt-link><br/>
          <nuxt-link
            v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }"
            class="link"
            to="/"
          >Contact Us</nuxt-link>
    </div>
    <div class="w-1/2 md:w-1/3 mt-8 md:mt-0">
      <p class="mb-5">Social</p>
      <a href="https://www.facebook.com/micmellows/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
      <a class="ml-5" href="https://www.instagram.com/micmellows/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
      <div class="mt-5">
        <p>Address</p>
        <p style="color:white">Solapara Road, Opp Siroy Classic Hotel, Paltanbazar, Guwahati, Assam, Pin-:781032</p>
      </div>
    </div>
  </div>
  <div class="footer text-center py-10 px-10">
    <p class="m-0">
      Copyrights @ Micmellows. All Rights Reserved.
      <span>Designed & Developed by <a target="_blank" href="https://tecmeadows.com">TecMeadows</a></span>
    </p>
  </div>
</div>
  
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.footer {
  background-color: #363636;
  font-size: 15px;

  span {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 700;
  }
}

p {
  color: rgba(255, 255, 255, 0.5);
}

a {
  color:white;
}
</style>
