import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { RootState, WalkState } from '@types';

export const state: WalkState = {
  walks: undefined,
  error: false
};

const namespaced: boolean = true;

export const walk: Module<WalkState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
