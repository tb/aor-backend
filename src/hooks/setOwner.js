'use strict';

module.exports = options => hook => {
  const { userId } = hook.params.payload || {};
  hook.data.owner = userId;
  return hook;
};
