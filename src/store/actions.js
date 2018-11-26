import * as types from './mutation-types';

export const selectPlay = function({commit, state}, {list, index}) {
  commit(types.SETPLAYLIST, list);
  commit(types.SETSEQUENCELIST, list);
  commit(types.SETCURRENTINDEX, index);
  commit(types.SETFULLSCREEN, true);
  commit(types.SETMODE, true);
};
