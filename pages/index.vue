<template>
  <div>
    <!-- <div class="join-now">
      <Header />
      <div class="join-now-contents w-full md:w-2/6 md:pl-40">
        <h2 class="text-center md:text-left">Unfold Dreams Within</h2>
        <p>Micmellows is a professional Public Speaking and Personality Development Institute with a vision to ensure every individual identify and unleash their dreams through the power of listening, thinking and expressing.</p>
        <button class="mt-16">Join Now</button>
      </div>
    </div>-->

    <transition name="fade">
      <div class="video-popup" v-show="showToast">
        <div class="cursor-pointer closeToast" @click="closePlyr">x</div>
        <vue-plyr ref="popupvideo">
          <video poster="/videos/black.jpg" :src="video_url"></video>
        </vue-plyr>
      </div>
    </transition>

    <div class="header">
      <div style="position:absolute;z-index:99;left:0;right:0;margin:auto;top:0;bottom:0;">
        <div class="join-now-contents w-full">
          <div class="my-container carousel-text">
            <h2 class="text-left">Unfold Dreams Within</h2>
            <p>Micmellows is a professional Public Speaking, Goal Setting and Personality</p>
            <p>Development Institute with a vision to ensure every individual identify</p>
            <p>and unleash their dreams through the power of listening, thinking and expressing.</p>
            <button
              class="mt-16"
              v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }"
            >Join Now</button>
          </div>
        </div>
      </div>
      <client-only>
        <carousel
          class="homepageSlider"
          :per-page="1"
          :mouse-drag="false"
          :autoplay="true"
          :loop="true"
          :autoplayTimeout="5000"
        >
          <slide v-for="p in homeslider" :key="p.id">
            <img class="d-block w-full h-full object-cover img1" :src="p" alt="First slide" />
          </slide>
        </carousel>
      </client-only>
    </div>

    <div class="first-part third-part">
      <div class="my-container px-5">
        <!-- <div class="p-12">
          <h1 class="text-center">Why MicMellows?</h1>
          <p
            class="text-center md:w-3/5 mt-10 mx-auto"
          >Micmellows will help you and your ideas to stand out and resonate with people around the world. You get individual care and one on one mentoring from experienced coaches. A holistic training to build your confidence in association with creative people around you.</p>
        </div>
        <div class="px-0 pb-40 pt-20 flex w-full flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/3 p-5 lg:pr-4">
            <div class="">
              <img src="/images/MIC_4_M2-01.jpg" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3 p-5 lg:px-4">
            <div class="">
              <img src="/images/MIC_5.jpg" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3 p-5 lg:pl-4">
            <div class="">
              <img src="/images/MIC_17-01.jpg" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>-->
        <div class="container pt-10 md:p-12">
          <h1 class="text-center">Why MicMellows?</h1>
          <p
            class="text-center md:w-3/5 mt-10 mx-auto"
          >Micmellows will help you and your ideas to stand out and resonate with people around the world. You get individual care and one on one mentoring from experienced coaches. A holistic training to build your confidence in association with creative people around you.</p>
          <div class="flex flex-wrap w-full pt-5 md:pt-10 justify-around">
            <div class="w-full lg:w-1/2 p-10 lg:pr-10">
              <div class="justify-center third-part-cards">
                <img class="w-full h-full object-cover" src="/images/wts1.jpg" alt />
                <div class="cards-content w-10/12 text-center w-full px-5">
                  <h4>Rita Harlalka</h4>
                  <p>MBA in HR</p>
                  <p style="min-height:8.4rem" class="mt-10">
                    Recruiter in global HR leader Mark Watt and Anderson. Received Gold Medal from then president Dr APJ Abdul Kalam, Served as Area Director, Elected as Division Director in Toastmasters Club.
                    A passionate thinker,writer, story teller and Speaker.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 p-10 lg:pl-10">
              <div class="justify-center third-part-cards">
                <img class="w-full h-full object-cover" src="/images/wts2.jpg" alt />
                <div class="cards-content w-10/12 text-center w-full px-5">
                  <h4>Dr. Saumendu Bhattacharjee</h4>
                  <p>MD ( Pediatrics)</p>
                  <p
                    style="min-height:8.4rem"
                    class="mt-10"
                  >An experienced doctor, mentor, writer, speaker, speech coach. Past District Champion of International Speech Contest, 2019, in Toastmasters International.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-0 pb-32 courses">
          <h1 class="text-center py-10">Featured Courses</h1>
          <div class="flex flex-wrap justify-between">
            <div class="w-full lg:w-1/3 p-10 lg:pr-4">
              <div class="first-part-cards2">
                <img
                  style="border-radius:.8rem"
                  class="w-full h-full object-cover"
                  src="/images/fc1.jpg"
                  alt
                />
                <div style="margin-top:-2rem" class="cards-content text-center px-5">
                  <h4>Marshmallows ( 8 to 18 years)</h4>
                  <p
                    style="min-height: 6.2rem;"
                  >Level 1 Launched( Public speaking, Communication Skills, Listening skills, Goal setting, Memory Building)</p>
                  <button
                    style="margin-top:10px"
                    onclick="location.href='/marshmallow'"
                  >Learn More</button>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 p-10 lg:pr-4">
              <div class="first-part-cards2">
                <img
                  style="border-radius:.8rem"
                  class="w-full h-full object-cover"
                  src="/images/fc2.jpg"
                  alt
                />
                <div style="margin-top:-2rem" class="cards-content text-center w-full px-5">
                  <h4>Exclusive Women Batch</h4>
                  <p
                    style="min-height: 6.2rem;"
                  >Level 1 - Launched ( Public speaking, Communication Skills, Listening skills)</p>
                  <button
                    style="margin-top:10px"
                    onclick="location.href='/women'"
                  >Learn More</button>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 p-10 lg:pr-4">
              <div class="first-part-cards2">
                <img
                  style="border-radius:.8rem"
                  class="w-full h-full object-cover"
                  src="/images/fc3.jpg"
                  alt
                />
                <div style="margin-top:-2rem" class="cards-content text-center w-full px-5">
                  <h4>Professionals</h4>
                  <p
                    style="min-height: 6.2rem;"
                  >Level 1 - Launched ( Public speaking, Presentation mastery, Listening skills, Interview skills)</p>
                  <button
                    style="margin-top:10px"
                    onclick="location.href='/professional'"
                  >Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second-part events">
      <div class="my-container pb-40">
        <h1 class="text-center pt-10">Our Events</h1>

        <div class="flex flex-wrap justify-between">
          <div class="w-full lg:w-1/3 p-10 lg:pr-4">
            <div class="first-part-cards2">
              <img
                style="border-radius:.8rem"
                class="w-full h-full object-cover"
                src="/images/our-events-1.jpg"
                alt
              />
              <div style="margin-top:-2rem" class="cards-content text-center w-full px-5">
                <!-- <h4>Marshmallows ( 8 to 18 years)</h4> -->
                <!-- <p
                  style="min-height: 6.2rem;"
                >Level 1 Launched( Public speaking, Communication Skills, Listening skills, Goal setting, Memory Building)</p>-->
                <button
                  style="margin-top:10px"
                  v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }"
                >Set Reminder</button>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 p-10 lg:pr-4">
            <div class="first-part-cards2">
              <img
                style="border-radius:.8rem"
                class="w-full h-full object-cover"
                src="/images/our-events-2.jpg"
                alt
              />
              <div style="margin-top:-2rem" class="cards-content text-center w-full px-5">
                <!-- <h4>Exclusive Women Batch</h4> -->
                <!-- <p
                  style="min-height: 6.2rem;"
                >Level 1 - Launched ( Public speaking, Communication Skills, Listening skills)</p>-->
                <button
                  style="margin-top:10px"
                  v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }"
                >Set Reminder</button>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 p-10 lg:pr-4">
            <div class="first-part-cards2">
              <img
                style="border-radius:.8rem"
                class="w-full h-full object-cover"
                src="/images/our-events-3.jpg"
                alt
              />
              <div style="margin-top:-2rem" class="cards-content text-center w-full px-5">
                <!-- <h4>Professionals</h4> -->
                <!-- <p
                  style="min-height: 6.2rem;"
                >Level 1 - Launched ( Public speaking, Presentation mastery, Listening skills, Interview skills)</p>-->
                <button
                  style="margin-top:10px"
                  v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }"
                >Set Reminder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="third-part first-part"
      style="background-image: linear-gradient(#cd1e01 61%, #f8650c 30%);"
    >
      <div class="my-container px-5">
        <!-- <h1 class="text-center">What they are Saying?</h1>
        <div class="flex flex-wrap w-full pt-20 justify-around">
          <div class="w-full lg:w-1/2 p-10 lg:pr-10">
            <div class="justify-center third-part-cards">
              <img class="w-full h-full object-cover" src="/images/wts1.jpg" alt />
              <div class="cards-content w-10/12 text-center w-full px-5">
                <h4>Rita Harlalka</h4>
                <p>MBA in HR</p>
                <p style="min-height:8.4rem"
                  class="mt-10"
                >Recruiter in global HR leader Mark Watt and Anderson. Received Gold Medal from then president Dr APJ Abdul Kalam, Served as Area Director, Elected as Division Director in Toastmasters Club.
