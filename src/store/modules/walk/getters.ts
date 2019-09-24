import { GetterTree } from 'vuex';
import { RootState, WalkState, Walk } from '@types';

export const getters: GetterTree<WalkState, RootState> = {
  allWalks(state): Walk[] | undefined {
    const { walks } = state;
    return walks || undefined;
  }
};