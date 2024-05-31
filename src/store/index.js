import { createStore } from 'vuex'

export default createStore({
  state: {
    servicio: localStorage.getItem('servicio') ? JSON.parse(localStorage.getItem('servicio')) : [],
    datos: localStorage.getItem('datos') ? JSON.parse(localStorage.getItem('datos')) : []
  },
  getters: {
    getServicio: state => state.servicio,
    getDatos: state => state.datos 
  },
  mutations: {   //servicios
    addServicio(state, dato) {
      state.servicio.push(dato);
    },
    deleteServicio(state, index) {
      state.servicio.splice(index, 1);
    },
    limpiarServicio(state) {
      state.servicio = [];
    },
//DATOS
    addDatos(state, dato) {
      state.datos.push(dato);
    },
    deleteDatos(state, index) {
      state.datos.splice(index, 1);
    },
    limpiarDatos(state) {
      state.datos = [];
    }
  },
  actions: { 
    //servicios
    setServicio({ state, commit }, dato) {
      commit('addServicio', dato);
      localStorage.setItem('servicio', JSON.stringify(state.servicio));
    },
    
    setDeleteService({ commit }, index) {
      commit('deleteServicio', index);
    },
    limpiarServicio({ commit }) {
      commit('limpiarServicio');
    },
//DATOS
    setDatos({ state, commit }, dato) {
      commit('addDatos', dato); // Utiliza la mutación para agregar el nuevo dato
      localStorage.setItem('datos', JSON.stringify([...state.datos, dato])); // Guarda los datos actualizados en localStorage
    },

    setDeleteDatos({ commit }, index) {
      commit('deleteDatos', index);
    },
    limpiarDatos({ commit }) {
      commit('limpiarDatos');
    }
  }
})
