<template>
  <div>
    <nav class="shadow absolute md:w-full" role="navigation">
      <div class="my-container mx-auto py-8 flex flex-wrap items-center md:flex-no-wrap">
        <div class="mr-4 md:mr-8">
          <a href="#" rel="home" class="site-logo">
            <svg
              class="w-10 h-10 text-purple-600"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>TailwindCSS</title>
              <path
                fill="currentColor"
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
              />
            </svg>
          </a>
        </div>
        <div class="ml-auto md:hidden">
          <button class="flex items-center px-3 py-2 border rounded" type="button">
            <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full md:w-auto md:flex-grow md:flex md:items-center">
          <ul
            class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0"
          >
            <li>
              <a
                class="block px-4 py-1 md:p-2 lg:px-4 clearfix site-name"
                href="#"
                title="Link"
              >Micmellows</a>
            </li>
          </ul>
          <ul
            class="nav flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0"
          >
            <li>
              <a class="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Articles</a>
            </li>
            <li>
              <a
                class="block px-4 py-1 md:p-2 lg:px-4 text-purple-600"
                href="#"
                title="Active Link"
              >Training</a>
            </li>
            <li>
              <a class="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Quotes</a>
            </li>
            <li>
              <a class="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.nav {
  a {
    color: white;
    font-size: 18px;
    margin: 0 10px;
  }
}

.site-name {
  font-size: 18px;
   color: white;
  font-weight: bold;
}
</style>
