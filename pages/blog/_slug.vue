<template>
  <div class="navigation-header">
    <div @click="hide" class="backdrop"></div>
    <div class="container-small" style="margin-top:50px!important">
      <div class="mt-5">
        <div class="row">
          <div class="col-12 my-container" style="max-width: 900px;margin-bottom: 20px;">
            <h1 class="blog-title">{{singleBlog.title}}</h1>
            <p class="author-title">{{singleBlog.author}}</p>
            <p class="author-subtitle">{{singleBlog.author_title}}</p>
            <p class="author-subtitle">{{singleBlog.created_date}}</p>
          </div>
          <div class="col-12 train">
            <img class="w-100 blog-img object-cover" :src="singleBlog.header_image" alt="blog" />
          </div>
          <div class="col-12">
            <!-- <div class="train-pad" v-html="singleBlog.content"> -->
            <div class="train-pad my-container" v-html="singleBlog.content">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      singleBlog: []
    };
  },

  mounted() {
    $(".nav-header").addClass("darkHeader");
    this.singleBlog = this.$store.state.blog_post.filter(
      v => v.slug == $nuxt.$route.params.slug
    )[0];
    console.log(this.$store.state.blog_post);
    console.log(this.singleBlog);
  },
  methods: {
    hide() {}
  }
};
</script>
<style scoped>
.author-title {
  font-family: "Bold";
}

.author-subtitle {
  font-size: 14px;
}

.blog-title {
  font-size: 29px;
  line-height: 40px;
  margin-bottom: 30px;
  font-family: "Bold";
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 100;
}

.backdrop--active {
  pointer-events: all;
  /* z-index: 1000; */
}

.train-pad {
  padding: 30px 0 10px;
  max-width: 900px;
  margin: auto;
}

.train-pad >>> p {
  font-size: 16px;
  padding: 10px 0;
  line-height: 32px;
}

.train-pad >>> img {
  padding: 50px 0;
}

.train {
  transition: all 0.4s;
}

.train-zoom {
  transform: scale(1.5);
}

@media only screen and (max-width: 600px) {
  .blog-img {
    max-height: 557px;
    height: 100%;
  }
}

.blog-img {
  max-height: 557px;
  height: 100%;
}

.navigation-header {
  padding-top: 80px;
}
</style>
