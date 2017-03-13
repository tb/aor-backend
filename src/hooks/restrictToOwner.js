'use strict';

module.exports = options => hook => {
  if (hook.type === 'before') {
    const { userId } = hook.params.payload || {};

    if (hook.method === 'find') {
      hook.params.query.owner = userId;
      return hook;
    }

    const { owner } = hook.data || {};
    if (userId && owner && owner !== userId) {
      throw new Error('You are not allowed to modify this data');
    }
  }

  return hook;
};
