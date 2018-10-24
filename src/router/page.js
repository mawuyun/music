import Rank from '@/page/rank/rank';
import Recommend from '@/page/recommend/recommend';
import Search from '@/page/search/search';
import Singer from '@/page/singer/singer';

export default [
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/singer',
    component: Singer
  }
];
