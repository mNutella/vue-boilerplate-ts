import { ActionTree } from 'vuex';
import { RootState, WalkState } from '@types';
import * as API from '@api';
import * as types from '../../mutation-types';


export const actions: ActionTree<WalkState, RootState> = {
  async fetchWalks({ commit }) {
    try {
      const response = await API.getWalks();
      const payload = response && response;
      commit(types.RECEIVE_WALKS, payload);
    } catch (error) {
      console.log(error);
      commit(types.RECEIVE_WALKS_ERROR);
    }
  }
};