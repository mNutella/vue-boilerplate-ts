import { MutationTree } from 'vuex';
import { WalkState, Walk } from '@types';
import * as types from '../../mutation-types';

export const mutations: MutationTree<WalkState> = {
  [types.RECEIVE_WALKS](state, payload: Walk[]) {
    state.error = false;
    state.walks = payload;
  },
  [types.RECEIVE_WALKS_ERROR](state) {
    state.error = true;
    state.walks = undefined;
  }
};