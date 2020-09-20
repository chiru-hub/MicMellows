<template>
  <div>
    <div class="blog mt-32">
      <div class="my-container px-5">
        <div class="p-12">
          <h1 class="text-center">Blogs</h1>
        </div>
        <div class="flex w-full flex-wrap">
          <div
            class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4"
            v-for="p in blog_post"
            :key="p.id"
          >
            <div class="blog-post p-5 pb-16">
              <nuxt-link :to="'/blog/' + p.slug">
                <div class="blog-image w-full">
                  <img
                    :src="p.header_image"
                    class="w-full h-full object-cover"
                    style="height: 200px"
                  />
                </div>
                <div class="blog-title pt-5 pb-3">
                  <h4 style="font-size:16px" class="clamp2">{{p.title}}</h4>
                </div>
                <div class="blog-content">
                  <p class="clamp2">{{p.extract}}</p>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      blog_post: [],
      blog_id: 19,
    }
  },
  mounted() {
     $(".nav-header").addClass("darkHeader");
    this.blog_post = JSON.parse(
      JSON.stringify(this.$store.state.blog_post)
    ).reverse();

    for (var i = 0; i < this.blog_post.length; i++) {
      if (this.blog_post[i].id == this.blog_id) {
        this.blog_post[i].showTime = false;
        if (new Date().getTime() >= new Date("2020/09/21 08:00:00").getTime()) {
          this.blog_post[i].showTime = true;
        }
      } else {
        this.blog_post[i].showTime = true;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.blog {
  &-part {
    background-color: #cd1e01;
  }

  &-title {
    @apply text-white text-3xl;
  }

  &-content {
    @apply text-white text-2xl opacity-75;
  }

  &-image {
    background-color: #cd1e01;
  }

  h1, h4 {
    color: black;
    font-size: 4rem;
    font-weight: 800;
  }
  
  p{
    color: black
  }

  &-cards {
    height: 55.5rem;
    position: relative;

    img {
      border-radius: 8px;
      object-fit: cover;
    }
  }
  &-cards::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(4, 4, 4, 0) 22%,
      #111111
    );
    box-shadow: -12px 12px 30px 0 rgba(199, 93, 23, 0.16);
    border-radius: 8px;
  }
}
</style>