A passionate thinker,writer, story teller and Speaker.</p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-10 lg:pl-10">
            <div class="justify-center third-part-cards">
              <img class="w-full h-full object-cover" src="/images/wts2.jpg" alt />
              <div class="cards-content w-10/12 text-center w-full px-5">
                <h4>Dr. Saumendu Bhattacharjee</h4>
                <p>MD ( Pediatrics)</p>
                <p style="min-height:8.4rem"
                  class="mt-10"
                >An experienced doctor, mentor, writer, speaker, speech coach. Past District Champion of International Speech Contest, 2019, in Toastmasters International.</p>
              </div>
            </div>
          </div>
        </div>-->
        <!-- <div class="p-12">
          <h1 class="text-center">Why MicMellows?</h1>
          <p
            class="text-center md:w-3/5 mt-10 mx-auto"
          >Micmellows will help you and your ideas to stand out and resonate with people around the world. You get individual care and one on one mentoring from experienced coaches. A holistic training to build your confidence in association with creative people around you.</p>
        </div>-->
        <h1 class="text-center pt-20">What they are Saying?</h1>
        <div class="px-0 pb-20 pt-20 flex w-full flex-wrap">
          <div class="w-full md:w-1/2 lg:w-1/2 p-5 lg:pr-4">
            <div class>
              <img src="/images/MIC_17-01.jpg" class="w-full h-full object-cover" />
            </div>
          </div>
          <!-- <div class="w-full md:w-1/3 lg:w-1/3 p-5 lg:px-4">
            <div class="">
              <img src="/images/MIC_5.jpg" class="w-full h-full object-cover" />
            </div>
          </div>-->
          <div class="w-full md:w-1/2 lg:w-1/2 p-5 lg:pl-4">
            <div class>
              <img src="/images/MIC_4_M2-01_new.jpeg" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 
  
 Blog Start
  

    -->

    <div class="blog" v-if="showTime" style="background-color: #cd1e01">
      <div class="my-container px-5">
        <div class="p-12">
          <h1 class="text-center">Blogs</h1>
        </div>
        <div class="flex w-full flex-wrap">
          <div
            class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4"
            v-if="p.showTime"
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
          <div class="w-full flex justify-center pb-5">
            <button onclick="location.href='/blogs'" class="">Read More</button>
          </div> 
        </div>
      </div>
    </div>

    <!-- 
  
 Blog END
  

    -->

    <!-- 

      Recent Stories start
      
    -->

    <div class="recent">
      <div class="my-container px-5">
        <div class="p-12">
          <h1 class="text-center">Recent Stories</h1>
        </div>
        <div class="flex w-full flex-wrap">
          <div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-5 pb-16">
            <img src="/images/micsmm.jpg" alt />
            <div class="recent-content mt-3">
              <p>
                Invest in your Child's future. Enroll them in our special batch , starts from 14th of June. Register today!
                Call or Whatsapp us for any query.
                Seats filling up fast. Hurry!!
              </p>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-5 pb-16">
            <img src="/images/recent1.jpg" alt />
            <div class="recent-content mt-3">
              <p>
                Are you willing to invest in your Child's future? If yes, then you just have to take a small step. Enrol for our next upcoming Children's batch and help him/her grow into a confident speaker.
                Registrations are OPEN! Call us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="video">
      <div class="my-container px-5">
        <div class="p-12">
          <h1 class="text-center">Videos</h1>
        </div>
        <div class="flex w-full flex-wrap">
          <div class="w-full sm:w-1/2 md:w-1/3 p-5 pb-16" @click="openPlyr('/videos/video1.mp4')">
            <div class="video-thumbnail">
              <img src="/videos/vthumb1.jpg" alt="Video thumbnail" />
            </div>
            <div class="recent-content mt-3">
              <p>How to use your knowledge in today's world.</p>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 p-5 pb-16" @click="openPlyr('/videos/video2.mp4')">
            <div class="video-thumbnail">
              <img src="/videos/vthumb2.jpg" alt="Video thumbnail" />
            </div>
            <div class="recent-content mt-3">
              <p>Video Description will be here if required.</p>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 p-5 pb-16" @click="openPlyr('/videos/video3.mp4')">
            <div class="video-thumbnail">
              <img src="/videos/vthumb3.jpg" alt="Video thumbnail" />
            </div>
            <div class="recent-content mt-3">
              <p>Why Public Speaking? Why Micmellows?</p>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 p-5 pb-16" @click="openPlyr('/videos/video4.mp4')">
            <div class="video-thumbnail">
              <img src="/videos/vthumb4.jpg" alt="Video thumbnail" />
            </div>
            <div class="recent-content mt-3">
              <p>Feedback from one of the Parent!</p>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 p-5 pb-16" @click="openPlyr('/videos/video5.mp4')">
            <div class="video-thumbnail">
              <img src="/videos/vthumb5.jpg" alt="Video thumbnail" />
            </div>
            <div class="recent-content mt-3">
              <p>Feedbacks from Parents.</p>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 p-5 pb-16" @click="openPlyr('/videos/video6.mp4')">
            <div class="video-thumbnail">
              <img src="/videos/vthumb6.jpg" alt="Video thumbnail" />
            </div>
            <div class="recent-content mt-3">
              <p>TESTIMONIAL FROM A STUDENT "SHRUTI SONTHALIA".</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fourth-part about">
      <div class="my-container">
        <div>
          <h1 class="text-center py-10">About Micmellows</h1>
          <img class="m-auto" src="/images/about-mic-2.jpg" alt />
        </div>
        <p
          class="w-4/5 text-center"
        >Micmellows is a professional Public Speaking, Goal Setting and Personality Development Institute with a vision to ensure every individual identify and unleash their dreams through the power of listening, thinking and expressing. Micmellows gives exposure and a platform to individuals to develop their personality and gain an edge over others in their field.</p>
        <h1 class="text-center my-24">Get in Touch</h1>
        <div class="form contact px-5 pb-10">
          <div>
            <input type="text" v-model="name" placeholder="Your Name here" name id />
          </div>
          <div class="mt-10 sm:flex justify-between">
            <input class="w-full" v-model="email" placeholder="Your E-mail" type="email" name id />
          </div>
          <div class="mt-10">
            <textarea v-model="message" placeholder="Your Message Here" id rows="10"></textarea>
          </div>
          <div class="mt-10 sm:flex justify-between">
            <button @click="sendEmail" type="button" class="w-full">SEND</button>
          </div>
        </div>
        <div class="maps"></div>
      </div>
    </div>
  </div>
