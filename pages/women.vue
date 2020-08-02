<template>
  <div style="background-color:#cd1e01">
    <div class="my-container mmstyle py-48">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12">
          <div class="flex flex-wrap items-center justify-around">
            <img class="" src="/images/fc2.jpg" alt="">
            <h1 class="">
              Exclusive Women's Batch
            </h1>
          </div>
          <div class="w-full mt-12">
            <p>
              The exclusive women's batch is a special session conducted for girls and women who wish hone their public speaking skills and learn to tame their stage fear.             
            </p>
            <p class="mt-5">
              When girls and women learn to express their true voice without any hesitation , they will become more powerful than you can imagine. 
            </p>
            <p class="mt-5">
              When girls and women learn to express their true voice without any hesitation , they will become more powerful than you can imagine. 
            </p>
            <p class="mt-5">
              Speaking with confidence can also aid in personality development of women and help them in leading a successful career. We will also train every women to learn effective communication skills with our easy and practical driven approach. 
            </p>
            <p class="mt-5">
              Few other aspects that we will touch along with the public speaking course are:
            </p>
            <p class="mt-5">
              Personal Goal Setting 
            </p>
            <p class="mt-5">
              Active listening
            </p>
            <p class="mt-5">
              Self improvement
            </p>
            <p class="mt-5">
              Deep listening
            </p>
          </div>
        </div>
        <div class="w-full md:w-2/6">
          <div class="other-courses py-16 px-10">
            <p class="text-center">Other Courses</p>
            <ul>
              <li><a href="/marshmallow">Marshmallow(8-18 years)</a></li>
              <li><a href="/professional">Professional Batch</a></li>
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
