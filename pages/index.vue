<template>
  <div>
    <div class="first-part">
      <div class="lg:container">
        <div class="pt-12">
          <h1 class="text-center">Why MicMellows?</h1>
          <p
            class="text-left sm:w-auto md:w-3/5 mt-10 mx-auto"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt officia nemo quasi harum praesentium recusandae porro odit doloribus, quod at.</p>
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
  </div>
</template>
<style scoped lang='scss'>
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
</style>