</template>




<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      name: "",
      message: "",
      post_length: 8,
      showTime: true,
      homeslider: [
        "/images/about-mic-2.jpg",
        "/images/about-mic-3.jpg",
        "/images/about-mic-4.jpg"
      ],

      blog_post: [],
      blog_id: 21,

      errorMessage: "",
      showToast: false,
      toastType: false,

      video_url: "",

      slickOptions: {
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        infinite: true,
        speed: 1000,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
        // Any other options that can be got from plugin documentation
      }
    };
  },
  computed: {
    player() {
      return this.$refs.popupvideo.player;
    }
  },
  mounted() {
    this.blog_post = JSON.parse(
      JSON.stringify(this.$store.state.blog_post)
    ).reverse().splice(0, this.post_length);

    for (var i = 0; i < this.blog_post.length; i++) {
      if (this.blog_post[i].id == this.blog_id) {
        this.blog_post[i].showTime = false;
        if (new Date().getTime() >= new Date("2020/10/05 08:00:00").getTime()) {
          this.blog_post[i].showTime = true;
        }
      } else {
        this.blog_post[i].showTime = true;
      }
    }

    // console.log(new Date())

    // if( new Date().getTime() >= new Date('2020/05/18 08:00:00').getTime()){

    //   this.showTime = true

    // }

    //   console.log(new Date())
  },
  methods: {
    closePlyr(){

      
      this.player.stop()
      this.showToast = false

    },
    openPlyr: function(video_url) {
      console.log(video_url);
      this.showToast = true;
      this.video_url = video_url;
    },

    sendEmail: function() {
      var payload = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      axios({
        method: "POST",
        url: "https://wenslink.com/backend/api/products/sendEmailMicMellows",
        data: payload,
        contentType: "application/json"
      })
        .then(res => {
          this.name = "";
          this.email = "";
          this.phone_number = "";
          // this.email_success = true;
          alert("Query Successfully Sent");
        })
        .catch(error => {
          console.log(error);
          // this.email_success = false;
          alert("Error on Query Submission");
        });
    }
  }
};
</script>




