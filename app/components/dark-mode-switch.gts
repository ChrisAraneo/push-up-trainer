import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import Switch from './switch';
import Text from './text';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { isUndefined } from 'lodash';

interface DarkModeSwitchSignature {
  Args: {};
}

export default class DarkModeSwitchComponent extends Component<DarkModeSwitchSignature> {
  @tracked isDarkMode = false;

  constructor(owner: unknown, args: DarkModeSwitchSignature['Args']) {
    super(owner, args);

    this.initializeDarkMode();
  }

  @action
  toggleDarkMode(checked: boolean) {
    this.isDarkMode = checked;

    if (!isUndefined(document)) {
      localStorage.setItem('darkMode', String(checked));
    }

    this.toggleBodyClass();
  }

  private initializeDarkMode() {
    if (isUndefined(window)) {
      return;
    }

    const stored: string | null = localStorage.getItem('darkMode');

    if (stored === null) {
      this.isDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
    } else {
      this.isDarkMode = String(stored) === 'true';
    }

    this.toggleBodyClass();
  }

  private toggleBodyClass() {
    if (isUndefined(document)) {
      return;
    }

    const body = document.body;

    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  <template>
    <div class="dark-mode-switch">
      <Text><FaIcon @icon={{faSun}} /></Text>
      <Switch @checked={{this.isDarkMode}} @onChange={{this.toggleDarkMode}} />
      <Text><FaIcon @icon={{faMoon}} /></Text>
    </div>
  </template>
}
