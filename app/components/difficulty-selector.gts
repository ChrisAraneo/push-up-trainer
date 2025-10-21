import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import Text from './text';
import Button from './button';
import {
  faPen,
  faCheck,
  faTimes,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';

interface DifficultySelectorSignature {
  Args: {
    /**
     * Trainer application settings
     */
    settings?: Settings;
    /**
     * Callback function called when settings changes
     */
    onSettingsChange?: (settings: Settings) => void;
  };
}

export default class DifficultySelectorComponent extends Component<DifficultySelectorSignature> {
  @tracked private isEditing = false;
  @tracked private isExpanded = true;
  @tracked private editTotalSeries = 0;
  @tracked private editRepetitionsPerSeries = 0;
  @tracked private editSeriesDuration = 0;

  constructor(owner: unknown, args: DifficultySelectorSignature['Args']) {
    super(owner, args);

    this.initializeEditValues();
  }

  private initializeEditValues() {
    if (this.args.settings) {
      this.editTotalSeries = this.args.settings.totalSeries;
      this.editRepetitionsPerSeries = this.args.settings.repetitionsPerSeries;
      this.editSeriesDuration = Math.floor(
        this.args.settings.seriesDuration / 1000,
      );
    }
  }

  get seriesDurationInSeconds() {
    return Math.floor(this.args.settings.seriesDuration / 1000);
  }

  @action
  handleToggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  @action
  handleEdit() {
    this.initializeEditValues();
    this.isEditing = true;
  }

  @action
  handleSave() {
    if (this.args.onSettingsChange) {
      this.args.onSettingsChange({
        totalSeries: this.editTotalSeries,
        repetitionsPerSeries: this.editRepetitionsPerSeries,
        seriesDuration: this.editSeriesDuration * 1000,
        repetitionDuration: this.args.settings?.repetitionDuration || 900,
      });
    }
    this.isEditing = false;
  }

  @action
  handleCancel() {
    this.isEditing = false;
  }

  @action
  updateTotalSeries(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    this.editTotalSeries = isNaN(value) ? 0 : Math.max(1, value);
  }

  @action
  updateRepetitionsPerSeries(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    this.editRepetitionsPerSeries = isNaN(value) ? 0 : Math.max(1, value);
  }

  @action
  updateSeriesDuration(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    this.editSeriesDuration = isNaN(value) ? 0 : Math.max(1, value);
  }

  <template>
    <div class="difficulty-selector">
      <div class="difficulty-selector-card">
        <div class="row header {{if this.isExpanded 'expanded'}}">
          <div class="difficulty-selector-title">
            <Text @light={{true}}>Training plan</Text>
          </div>
          {{#if this.isEditing}}
            <div class="buttons">
              <div class="circle-button">
                <Button @onClick={{this.handleCancel}}><FaIcon
                    @icon={{faTimes}}
                  /></Button>
              </div>
              <Button @onClick={{this.handleSave}}><FaIcon
                  @icon={{faCheck}}
                />Save</Button>
            </div>
          {{else if this.isExpanded}}
            <div class="buttons">
              <Button @onClick={{this.handleEdit}}><FaIcon
                  @icon={{faPen}}
                />Edit</Button>
              <div class="circle-button">
                <Button @onClick={{this.handleToggleExpand}}><FaIcon
                    @icon={{faChevronUp}}
                  /></Button>
              </div>
            </div>
          {{else}}
            <div class="buttons">
              <Button @onClick={{this.handleEdit}}><FaIcon
                  @icon={{faPen}}
                />Edit</Button>
              <div class="circle-button">
                <Button @onClick={{this.handleToggleExpand}}><FaIcon
                    @icon={{faChevronDown}}
                  /></Button>
              </div>
            </div>
          {{/if}}
        </div>

        {{#if this.isExpanded}}
          <div class="row">
            <Text @light={{true}}>Series</Text>
            {{#if this.isEditing}}
              <input
                type="number"
                value={{this.editTotalSeries}}
                min="1"
                aria-label="Total series"
                {{on "input" this.updateTotalSeries}}
                class="settings-input"
              />
            {{else}}
              <Text>{{@settings.totalSeries}}</Text>
            {{/if}}
          </div>

          <div class="row">
            <Text @light={{true}}>Repetitions per series</Text>
            {{#if this.isEditing}}
              <input
                type="number"
                value={{this.editRepetitionsPerSeries}}
                min="1"
                aria-label="Repetitions per series"
                {{on "input" this.updateRepetitionsPerSeries}}
                class="settings-input"
              />
            {{else}}
              <Text>{{@settings.repetitionsPerSeries}}</Text>
            {{/if}}
          </div>

          <div class="row">
            <Text @light={{true}}>Time per series</Text>
            {{#if this.isEditing}}
              <div class="input-with-unit">
                <input
                  type="number"
                  value={{this.editSeriesDuration}}
                  min="1"
                  aria-label="Time per series in seconds"
                  {{on "input" this.updateSeriesDuration}}
                  class="settings-input"
                />
                <Text>sec</Text>
              </div>
            {{else}}
              <Text>{{this.seriesDurationInSeconds}} sec</Text>
            {{/if}}
          </div>
        {{/if}}
      </div>
    </div>
  </template>
}
