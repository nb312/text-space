import {atom} from 'recoil';
export const chainIdState = atom({
    key: 'chainIdState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });