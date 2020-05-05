<template>
  <div class="nav-header transparent fixed border-b">
    <div class="container h-100">
      <div
        class="nav-icon w-100"
        style="display:flex; justify-content: space-between;align-items:center"
      >
        <nuxt-link to="/" style="display:flex; align-items: center">
          <svg
              class="w-10 h-10 text-white"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>TailwindCSS</title>
              <path
                fill="currentColor"
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
              />
            </svg>
          <h6 style="margin-bottom: 0; font-family: 'bold'; font-size: 30px; margin-left: 10px">Micmellows</h6>
        </nuxt-link>
        <div class="nav-link hide-on-med-and-down">
          <nuxt-link
            class="link"
            v-scroll-to="{
                el: 'html',
                duration: 1000,
            }"
            to="/"
          >Home</nuxt-link>
          <nuxt-link
            class="link"
            v-scroll-to="{
                el: '.articles',
                duration: 1000,
            }"
            to="/"
          >Articles</nuxt-link>
          <nuxt-link
            class="link"
            v-scroll-to="{
                el: '.training',
                duration: 1000,
            }"
            to="/"
          >Training</nuxt-link>
          <nuxt-link
            v-scroll-to="{
                el: '.about',
                duration: 1000,
            }"
            class="link"
            to="/"
          >About Us</nuxt-link>
        </div>
        <div
          @click="showMenu"
          class="show-on-medium-and-down hide-on-large-only menu"
          style="align-items: center;"
        >
          <img src="~static/menu.svg" style="height:20px" />
        </div>
      </div>

      <div class="mobile-nav opacity-hide">
        <div class="nav">
          <div class="link" @click="goTo('html')" to="/">Home</div>
          <div class="link" @click="goTo('.offers')" to="/services">Offers</div>
          <div class="link" @click="goTo('.all_products')" to="/ourwork">Products</div>
          <div class="link" @click="goTo('.about')" to="/">About Us</div>
        </div>
        <div @click="closeMenu" class="show-on-medium-and-down hamburger">
          <img src="~static/close.svg" style="height:20px" />
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

.border-b{
  border-color: #ffffff59;
}


.nav-header {
  background-color: white;
  height: 80px;
  display: flex;
  font-family: "Bold";
  align-items: center;
  transition: all 0.5s;
}

.hide-up {
  top: -80px !important;
}

.nav-header.transparent {
  background-color: transparent !important;
}

.nav-header.darkHeader {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #cd1e01!important;
}

.nav-header.white {
  background-color: #fff !important;
}



.nav-header.white a {
  color: black;
}

.nav-header.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.nav-icon {
  height: 100%;
}

.nav-header a {
  color: white;
  text-decoration: none;
}

.nav-header .link {
  padding: 8px 16px;
  font-size: 15px;
}

.mobile-nav .link {
  font-size: 20px;
  color: white !important;
}

.nav-link a {
  position: relative;
  transition: all 0.5s;
}

.nav-link a:hover {
  color: #fff;
}
.nav-link a:after {
  content: "";
  border-bottom: 2px solid white;
  position: absolute;
  width: 10px;
  bottom: 0;
  opacity: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: all 0.3s ease-in-out;
}

.nav-link a:hover:after {
  content: "";
  border-bottom: 2px solid white;
  position: absolute;
  width: 45px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  margin: auto;
}

.nav-link a:hover:after {
  content: "";
  border-bottom: 2px solid #fff;
  position: absolute;
  width: 45px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  margin: auto;
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  background-color: #232323;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.nav {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 40px;
  opacity: 0;
}

.nav .link {
  margin: 15px 0;
}

.menu {
  cursor: pointer;
}

.hamburger {
  position: fixed;
  top: 20px;
  right: 6.1%;
  cursor: pointer;
}

.animation {
  line-height: 19px;
  transition: all 0.4s ease;
  opacity: 1;
}
</style>


<script>
export default {
  data() {
    return {};
  },

  watch: {
    $route() {
      $(".mobile-nav").addClass("opacity-hide");
    }
  },

  mounted() {
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
      var st = $(this).scrollTop();
      if (st > lastScrollTop && st > 200) {
        $(".nav-header").addClass("hide-up");
      } else {
        // upscroll code
        $(".nav-header").removeClass("hide-up");
      }
      lastScrollTop = st;
    });

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      //>=, not <=
      if (scroll <= 0) {
        //clearHeader, not clearheader - caps H
        $(".nav-header").removeClass("darkHeader");
        $("#moveup").removeClass("show");
      } else if (scroll > 0) {
        $(".nav-header").addClass("darkHeader");
        $("#moveup").addClass("show");
      }
    }); //missing );
  },

  methods: {
    goTo(a) {
      this.$scrollTo(a , {
          offset: -100,
      });
      this.closeMenu();
    },
    showMenu: function() {
      $(".mobile-nav").removeClass("opacity-hide");

      $(".nav").addClass("animation");
    },
    closeMenu: function() {
      $(".mobile-nav").addClass("opacity-hide");

      $(".nav").removeClass("animation");
    }
  }
};
</script>