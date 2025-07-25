import { module, test } from 'qunit';
import { setupRenderingTest } from 'push-up-helper/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | title', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders basic content', async function (assert) {
    await render(hbs`<Title>Hello World</Title>`);

    assert.dom('h1').exists('Renders h1 element');
    assert.dom('h1').hasText('Hello World', 'Displays content');
  });

  test('it supports HTML content', async function (assert) {
    await render(hbs`
      <Title>
        <strong>Bold</strong> text
      </Title>
    `);

    assert.dom('h1 strong').hasText('Bold', 'Renders HTML elements');
  });
});
