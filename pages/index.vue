<template>
  <div>
    <div class="first-part">
      <div class="container:lg">
        <div class="pt-12">
          <h1 class="text-center">Why MicMellows?</h1>
          <p
            class="text-left w-3/5 mt-10 mx-auto"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt officia nemo quasi harum praesentium recusandae porro odit doloribus, quod at.</p>
        </div>
        <div class="px-64 pt-20 flex flex-row justify-between">
          <div class="first-part-cards"></div>
          <div class="first-part-cards"></div>
          <div class="first-part-cards"></div>
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
}
</style>
