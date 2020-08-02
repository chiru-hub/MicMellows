<template>
  <div style="background-color:#cd1e01">
    <div class="my-container mmstyle py-48">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12">
          <div class="flex flex-wrap items-center justify-around">
            <img class="" src="/images/fc3.jpg" alt="">
            <h1 class="">
              Professional batch 
            </h1>
          </div>
          <div class="w-full mt-12">
            <p>
              If you're working in a corporate environment, there will be several occasions when you have to engage in critical conversations, conduct meetings and presentations, build networks with clients, and participate in various telephonic and conference calls. Also, if you're interested in joining the entertainment industry, media or journalism, good communication skills is quite mandatory. The ability to communicate effectively is one of the most in-demand skills required in most of the industries today. Whether it's the corporate sector or any other work environment, good public communication skills can make or break your career. 
            </p>
            <p class="mt-5">
              Our public speaking course is designed to give you the right platform to learn how to speak confidently in any professional environment. 
            </p>
            <p class="mt-5">
              Personal coaches will guide you in learning these skills and you'll be able to see immense self improvement within few days. 
            </p>
            <p class="mt-5">
              Our Public Speaking Classes will also include :
            </p>
            <p class="mt-5">
              Few other aspects that we will touch along with the public speaking course are:
            </p>
            <p class="mt-5">
              Personal Goal Setting
            </p>
            <p class="mt-5">
             Preparing Speech Script
            </p>
            <p class="mt-5">
              Active listening skills
            </p>
            <p class="mt-5">
              Deep listening
            </p>
            <p class="mt-5">
              Personality Development
            </p>
          </div>
        </div>
        <div class="w-full md:w-2/6">
          <div class="other-courses py-16 px-10">
            <p class="text-center">Other Courses</p>
            <ul>
              <li><a href="/marshmallow">Marshmallow(8-18 years)</a></li>
              <li><a href="/women">Exclusive Women's Batch</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<style lang="scss" scoped>

.mmstyle {

        h1 {
          @apply text-white font-bold;
          font-size: 22px;
        }

        p {
          @apply text-white;
          line-height: 1.9;
        }

        img {
          border-radius: 8px;
          max-height: 525px;
        }
}

.other-courses {
  background-color: #f8650c;
  border-radius: 8px;

  p {
    color:white;
    font-size: 25px;
  }

  a {
    @apply text-white;
  }

  li {
    margin: 20px 0;
  }


li:before {
  content: "•"; /* Insert content that looks like bullets */
  padding-right: 8px;
  color: white; /* Or a color you prefer */
  }
}

</style>
