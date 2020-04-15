<template>
  <div>
    <div class="join-now">
      <Header />
      <div class="join-now-contents w-full md:w-2/6 md:pl-40">
        <h2 class="text-center md:text-left">Unfold Dreams Within</h2>
        <p>Micmellows is a professional Public Speaking and Personality Development Institute with a vision to ensure every individual identify and unleash their dreams through the power of listening, thinking and expressing.</p>
        <button class="mt-20">Join Now</button>
      </div>
    </div>
    <div class="first-part">
      <div class="lg:container">
        <div class="pt-12">
          <h1 class="text-center">Why MicMellows?</h1>
          <p
            class="text-left md:w-3/5 mt-10 mx-auto"
          >Micmellows will help you and your ideas to stand out and resonate with people around the world. You get individual care and one on one mentoring from experienced coaches. A holistic training to build your confidence in association with creative people around you.</p>
        </div>
        <div class="px-0 md:px-64 pb-40 pt-20 flex md:flex-row flex-col justify-between">
          <div class="first-part-cards"></div>
          <div class="first-part-cards"></div>
          <div class="first-part-cards"></div>
        </div>
        <div class="px-0 md:px-20 pb-32">
          <h1 class="text-center md:pb-20">Featured Courses</h1>
          <div class="flex md:flex-row justify-between">
            <div class="first-part-cards2">
              <img style="border-radius:.8rem" src="/images/fc1.jpg" alt />
              <div style="margin-top:-2rem" class="cards-content text-center">
                <h4>Marshmallows ( 8 to 18 years)</h4>
                <p
                  style="min-height: 6.2rem;"
                >Level 1 Launched( Public speaking, Communication Skills, Listening skills, Goal setting, Memory Building)</p>
                <button style="margin-top:10px">Enroll</button>
              </div>
            </div>
            <div class="first-part-cards2">
              <img style="border-radius:.8rem" src="/images/fc2.jpg" alt />
              <div style="margin-top:-2rem" class="cards-content text-center">
                <h4>Exclusive Women Batch</h4>
                <p
                  style="min-height: 6.2rem;"
                >Level 1 - Launched ( Public speaking, Communication Skills, Listening skills)</p>
                <button style="margin-top:10px">Enroll</button>
              </div>
            </div>
            <div class="first-part-cards2">
              <img style="border-radius:.8rem" src="/images/fc3.jpg" alt />
              <div style="margin-top:-2rem" class="cards-content text-center">
                <h4>Professionals</h4>
                <p
                  style="min-height: 6.2rem;"
                >Level 1 - Launched ( Public speaking, Presentation mastery, Listening skills, Interview skills)</p>
                <button style="margin-top:10px">Enroll</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second-part">
      <div class="lg:container pb-40">
        <h1 class="text-center pt-24 pb-20">Our Events</h1>
        <div class="flex md:flex-row justify-between px-0 md:px-20">
          <div class="second-part-cards2"></div>
          <div class="second-part-cards2"></div>
          <div class="second-part-cards2"></div>
        </div>
      </div>
    </div>
    <div class="third-part">
      <div class="lg:container px-0 md:px-20 py-40">
        <h1 class="text-center">What they are Saying?</h1>
        <div class="flex pt-20 justify-around">
          <div class="w-2/5 flex justify-center third-part-cards">
            <img class="w-full" src="/images/wts1.jpg" alt />
            <div class="cards-content w-10/12 text-center">
              <h4>Dr. Catherine M. Cain</h4>
              <p>Ph. D., CRC, LPCC-S</p>
              <p
                class="mt-10"
              >This course is a “must have” for anyone seeking increased personal empowerment, and I highly recommend it to all seeking personal growth.</p>
            </div>
          </div>
          <div class="w-2/5 flex justify-center third-part-cards">
            <img class="w-full" src="/images/wts2.jpg" alt />
            <div class="cards-content w-10/12 text-center">
              <h4>Dr. Saumendu</h4>
              <p>Ph. D., CRC, LPCC-S</p>
              <p
                class="mt-10"
              >"Children are budding flowers of humanity. Let them learn for the love of learning, explore for the sake of finding their own path. Let our flowers bloom, bloom brightly."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fourth-part">
      <div class="md:container px-1 py-1 sm:py-10 sm:px-10 lg:py-40 lg:px-40">
        <div>
          <h1 class="text-center">About MicMellows</h1>
          <img class="m-auto" src="/images/about.png" alt />
        </div>
        <p
          class="w-4/5 text-center"
        >Micmellows is a professional Public Speaking and Personality Development Institute with a vision to ensure every individual identify and unleash their dreams through the power of listening, thinking and expressing. Micmellows gives exposure and a platform to individuals to develop their personality and and gain an edge over others in their field.</p>
        <h1 class="text-center my-24">Get in Touch</h1>
        <div class="form md:px-64">
          <div>
            <input type="text" placeholder="Your Name here" name id />
          </div>
          <div class="mt-10">
            <textarea placeholder="Your Message Here" id rows="10"></textarea>
          </div>
          <div class="mt-10 flex justify-between">
            <input style="width:70%" placeholder="Your E-mail" type="email" name id />
            <button>SEND</button>
          </div>
        </div>
        <div class="maps"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
button {
  height: 4rem;
  width: 12rem;
  border: 2px solid #f26101;
  border-radius: 8px;
  color: white;
}

.join-now {
  background-image: url(/images/microphone.png);
  background-position: center;
  min-height: 50vw;
  background-repeat: no-repeat;
  background-size: cover;

  &-contents {
    position: absolute;
    top: 20%;

    h2 {
      color: #f8650c;
      font-size: 4rem;
      font-weight: 600;
    }

    p {
      font-size: 1.8rem;
      color: white;
      line-height: 1.5;
    }
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

  &-cards {
    height: 22.5rem;
    width: 21.8rem;
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
    width: 339px;
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
    object-fit: contain;
    border-radius: 8px;
    box-shadow: -12px 12px 30px 0 rgba(199, 93, 23, 0.16);
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(4, 4, 4, 0) 22%,
      #111111
    );
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
  }

  button {
    width: 18rem;
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
  top: 68%;

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
</style>
