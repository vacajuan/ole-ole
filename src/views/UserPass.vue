<template>
    <div class="flex flex-col lg:flex-row min-h-screen">
      <!-- Sección de la imagen -->
      <div class="imgScreen relative" style="width: 1015px;">
        <img class="absolute inset-0 w-full h-full" src="../assets/ole_background.jpg" alt="Imagen">
      </div>
      <!-- Sección del formulario -->
      <div class="lg:w-1/3 flex items-center justify-center bg-white py-16 sm:py-24 lg:py-32 px-6 lg:px-8">
        <div class="max-w-md lg:max-w-lg w-full">
          <img src="https://static.clarin.com/auth0/img/logo_ole_186x60.png" alt="Logo" class="mx-auto mb-8">
          <h2 class="text-1xl font-bold text-center text-gray-900">Ingresa con tus datos</h2>
          <div class="mt-6 space-y-4">
            <div  v-if="emailOn" action="">
            <div class="relative mt-10">
              <label for="email" class="sr-only">Contraseña</label>
              <input v-model="emailUser" id="email" required name="email" type="password" autocomplete="password" class="text-gray-800 bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Contraseña*">
            </div>
            <button @click="continueToCheck()" style="background: #a1c33d;" type="" class="mt-3 w-full text-white p-4 rounded-md shadow-sm hover:bg-green-700">
              <span v-if="continuar" class="loading loading-spinner text-success"></span>
             <span v-if="!continuar">Continuar</span> 
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginRegisterForm',
    data() {
      return{
         facebook: true,
         google: true,
         apple: true,
         facebookSec:false,
         googleSec:false,
         appleSec:false,
         facebookOn: true,
         googleOn:true,
         appleOn:true,
         emailOn:true,
         continuar:false,
         emailUser:''
      }
    },
    methods:{
      continueToCheck(){
        if(this.emailUser){
          this.facebookOn=false;
        this.googleOn=false;
        this.appleOn=false
        this.continuar=true;
        setTimeout(() => {
          this.$router.push({name: 'user-data'})
        }, 3000);
        }
  
      }
    }
  
  }
  </script>
  
  <style>
  
  </style>
  