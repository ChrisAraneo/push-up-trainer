import pageTitle from 'ember-page-title/helpers/page-title';
import Route from 'ember-route-template';
import { Title } from '../components/title';
import PushUpAnimation from '../components/push-up-animation';
import Timer from '../components/timer';
import Button from '../components/button';
import DifficultySelector from '../components/difficulty-selector';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faPause, faStop, faPlay } from '@fortawesome/free-solid-svg-icons';

const TITLE = 'Push Up Trainer';

export default Route(
  <template>
    {{pageTitle TITLE}}

    {{outlet}}

    <div class="app-container">
      <Title>{{TITLE}}</Title>

      <DifficultySelector
        @initialLevel={{@controller.currentLevel}}
        @onLevelChange={{@controller.handleLevelChange}}
      />

      <div class="background-animation">
        <PushUpAnimation
          @duration={{1000}}
          @iterations={{5}}
          @onReady={{@controller.handleAnimationReady}}
        />
      </div>

      <Timer
        @duration={{10000}}
        @series={{@controller.currentLevel}}
        @onReady={{@controller.handleTimerReady}}
        @onComplete={{@controller.handleTimerComplete}}
      />

      <div class="main-controls">
        {{#if @controller.isRunning}}
          {{#if @controller.isPaused}}
            <Button @onClick={{@controller.start}}>
              <FaIcon @icon={{faPlay}} />
              Resume
            </Button>
          {{else}}
            <Button @onClick={{@controller.pause}}>
              <FaIcon @icon={{faPause}} />
              Pause
            </Button>
          {{/if}}
        {{else}}
          <Button @onClick={{@controller.start}}>
            <FaIcon @icon={{faPlay}} />
            Start
          </Button>
        {{/if}}

        <Button @onClick={{@controller.stop}}>
          <FaIcon @icon={{faStop}} />
          Stop
        </Button>
      </div>
    </div>
  </template>,
);
