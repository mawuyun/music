import Rank from '@/page/rank/rank';
import Recommend from '@/page/recommend/recommend';
import Search from '@/page/search/search';
import Singer from '@/page/singer/singer';
import SingerDetail from '@/page/singer/singer-detail';

export default [
  {
    name: 'recommend',
    path: '/recommend',
    meta: {
      tabIndex: 0
    },
    component: Recommend
  },
  {
    name: 'singer',
    path: '/singer',
    meta: {
      tabIndex: 1
    },
    component: Singer,
    children: [
      {
        name: 'singer-detail',
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    name: 'rank',
    path: '/rank',
    meta: {
      tabIndex: 2
    },
    component: Rank
  },
  {
    name: 'search',
    path: '/search',
    meta: {
      tabIndex: 3
    },
    component: Search
  }
];
