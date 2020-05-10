<template>
  <div>
    <!-- <div class="join-now">
      <Header />
      <div class="join-now-contents w-full md:w-2/6 md:pl-40">
        <h2 class="text-center md:text-left">Unfold Dreams Within</h2>
        <p>Micmellows is a professional Public Speaking and Personality Development Institute with a vision to ensure every individual identify and unleash their dreams through the power of listening, thinking and expressing.</p>
        <button class="mt-16">Join Now</button>
      </div>
    </div> -->

 <div class="header">
    <div style="position:absolute;z-index:99;left:0;right:0;margin:auto;top:0;bottom:0;">
        <div class="join-now-contents w-full">
        <div class="container carousel-text">
                <h2 class="text-left">Unfold Dreams Within</h2>
                <p>Micmellows is a professional Public Speaking and Personality </p>
                <p>Development Institute with a vision to ensure every individual identify </p>
                <p>and unleash their dreams through the power of listening, thinking and expressing.</p>
                <button class="mt-16"  v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }">Join Now</button>
              </div>
              </div>
    </div>
    <client-only>


      <carousel class="homepageSlider" :per-page="1":mouse-drag="false" :autoplay="true" :loop="true" :autoplayTimeout="5000">
        <slide v-for="p in homeslider" :key="p.id">
        <img
                class="d-block w-full h-full object-cover img1"
                :src="p"
                alt="First slide"
              />
        </slide>
      </carousel>


    
    </client-only>
 </div>

    <div class="first-part">
      <div class="container px-5">
        <div class="p-12">
          <h1 class="text-center">Why MicMellows?</h1>
          <p
            class="text-center md:w-3/5 mt-10 mx-auto"
          >Micmellows will help you and your ideas to stand out and resonate with people around the world. You get individual care and one on one mentoring from experienced coaches. A holistic training to build your confidence in association with creative people around you.</p>
        </div>
        <div class="px-0 pb-40 pt-20 flex w-full flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/3 p-5 lg:pr-4">
            <div class="first-part-cards">
              <img src="/images/MIC_4_M2-01.jpg" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3 p-5 lg:px-2">
            <div class="first-part-cards">
              <img src="/images/MIC_5.jpg" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3 p-5 lg:pl-4">
            <div class="first-part-cards">
              <img src="/images/MIC_17-01.jpg" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div class="px-0 pb-32 courses">
          <h1 class="text-center md:pb-20">Featured Courses</h1>
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
                  <button style="margin-top:10px" v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }">Enroll</button>
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
                  <button style="margin-top:10px" v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }">Enroll</button>
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
                  <button style="margin-top:10px" v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }">Enroll</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second-part events">
      <div class="container pb-40">
        <h1 class="text-center pt-24 pb-20">Our Events</h1>

        <div class="flex flex-wrap justify-between">
          <div class="w-full lg:w-1/3 p-10 lg:pr-4">
            <div class="first-part-cards2">
              <img
                style="border-radius:.8rem"
                class="w-full h-full object-cover"
                src="/images/our-events-1.jpg"
                alt
              />
              <div style="margin-top:-2rem" class="cards-content text-center  w-full  px-5">
                <!-- <h4>Marshmallows ( 8 to 18 years)</h4> -->
                <!-- <p
                  style="min-height: 6.2rem;"
                >Level 1 Launched( Public speaking, Communication Skills, Listening skills, Goal setting, Memory Building)</p> -->
                <button style="margin-top:10px" v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }">Set Reminder</button>
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
                >Level 1 - Launched ( Public speaking, Communication Skills, Listening skills)</p> -->
                <button style="margin-top:10px"  v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }">Set Reminder</button>
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
                >Level 1 - Launched ( Public speaking, Presentation mastery, Listening skills, Interview skills)</p> -->
                <button style="margin-top:10px" v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }">Set Reminder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="third-part">
      <div class="container px-0 py-40">
        <h1 class="text-center">What they are Saying?</h1>
        <div class="flex flex-wrap w-full pt-20 justify-around">
          <div class="w-full lg:w-1/2 p-10 lg:pr-10">
            <div class="justify-center third-part-cards">
              <img class="w-full h-full object-cover" src="/images/wts1.jpg" alt />
              <div class="cards-content w-10/12 text-center w-full px-5">
                <h4>Rita Harlalka</h4>
                <p>MBA HR</p>
                <p style="min-height:8.4rem"
                  class="mt-10"
                >MBA HR, Recruiter in global HR leader Mark Watt and Anderson. Received Gold Medal from then president Dr APJ Abdul Kalam, Served as Area Director, Elected as Division Director in Toastmasters Club.
A passionate thinker,writer, story teller and Speaker.</p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-10 lg:pl-10">
            <div class="justify-center third-part-cards">
              <img class="w-full h-full object-cover" src="/images/wts2.jpg" alt />
              <div class="cards-content w-10/12 text-center w-full px-5">
                <h4>Dr. Saumendu</h4>
                <p>Ph. D., CRC, LPCC-S</p>
                <p style="min-height:8.4rem"
                  class="mt-10"
                >Dr. Saumendu Bhattacharjee, MD ( Pediatrics)...an experienced doctor, mentor, writer, speaker, speech coach. Past District Champion of International Speech Contest, 2019, in Toastmasters International.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fourth-part about">
      <div class="container px-1 py-1 sm:py-10 sm:px-10 lg:py-40 lg:px-40">
        <div>
          <h1 class="text-center">About MicMellows</h1>
          <img class="m-auto" src="/images/about-mic-2.jpg" alt />
        </div>
        <p
          class="w-4/5 text-center"
        >Micmellows is a professional Public Speaking and Personality Development Institute with a vision to ensure every individual identify and unleash their dreams through the power of listening, thinking and expressing. Micmellows gives exposure and a platform to individuals to develop their personality and and gain an edge over others in their field.</p>
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
      homeslider: [
        '/images/about-mic-2.jpg',
        '/images/about-mic-3.jpg',
        '/images/about-mic-4.jpg',
      ],
      
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
      },
    };
  },
  methods: {
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

.header{
  position :relative
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

  .carousel-text{
    padding-top: 80px;
  }

@media (max-width: 991px) {
  .carousel-text{
    padding-top: 0;
    padding-left: 40px;
    padding-right: 151px;
  }
}

@media (max-width: 600px) {
  .carousel-text{
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
      height: 300px;
    }
  }
}

@media (max-width: 1280px) {
  .first-part {  
    &-cards {
      height:220px;
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
  background-image: linear-gradient(#cd1e01 50%, #f8650c 50%);

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

.fourth-part {
  background-image: linear-gradient(#cd1e01 20%, #f8650c 80%);

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
    height: 4.3rem;
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
</style>
