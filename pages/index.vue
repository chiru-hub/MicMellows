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
        <div class="px-0 md:px-20">
          <h1 class="text-center md:pb-20">Featured Courses</h1>
          <div class="flex md:flex-row justify-between">
            <div class="first-part-cards2"></div>
            <div class="first-part-cards2"></div>
            <div class="first-part-cards2"></div>
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
          <div class="w-1/2 third-part-cards">
            <img src="/images/wts1.png" alt />
          </div>
          <div class="w-1/2 third-part-cards">
            <img src="/images/wts2.png" alt />
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
          class="w-4/5 text-center mx:auto"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi officiis possimus iusto perferendis cumque libero praesentium rerum illum quidem, doloremque vitae blanditiis asperiores illo eos quae voluptate ullam tempore dolore nesciunt aperiam aliquam provident, tenetur consequuntur. Reprehenderit, possimus praesentium!</p>
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
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.join-now {
  background-image: url(/images/microphone.png);
  background-position: center;
  height: 50vw;
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
    button {
      height: 4rem;
      width: 12rem;
      border: 2px solid #f26101;
      border-radius: 8px;
      color: white;
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
</style>
