import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@types';
import { walk } from './modules/walk';


Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '0.1.0' // a simple property
  },
  modules: {
    walk
  },
  strict: process.env.NODE_ENV !== 'production'
};

export default new Vuex.Store<RootState>(store);