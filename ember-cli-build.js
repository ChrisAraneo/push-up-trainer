'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },
    // Disable SRI for GitHub Pages
    SRI: {
      enabled: false,
    },
    fingerprint: {
      enabled: true,
    },
  });

  return app.toTree();
};