<style scoped lang='scss'>
.header {
  position: relative;
}

.header:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.72);
}

button {
  height: 4rem;
  width: 12rem;
  border: 2px solid #f26101;
  border-radius: 8px;
  color: #f26101;
}

.join-now {
  // background-image: url(/images/web_cover.jpg);
  background-position: center;
  min-height: 720px;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 80px;

  &-contents {
    width: 100%;
    height: 50%;
    overflow: initial;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    h2 {
      color: #f8650c;
      font-size: 4rem;
      font-weight: 600;
    }

    p {
      font-size: 1.8rem;
      color: #fff;
      line-height: 1.5;
    }
  }
}

@media (min-width: 768px) {
  .join-now {
    min-height: 720px;
  }
}

.carousel-text {
  padding-top: 80px;
}

@media (max-width: 991px) {
  .carousel-text {
    padding-top: 0;
    padding-left: 40px;
    padding-right: 151px;
  }
}

@media (max-width: 600px) {
  .carousel-text {
    padding-top: 0;
    padding-left: 30px;
    padding-right: 20px;
  }
}

.first-part {
  background-image: linear-gradient(#cd1e01 70%, #f8650c 30%);

  h1 {
    color: white;
    font-size: 4rem;
    font-weight: 800;
  }

  p {
    color: white;
    font-size: 2rem;
    font-weight: 300;
    opacity: 0.7;
  }

  img {
    border-radius: 8px;
  }

  &-cards {
    height: 400px;
    // width: 21.8rem;
    background-color: white;
    border-radius: 8px;
    position: relative;
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

  &-cards2 {
    // width: 339px;
    height: 435px;
    object-fit: contain;
    border-radius: 8px;
    position: relative;
  }

  &-cards2::after {
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

@media (max-width: 1280px) {
  .first-part {
    &-cards {
      height: 500px;
      max-width: 600px;
    }
  }
}

@media (max-width: 1280px) {
  .first-part {
    &-cards {
      height: 560px;
      // width: 21.8rem;
    }
  }
}

.second-part {
  background-image: linear-gradient(#cd1e01 60%, #f8650c 40%);
  h1 {
    color: white;
    font-size: 4rem;
    font-weight: 800;
  }

  &-cards2 {
    width: 339px;
    height: 435px;
    position: relative;

    img {
      border-radius: 8px;
    }
  }
  &-cards2::after {
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

.third-part {
  background-image: linear-gradient(#cd1e01 53%, #f8650c 50%);

  h1 {
    color: white;
    font-size: 4rem;
    font-weight: 800;
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

  h1 {
    color: white;
    font-size: 4rem;
    font-weight: 800;
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

@media (max-width: 600px) {
  .third-part-cards {
    height: 469px;

    img {
      object-fit: cover;
    }
  }
}

.recent {
  background-image: linear-gradient(#f8650c 50%, #cd1e01 50%);

  h1 {
    color: white;
    font-size: 4rem;
    font-weight: 800;
  }

  img {
    border-radius: 8px;
  }

  &-content {
    p {
      color: white;
      text-align: center;
      line-height: 1.3;
    }
  }
}

.video {
  background-image: linear-gradient(#f8650c 60%, #cd1e01 40%);
  h1 {
    color: white;
    font-size: 4rem;
    font-weight: 800;
  }
  img {
    border-radius: 8px;
  }
  &-content {
    p {
      color: white;
      text-align: center;
      line-height: 1.3;
    }
  }
}

.fourth-part {
  background: #f8650c;

  h1 {
    color: white;
    font-size: 4rem;
    font-weight: 800;
  }
  p {
    color: white;
    font-size: 2rem;
    text-align: center;
    line-height: 30px;
    margin: auto;
    margin-top: 2rem;
  }

  button {
    width: 100%;
    height: 60px;
    color: white;
    background-color: #730202;
    border-radius: 8px;
    margin-left: auto;
    font-weight: 600;
  }

  input {
    background-color: #f2852a;
    border-radius: 8px;
    padding: 0.9rem;
    color: white;
    height: 60px;
    width: 100%;
    outline: none;
  }

  textarea {
    background-color: #f2852a;
    border-radius: 8px;
    padding: 0.9rem;
    color: white;
    width: 100%;
  }
}

.cards-content {
  position: absolute;
  z-index: 1;
  display: block;
  bottom: 20px;

  h4 {
    color: white;
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    color: white;
    font-size: 1.4rem;
  }
}

/* do not group these rules */
*::-webkit-input-placeholder {
  color: white;
  opacity: 1;
}
*:-moz-placeholder {
  /* FF 4-18 */
  color: white;
  opacity: 1;
}
*::-moz-placeholder {
  /* FF 19+ */
  color: white;
  opacity: 1;
}
*:-ms-input-placeholder {
  /* IE 10+ */
  color: white;
  opacity: 1;
}
*::-ms-input-placeholder {
  /* Microsoft Edge */
  color: white;
  opacity: 1;
}
*::placeholder {
  /* modern browser */
  color: white;
  opacity: 1;
}

#video_overlays {
  float: left;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.52);
  z-index: 1;
}
.button-4 {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}
.button-4 a {
  font-family: arial;
  font-size: 23px;
  color: #ffffff;
  text-decoration: none;
  line-height: 50px;
  transition: all 0.5s ease;
  z-index: 2;
  position: relative;
}
.eff-4 {
  width: 28rem;
  height: 6rem;
  left: -28rem;
  background: #cd1e01;
  position: absolute;
  transition: all 0.5s ease;
  z-index: 1;
  top: 0;
}
.button-4:hover .eff-4 {
  left: 0;
}
.button-4:hover a {
  color: #fff;
}
.video-thumbnail {
  @apply relative cursor-pointer;
  &:after {
    @apply absolute right-0 bottom-0 top-0 left-0;
    content: "";
    background-image: url("/icons/play.svg");
    width: 100px;
    height: 100px;
    margin: auto;
  }
  &:before {
    @apply absolute right-0 bottom-0 top-0 left-0;
    content: "";
    border-radius: 8px;
    background-color: #0000007a;
  }

  img {
    height: 350px;
  }
}
</style>
