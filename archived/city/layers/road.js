import * as CONST from '../../constants';
import layer from './layer';

export default class road extends layer {
  constructor (options) {
    options.type = CONST.T_ROAD;
    super(options);
  }
}