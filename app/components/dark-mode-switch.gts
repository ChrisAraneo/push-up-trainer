import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import Switch from './switch';
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

    if (isUndefined(window)) {
      this.isDarkMode = String(localStorage.getItem('darkMode')) === 'true';

      this.toggleBodyClass();
    }
  }

  @action
  toggleDarkMode(checked: boolean) {
    this.isDarkMode = checked;

    if (isUndefined(document)) {
      localStorage.setItem('darkMode', String(checked));
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
      <FaIcon @icon={{faSun}} />
      <Switch @checked={{this.isDarkMode}} @onChange={{this.toggleDarkMode}} />
      <FaIcon @icon={{faMoon}} />
    </div>
  </template>
}
