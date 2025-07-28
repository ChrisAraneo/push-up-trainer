import pageTitle from 'ember-page-title/helpers/page-title';
import Route from 'ember-route-template';
import { Title } from '../components/title';
import { PushUpAnimation } from '../components/push-up-animation';

const TITLE = 'Push Up Trainer';

export default Route(
  <template>
    {{pageTitle TITLE}}

    {{outlet}}

    <Title>{{TITLE}}</Title>

    <PushUpAnimation />
  </template>,
);
