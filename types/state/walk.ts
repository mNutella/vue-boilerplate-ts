import BaseState from './base';
import { Walk } from '../model';

export default interface WalkState extends BaseState {
  walks?: Walk[]
  error: boolean
}
