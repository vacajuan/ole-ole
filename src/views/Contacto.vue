<template>
    <!-- component -->
<div class=" flex items-center justify-center bg-stone-100">
    <div class="p-10 rounded shadow-sm bg-stone-50  w-auto">
        <div class="mb-6 p-10 bg-white -m-10">
            <h1 class="font-bold text-2xl text-gray-500">Formulario de contacto</h1>
        </div>
        <form>
            <div class="grid grid-cols-2 gap-6">
                <div class="flex flex-col mb-4">
                    <label class="text-gray-500">Nombre
                        <span class="block text-xs font-light text-gray-500">Nombre completo</span>
                    </label>
                    <input type="text"  class="mt-2 px-4 py-2 shadow rounded bg-gray-200"/>
                </div>
                <div class="flex flex-col mb-4">
                    <label class="text-gray-500">Apellidos
                        <span class="block text-xs font-light text-gray-500">Apellido</span>
                    </label>
                    <input type="text "  class="mt-2 px-4 py-2 shadow rounded bg-gray-200"/>
                </div>
            </div>
            <div class="flex flex-col mb-4">
                <label class="text-gray-500">Mail
                    <span class="block text-xs font-light text-stone-400">Correo electrónico</span>
                </label>
                <input type="email"  class="mt-2 px-4 py-2 shadow rounded bg-gray-200"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="text-gray-500">Teléfono
                    <span class="block text-xs font-light text-stone-400">Ingreese su número de teléfono</span>
                </label>
                <input type="text" class="mt-2 px-4 py-2 shadow rounded bg-gray-200"/>
            </div>
            
            <div class="flex flex-col mb-4">
                <label class="text-gray-500">Mensaje
                    <span class="block text-xs font-light text-stone-400">Ingrese el mensaje</span>
                </label>
                <textarea rows="5" class="mt-2 px-6 py-2 shadow rounded bg-gray-200"></textarea>
            </div>
            <div class="mt-6 flex gap-6">
                <button type="submit" class="rounded-full bg-orange-300 py-4 px-10 font-bold text-white shadow hover:bg-blue-500">Enviar</button>  
                <!-- <button type="submit" class="rounded-full bg-transparent py-4 px-10 font-bold text-stone-400 border border-stone-200 hover:border-orange-300 hover:text-orange-300">Réinitialiser</button>   -->
            </div>
        </form>
    </div>
</div>
</template>

<style></style>