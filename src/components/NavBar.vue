<template>
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500">
    <div class="navbar text-primary-content justify-center relative ">
      <button class="btn border-none bg-gradient-to-t from-blue-500 to-cyan-500 shadow-lg text-xl">
        <svg class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
        <defs>
        </defs>
        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
          <circle cx="68.375" cy="45.004999999999995" r="21.625" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(113,195,134); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
          <path d="M 68.212 53.113 c -0.548 0 -1.072 -0.225 -1.451 -0.623 l -6.604 -6.961 c -0.76 -0.801 -0.727 -2.067 0.074 -2.828 c 0.803 -0.759 2.068 -0.727 2.828 0.075 l 5.025 5.297 l 8.364 -10.437 c 0.691 -0.863 1.95 -1 2.812 -0.31 c 0.861 0.69 1 1.949 0.31 2.811 l -9.798 12.227 c -0.361 0.45 -0.899 0.724 -1.478 0.747 C 68.268 53.112 68.239 53.113 68.212 53.113 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 21.808 35.546 l 6.321 -5.339 c 1.631 -1.388 1.829 -3.836 0.441 -5.467 h 0 c -1.388 -1.631 -3.836 -1.829 -5.467 -0.441 L 5.867 38.924 c -0.27 0.215 -0.532 0.438 -0.787 0.67 l -0.058 0.049 l 0.002 0.003 C 1.936 42.486 0 46.559 0 51.086 v 0 c 0 8.582 6.957 15.54 15.54 15.54 h 3.653 h 12.623 h 0.245 c 2.142 0 3.879 -1.736 3.879 -3.879 v 0 c 0 -2.142 -1.747 -3.929 -3.889 -3.929 h -0.234 l 0 0 h 2.994 c 2.142 0 3.879 -1.736 3.879 -3.879 v 0 c 0 -2.142 -1.736 -3.879 -3.879 -3.879 h 2.651 c 2.142 0 3.879 -1.736 3.879 -3.879 c 0 -2.142 -1.736 -3.879 -3.879 -3.879 h 13.808 c 2.142 0 3.879 -1.736 3.879 -3.879 v 0 c 0 -2.142 -1.736 -3.879 -3.879 -3.879 H 21.808 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(253,199,148); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
        </g>
        </svg>
        EZ Cargas
      </button>
    </div>
    <div class="flex justify-center rounded-md mt-5 bg-gradient-to-r from-cyan-500 to-blue-600" role="group">
      <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900  border-gray-200 rounded-s-lg hover:text-blue-700 focus:z-10  focus:text-blue-700  text-white  ">
     <a href="/"> Inicio</a>
     <span class="ml-5">|</span>
      </button>
      <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900  border-gray-200 rounded-s-lg hover:text-blue-700 focus:z-10  focus:text-blue-700  text-white  ">
        <a href="/contacto"> Contacto</a><span class="ml-5">|</span>
      </button>

      <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900  border-gray-200 rounded-s-lg hover:text-blue-700 focus:z-10  focus:text-blue-700  text-white  ">
        <a href="/contacto"> Ayuda</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDropdown() {
      const dropdown = document.getElementById('dropdownDotsHorizontal');
      dropdown.classList.toggle('hidden');
    },
    closeDropdown(event) {
      const dropdown = document.getElementById('dropdownDotsHorizontal');
      if (!dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
      }
    }
  }
}
</script>

<style>
</style>
