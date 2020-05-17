<template>
  <div class="navigation-header">
    <div @click="hide" class="backdrop"></div>
    <div class="container-small" style="margin-top:50px!important">
      <div class="mt-5">
        <div class="row">
          <div class="col-12 my-container" style="max-width: 900px;margin-bottom: 20px;">
            <h1 class="blog-title">{{singleBlog.title}}</h1>
            <p class="author-title">Dr. Saumendu Bhattacharjee</p>
            <p class="author-subtitle">Speech Coach, Micmellows</p>
            <p class="author-subtitle">{{singleBlog.created_date}}</p>
          </div>
          <div class="col-12 train">
            <img class="w-100 blog-img object-cover" :src="singleBlog.header_image" alt="blog" />
          </div>
          <div class="col-12">
            <!-- <div class="train-pad" v-html="singleBlog.content"> -->
            <div class="train-pad my-container">
              <p>10 days back, a doctor posted in the Covid 19 screening duty tested positive in Guwahati Medical College. Following that, a whopping number of around 500 tests were done among his contacts. But none came out to be positive.</p>
              <p>In contrast, 5 days later, when a manual laborer from Fancy Bazar area named Mungru Sahani was found to be Covid 19 positive, within 24 hours, 15 more tested positive among his contacts.</p>
              <p>Before we try to understand this contrast, first let us clear one established fact about Covid 19. The infectivity of this disease ( the chance of transmission) is highest when that person is symptomatic ( that is having symptoms like fever, cough etc). This is one of the reason why thermal scan is done at important places like airport, railway stations etc.</p>
              <p>If we follow this logic, for obvious reasons, we can understand that, symptomatic persons, will definitely be more in places like a designated Covid 19 hospital - say, GMCH. Yet, why the chance of transmission is quite low in a hospital area as compared to a bazaar, where mostly people are asymptomatic ? Why this contrast?</p>
              <p>The answer lies in awareness. In any situation, when, we as a living being are aware of the dangers in our environment, we perform better. The body's flight or fight response helps us protect from that danger.</p>
              <img src="/images/blog1-2.jpeg" />
              <p>Whether we are patients going to the hospital, or we are doctors caring for the sick people, every moment, we are alert and aware of the threat in our environment. From repeated hand washing, to frequent use of sanitizers, wearing a face mask properly, not spitting here and there, maintaining social distancing, we take all the precautions. But the same thing doesn't happen when we visit a market place or a grocery shop. Our brain which is in relaxation mode, fails to alert us about any imminent danger in our environment.</p>
              <p>So, how we respond ? We tend to put our mask in the chin, or pull it down further while speaking with the shopkeeper, we lock our heads together at the fish market, we yawn, we laugh, we cough in unison. After hoarding as much as we can, touching everything, everyone and everywhere we reach our home. Only after arriving at home, looking at our kids, our brain puts the alert button switched on and start pumping adrenaline to our system. But by then, usually damage is already done.</p>
              <p>The same thing happens to us as speakers. It has been seen that 41% of world leaders, speakers, teachers, CEOs turn down the opportunity of a speaking gig when presented to them. Because, they fear public speaking, just like us, who fear going to a hospital in these days, because of the threat in the environment.</p>
              <p>But this fear is normal, but irrational. This fear, if managed well, will help us to think faster, act smarter, react wiser. If you are sick, you need to go to the hospital, if you are a speaker, you need to face the fear of public speaking. You never know what difference you can bring to the world by walking fearlessly to the hospital or by expressing your thoughts confidently in front of others.</p>
              <p>Now, when we know we have a speaking assignment ( similar to the situation when we are about to enter a hospital) we become more alert. We prepare ourselves better, we study our audience, our environment, to handle the situation better. The audience is also prepared to listen to us ( just like other people who have stepped into a hospital are aware of our presence).</p>
              <p>For this simple reason, when we are aware of the threat in our surroundings, we prepare better and when we prepare better, we perform better.</p>
              <p>So, next time, if you have fever or any other Covid 19 related symptoms, don't fear to visit a hospital. In hospital everyone, you and your fellow human beings are alert to their surroundings, whereas in a bazaar, everyone is ignorant of their surroundings.</p>
              <p>Never fail to visit a hospital when you are sick, and never fail to grab an opportunity to speak when you are asked to speak.</p>
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

.train-pad > p {
  font-size: 16px;
  padding: 10px 0;
  line-height: 32px;
}

.train-pad > img {
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
