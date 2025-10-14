import pageTitle from 'ember-page-title/helpers/page-title';
import Route from 'ember-route-template';
import { Title } from '../components/title';
import PushUpAnimation from '../components/push-up-animation';
import Timer from '../components/timer';
import DifficultySelector from '../components/difficulty-selector';
import Controls from '../components/controls';

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

      <Controls
        @isRunning={{@controller.isRunning}}
        @isPaused={{@controller.isPaused}}
        @onStart={{@controller.start}}
        @onPause={{@controller.pause}}
        @onStop={{@controller.stop}}
      />
    </div>
  </template>,
);
