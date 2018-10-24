import VTab from '@/components/v-tab';
import RTab from '@/components/r-tab';
import VScroll from '@/components/VScroll';

const XComponent = [VTab, RTab, VScroll];

const allComponent = (Vue, option) => {
  /* eslint-disable no-new */
  if (allComponent.installed) {}
  XComponent.forEach(element => {
    Vue.component(element.name, element);
  });
};

export default allComponent;
