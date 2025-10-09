'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    SRI: {
      enabled: false,
    },
    fingerprint: {
      enabled: true,
    },
    'ember-cli-babel': { enableTypeScriptTransform: true },
  });

  return app.toTree();
};
