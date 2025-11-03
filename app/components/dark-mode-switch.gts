import Component from '@glimmer/component';
import { action } from '@ember/object';
import Switch from './switch';
import Text from './text';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { isUndefined } from 'lodash';
import type { Settings } from 'push-up-trainer/interfaces/settings';

interface DarkModeSwitchSignature {
  Args: {
    /**
     * Trainer application settings
     */
    settings: Settings;
    /**
     * Callback function called when dark mode changes
     */
    onSettingsChange: (settings: Settings) => void;
  };
}

export default class DarkModeSwitchComponent extends Component<DarkModeSwitchSignature> {
  constructor(owner: unknown, args: DarkModeSwitchSignature['Args']) {
    super(owner, args);

    this.updateBodyClass();
  }

  @action
  toggleDarkMode(checked: boolean) {
    const updatedSettings: Settings = {
      ...this.args.settings,
      darkMode: checked,
    };

    this.args.onSettingsChange(updatedSettings);

    this.updateBodyClass();
  }

  private updateBodyClass() {
    const body = document?.body;

    if (isUndefined(body)) {
      return;
    }

    if (this.args.settings.darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  <template>
    <div class="dark-mode-switch">
      <Text><FaIcon @icon={{faSun}} /></Text>
      <Switch
        @checked={{@settings.darkMode}}
        @onChange={{this.toggleDarkMode}}
      />
      <Text><FaIcon @icon={{faMoon}} /></Text>
    </div>
  </template>
}
