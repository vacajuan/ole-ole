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
          <h2 class="text-1xl font-bold text-center text-gray-900">Completa el registro usando tus datos.</h2>
          <div class="mt-6 space-y-4">
            <form class="text-gray-800" @submit.prevent="continueToCheck">
            <div class="relative mt-2">
              <label for="full-name" class="sr-only">Nombre completo</label>
              <input v-model="fullName" id="full-name" name="fullName" type="text" autocomplete="name" required class="bg-white hover:bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Nombre completo*">
            </div>
            <div class="relative mt-2">
              <label for="dni" class="sr-only">D.N.I</label>
              <input v-model="dni" id="dni" name="dni" type="number" autocomplete="off" required class="bg-white hover:bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="D.N.I*">
            </div>
            <div class="relative mt-2">
              <label for="cp" class="sr-only">D.N.I</label>
              <input v-model="cp" id="cp" name="cp" type="text" autocomplete="off" required class="bg-white hover:bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Código postal zip*">
            </div>
            <div class="relative mt-2">
              <label for="email" class="sr-only">Correo electrónico</label>
              <input v-model="emailUser" id="email" name="email" type="email" autocomplete="email" required class="bg-white hover:bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Correo electrónico*">
            </div>
            <div class="relative mt-2">
              <label for="email" class="sr-only">Contraseña</label>
              <input id="email" name="email" type="password" autocomplete="" required class="bg-white hover:bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Crea una contraseña">
            </div>
            <div class="relative mt-2">
              <label for="email" class="sr-only">Confirmar contraseña</label>
              <input  id="email" name="email" type="password" autocomplete="" required class="bg-white hover:bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Repetir contraseña">
            </div>
            <button @click="continueToCheck()" type="submit" style="background: #a1c33d;" class="mt-3 w-full text-white p-4 rounded-md shadow-sm hover:bg-green-700">
              <span v-if="continuar" class="loading loading-spinner text-success"></span>
              <span v-else>Continuar</span> 
            </button>
          </form>
          </div>
          
          <!-- <p class="mt-4 text-center text-sm text-gray-600">¿No tenés una cuenta? <a href="#" class="text-green-600 font-medium hover:underline">Regístrate GRATIS</a></p> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'LoginRegisterForm',
    data() {
      return{
         continuar:false,
         emailUser:'',
         fullName:'',
         dni:'',
         cp:''
      }
    },
    methods:{
      ...mapActions(['setServicio', 'setDeleteService', 'setDatos', 'setDeleteDatos', 'limpiarServicio', 'limpiarDatos']),
  
      guardarDato() {
          this.limpiarDatos();
          let nuevoDato ={
              "name": this.fullName,
              "email": this.emailUser,
              "dni": this.dni,
              "cp": this.cp 
          }
        this.setDatos(nuevoDato);
      },
      continueToCheck(){
        if(this.emailUser && this.dni){
          this.guardarDato();
          this.facebookOn=false;
        this.googleOn=false;
        this.appleOn=false
        this.continuar=true;
        setTimeout(() => {
          this.$router.push({name: 'check-phone'})
        }, 3000);
        }
  
      }
    }
  
  }
  </script>
  
  <style>
  
  </style>
  