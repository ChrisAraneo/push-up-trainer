import pageTitle from 'ember-page-title/helpers/page-title';
import Route from 'ember-route-template';
import { Title } from '../components/title';

const TITLE = "Push Up Trainer";

export default Route(
  <template>
    {{pageTitle TITLE}}

    {{outlet}}

    <Title>{{TITLE}}</Title>
  </template>,
);
