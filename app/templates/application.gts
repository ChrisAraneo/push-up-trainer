import pageTitle from 'ember-page-title/helpers/page-title';
import Route from 'ember-route-template';
import { Title } from '../components/title';
import PushUpAnimation from '../components/push-up-animation';
import Timer from '../components/timer';
import Button from '../components/button';

const TITLE = 'Push Up Trainer';

export default Route(
  <template>
    {{pageTitle TITLE}}

    {{outlet}}

    <div class="app-container">
      <Title>{{TITLE}}</Title>

      <Timer @duration={{30000}} @onReady={{@controller.handleTimerReady}} />

      <PushUpAnimation
        @duration={{1000}}
        @onReady={{@controller.handleAnimationReady}}
      />

      <div class="main-controls">
        {{#if @controller.isRunning}}
          {{#if @controller.isPaused}}
            <Button @variant="start" @onClick={{@controller.start}}>
              Resume
            </Button>
          {{else}}
            <Button @variant="pause" @onClick={{@controller.pause}}>
              Pause
            </Button>
          {{/if}}
        {{else}}
          <Button @variant="start" @onClick={{@controller.start}}>
            Start
          </Button>
        {{/if}}

        <Button @variant="reset" @onClick={{@controller.stop}}>
          Stop
        </Button>
      </div>
    </div>
  </template>,
);
