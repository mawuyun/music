import VTab from './v-tab';
import RTab from './r-tab';
import VScroll from './VScroll';
import BScroll from './b-scroll';

const XComponent = [VTab, RTab, VScroll, BScroll];

const allComponent = (Vue, option) => {
  /* eslint-disable no-new */
  if (allComponent.installed) {}
  XComponent.forEach(element => {
    Vue.component(element.name, element);
  });
};

export default allComponent;
