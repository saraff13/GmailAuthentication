import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 760;

const hs = (size: number) => (width / guidelineBaseWidth) * size;
const vs = (size: number) => (height / guidelineBaseHeight) * size;
const ms = (size: number, factor = 0.5) => size + (hs(size) - size) * factor;

export {hs, vs, ms};
