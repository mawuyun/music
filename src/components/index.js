import VTab from '@/components/VTab';
import VScroll from '@/components/VScroll';

const XComponent = [VTab, VScroll];

const allComponent = (Vue, option) => {
  /* eslint-disable no-new */
  if (allComponent.installed) {}
  XComponent.forEach(element => {
    Vue.component(element.name, element);
  });
};

export default allComponent;
