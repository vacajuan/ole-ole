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
          <h2 v-if="!registrarseOn" class="text-1xl font-bold text-center text-gray-900">Aprovechá la increíble oferta que Olé tiene para vos!</h2>
          <h2 v-if="continuarOn" class="text-1xl font-bold text-center text-gray-900">Verificando información...</h2>
          <h2 v-if="registrarseOn && !continuarOn" class="text-1xl font-bold text-center text-gray-900">Continuá usando alguna de las siguientes opciones.</h2>
          <!-- <h2 class="text-1xl font-bold text-center text-gray-900 mt-5">Disfrutá de Olé ilimitado GRATIS durante 6 meses.</h2> -->
          <!-- <h2 class="text-sm text-center text-gray-500 mt-3">Luego se te cobrará $120,00 por año.</h2> -->
          <div v-if="!registrarseOn" class="flex flex-col items-center justify-center mt-10">
            <span class="mb-2 text-gray-800 text-center">Regístrate ahora para obtener Olé ilimitado durante 6 meses gratis.</span>
            <h2 class="text-sm text-center text-gray-500 mt-3">Luego se te cobrará $120,00 por año.</h2>
            <button class="text-white py-2 px-4 rounded mt-2" @click="registrarseOn =true" style="background: #92c428;">REGISTRARME</button>
        </div>
          <div v-if="registrarseOn" class="mt-6 space-y-4">
            <button v-if="facebookOn" @click="fcebookGoTo()" class="w-full flex items-center justify-center  border bg-white text-gray-800 p-4 rounded-md shadow-sm hover:bg-gray-200">
              <svg style="width: 20px; margin-right: 30px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="facebook"><path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm3.488 15.999h-2.239v8.124h-3.357V16h-1.677v-2.8h1.677v-1.681c0-2.284.947-3.642 3.637-3.642h2.24v2.8h-1.4c-1.047 0-1.117.392-1.117 1.121l-.003 1.402h2.536l-.297 2.799z"></path></svg>
              <span v-if="facebook">Continuar con Facebook</span> 
              <span v-if="!facebook && !facebookSec" class="loading loading-dots loading-md"></span>
                    <span v-if="facebookSec" class="loading loading-spinner text-success"></span>
            </button>
            <button v-if="googleOn" @click="googleGoTo()" class="w-full flex items-center justify-center  border bg-white text-gray-800 p-4 rounded-md shadow-sm hover:bg-gray-200">
              <svg style="width: 20px; margin-right: 30px;" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
              <span  v-if="!google && !googleSec" class="loading loading-dots loading-md"></span>
              <span v-if="googleSec" class="loading loading-spinner text-success"></span>
              <span v-if="google"> Continuar con Google</span> 
            </button>
            <button v-if="appleOn" @click="appleGoTo()" class="w-full flex items-center justify-center border bg-white text-gray-800 p-4 rounded-md shadow-sm hover:bg-gray-200">
              <svg  style="width: 20px; margin-right: 30px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="apple"><path fill="#303c42" d="M12.5 6h.1A5.51 5.51 0 0 0 17 .5a.5.5 0 0 0-.19-.39.49.49 0 0 0-.41-.11A5.51 5.51 0 0 0 12 5.51a.5.5 0 0 0 .5.5Z"></path><path fill="#303c42" d="M21.67 16.53a4.3 4.3 0 0 1-2.67-4 4.46 4.46 0 0 1 2.21-3.85.5.5 0 0 0 .12-.77A6 6 0 0 0 17 6a6.12 6.12 0 0 0-2.34.52A5.58 5.58 0 0 1 12.5 7a5.58 5.58 0 0 1-2.16-.48A6.12 6.12 0 0 0 8 6c-.61 0-6 .2-6 7 0 5.56 3.8 11 6 11a6.63 6.63 0 0 0 2.81-.59A4.1 4.1 0 0 1 12.5 23a4.1 4.1 0 0 1 1.69.41A6.63 6.63 0 0 0 17 24c1.79 0 3.9-3.53 5-6.84a.5.5 0 0 0-.33-.63Z"></path></svg>
              <span v-if="!apple && !appleSec" class="loading loading-dots loading-md"></span>
              <span v-if="appleSec" class="loading loading-spinner text-success"></span>
              <span v-if="apple">Continuar con Apple</span>   
            </button>
            <div  v-if="emailOn" >
            <div class="relative mt-10">
              <label for="email" class="sr-only">Correo electrónico</label>
              <input v-model="emailUser" id="email" required name="email" type="email" autocomplete="email" class="text-gray-800 bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Correo electrónico*">
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
         emailUser:'',
         registrarseOn:false,
         continuarOn:false
      }
    },
    methods:{
      fcebookGoTo(){
        this.googleOn=false;
        this.appleOn=false;
        this.emailOn=false;
        this.facebook=false;
        this.continuarOn=true
          setTimeout(() => {
            this.facebookSec=true;
          }, 2500);
          setTimeout(() => {
            this.$router.push({name: 'registro-user'})
          }, 5009);
      },
      googleGoTo(){
        this.facebookOn=false;
        this.appleOn=false;
        this.emailOn=false;
        this.google=false;
        this.continuarOn=true
          setTimeout(() => {
            this.googleSec=true;
          }, 2500);
          setTimeout(() => {
            this.$router.push({name: 'registro-user'})
          }, 5009);
      },
      appleGoTo(){
        this.facebookOn=false;
        this.googleOn=false;
        this.emailOn=false;
        this.apple=false;
        this.continuarOn=true
          setTimeout(() => {
            this.appleSec=true;
          }, 2500);
          setTimeout(() => {
            this.$router.push({name: 'registro-user'})
          }, 5009);
      },
      continueToCheck(){
        if(this.emailUser){
          this.facebookOn=false;
        this.googleOn=false;
        this.appleOn=false
        this.continuar=true;
        this.continuarOn=true
        setTimeout(() => {
          this.$router.push({name: 'registro-user'})
        }, 3000);
        }
  
      }
    }
  
  }
  </script>
  
  <style>
  
  </style>
  