'use strict';

define("push-up-helper/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks, 'en-us'); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("push-up-helper/tests/integration/components/title-test", ["qunit", "push-up-helper/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"push-up-helper/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | title', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders basic content', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Title>Hello World</Title>
      */
      {
        "id": "z/SVVPD5",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"Hello World\"]],[]]]]]],[],[\"title\"]]",
        "moduleName": "C:\\Users\\chris\\Documents\\push-up-trainer\\push-up-helper\\tests\\integration\\components\\title-test.ts",
        "isStrictMode": false
      }));
      assert.dom('h1').exists('Renders h1 element');
      assert.dom('h1').hasText('Hello World', 'Displays content');
    });
    (0, _qunit.test)('it supports HTML content', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Title>
              <strong>Bold</strong> text
            </Title>
          
      */
      {
        "id": "B5+FB+yW",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[10,\"strong\"],[12],[1,\"Bold\"],[13],[1,\" text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"title\",\"strong\"]]",
        "moduleName": "C:\\Users\\chris\\Documents\\push-up-trainer\\push-up-helper\\tests\\integration\\components\\title-test.ts",
        "isStrictMode": false
      }));
      assert.dom('h1 strong').hasText('Bold', 'Renders HTML elements');
    });
  });
});
define("push-up-helper/tests/test-helper", ["push-up-helper/app", "push-up-helper/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit/test-loader", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _testLoader, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"push-up-helper/app",0,"push-up-helper/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit/test-loader",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.setupEmberOnerrorValidation)();
  (0, _testLoader.loadTests)();
  (0, _emberQunit.start)();
});
define("push-up-helper/tests/unit/components/title-test", ["qunit", "push-up-helper/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"push-up-helper/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Component | title', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists as a component', function (assert) {
      assert.ok(true, 'Title component is available');
    });
  });
});
define('push-up-helper/config/environment', [], function() {
  var prefix = 'push-up-helper';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('push-up-helper/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
