import pageTitle from 'ember-page-title/helpers/page-title';
import Route from 'ember-route-template';
import { Title } from '../components/title';

export default Route(
  <template>
    {{pageTitle "PushUpHelper"}}

    {{outlet}}

    <Title />
  </template>,
);
