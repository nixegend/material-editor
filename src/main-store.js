import Vue from 'vue';
import Vuex from 'vuex';
import geometricObjectsList from './components/geometric-objects-list/vuex/store';
import shaderEditor from './components/shader-editor/vuex/store';
import materialEditor from './components/material-editor/vuex/store';
import shaderControls from './components/shader-controls/vuex/store';

Vue.use(Vuex);

const MainStore = new Vuex.Store({
  modules: {
    geometricObjectsList,
    shaderEditor,
    materialEditor,
    shaderControls
  }
});

window.store = MainStore;

export default MainStore;
