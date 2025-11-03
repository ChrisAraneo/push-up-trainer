import pageTitle from 'ember-page-title/helpers/page-title';
import Route from 'ember-route-template';
import { Title } from '../components/title';
import Background from '../components/background';
import PushUpAnimation from '../components/push-up-animation';
import Timer from '../components/timer';
import DifficultySelector from '../components/difficulty-selector';
import Controls from '../components/controls';
import DarkModeSwitch from '../components/dark-mode-switch';
import Text from '../components/text';

const TITLE = 'Push Up Trainer';

export default Route(
  <template>
    {{pageTitle TITLE}}

    {{outlet}}

    <div class="unsupported"><Text>Your device is not supported.</Text></div>

    <div
      class="application
        {{if @controller.isDifficultySelectorExpanded 'expanded'}}"
    >
      <Background>
        <DarkModeSwitch
          @settings={{@controller.settings}}
          @onSettingsChange={{@controller.handleSettingsChange}}
        />

        <Title>{{TITLE}}</Title>

        <DifficultySelector
          @settings={{@controller.settings}}
          @onSettingsChange={{@controller.handleSettingsChange}}
          @onToggleExpand={{@controller.handleToggleExpand}}
        />

        <div class="background-animation">
          <PushUpAnimation
            @duration={{@controller.settings.repetitionDuration}}
            @iterations={{@controller.settings.repetitionsPerSeries}}
            @onReady={{@controller.handleAnimationReady}}
            @onReset={{@controller.reset}}
          />
        </div>

        <Timer
          @settings={{@controller.settings}}
          @onReady={{@controller.handleTimerReady}}
          @onComplete={{@controller.handleTimerComplete}}
          @onCountdownStart={{@controller.handleCountdownStart}}
          @onCountdownComplete={{@controller.handleCountdownComplete}}
        />

        <Controls
          @isRunning={{@controller.isRunning}}
          @isPaused={{@controller.isPaused}}
          @isCountdownRunning={{@controller.isCountdownRunning}}
          @onStart={{@controller.start}}
          @onPause={{@controller.pause}}
          @onStop={{@controller.stop}}
        />
      </Background>
    </div>
  </template>,
);
