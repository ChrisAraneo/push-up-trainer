'use strict';



;define("push-up-helper/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "push-up-helper/config/environment", "push-up-helper/font-awesome", "@embroider/macros/es-compat2"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment, _fontAwesome, _esCompat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"push-up-helper/config/environment",0,"@embroider/macros",0,"push-up-helper/font-awesome",0,"./deprecation-workflow"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  {
    (0, _esCompat.default)(require("push-up-helper/deprecation-workflow"));
  }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("push-up-helper/components/button", ["exports", "@ember/modifier", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _modifier, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.Button = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/modifier",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const Button = _exports.Button = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    
    <button
      type="button"
      class="btn"
      disabled={{@disabled}}
      {{on "click" @onClick}}
    >
      {{yield}}
    </button>
  
  */
  {
    "id": "AhXdCVEN",
    "block": "[[[1,\"\\n  \"],[11,\"button\"],[24,0,\"btn\"],[16,\"disabled\",[30,1]],[24,4,\"button\"],[4,[32,0],[\"click\",[30,2]],null],[12],[1,\"\\n    \"],[18,3,null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[\"@disabled\",\"@onClick\",\"&default\"],[\"yield\"]]",
    "moduleName": "C:\\Users\\chris\\Documents\\push-up-trainer\\push-up-helper\\components\\button.ts",
    "scope": () => [_modifier.on],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "button:Button"));
  var _default = _exports.default = Button;
});
;define("push-up-helper/components/circular-progress", ["exports", "@glimmer/component", "@ember/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _CircularProgressComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  const DEFAULT_SIZE = 200;
  const DEFAULT_STROKE_WIDTH = 8;
  const CIRCLE_RADIUS = 90;
  const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
  class CircularProgressComponent extends _component.default {
    get size() {
      return this.args.size || DEFAULT_SIZE;
    }
    get strokeWidth() {
      return this.args.strokeWidth || DEFAULT_STROKE_WIDTH;
    }
    get backgroundStroke() {
      return this.args.backgroundStroke || 'rgba(210,210,210,0.7)';
    }
    get progressStroke() {
      return this.args.progressStroke || '#00A3EF';
    }
    get radius() {
      return CIRCLE_RADIUS;
    }
    get circumference() {
      return CIRCUMFERENCE;
    }
    get strokeDashoffset() {
      return this.circumference - this.args.progress / 100 * this.circumference;
    }
    get center() {
      return this.size / 2;
    }
    get viewBox() {
      return `0 0 ${this.size} ${this.size}`;
    }
  }
  _exports.default = CircularProgressComponent;
  _CircularProgressComponent = CircularProgressComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    
      <div class="circular-progress">
        <svg width={{this.size}} height={{this.size}} viewBox={{this.viewBox}}>
          <circle
            cx={{this.center}}
            cy={{this.center}}
            r={{this.radius}}
            fill="transparent"
            stroke={{this.backgroundStroke}}
            stroke-width={{this.strokeWidth}}
          />
          <circle
            cx={{this.center}}
            cy={{this.center}}
            r={{this.radius}}
            fill="transparent"
            stroke={{this.progressStroke}}
            stroke-width={{this.strokeWidth}}
            stroke-linecap="round"
            stroke-dasharray={{this.circumference}}
            stroke-dashoffset={{this.strokeDashoffset}}
            transform="rotate(-90 {{this.center}} {{this.center}})"
            class="progress-circle"
          />
        </svg>
        <div class="circular-progress-content">
          {{yield}}
        </div>
      </div>
    
  */
  {
    "id": "nJ+/j89e",
    "block": "[[[1,\"\\n    \"],[10,0],[14,0,\"circular-progress\"],[12],[1,\"\\n      \"],[10,\"svg\"],[15,\"width\",[30,0,[\"size\"]]],[15,\"height\",[30,0,[\"size\"]]],[15,\"viewBox\",[30,0,[\"viewBox\"]]],[12],[1,\"\\n        \"],[10,\"circle\"],[15,\"cx\",[30,0,[\"center\"]]],[15,\"cy\",[30,0,[\"center\"]]],[15,\"r\",[30,0,[\"radius\"]]],[14,\"fill\",\"transparent\"],[15,\"stroke\",[30,0,[\"backgroundStroke\"]]],[15,\"stroke-width\",[30,0,[\"strokeWidth\"]]],[12],[13],[1,\"\\n        \"],[10,\"circle\"],[15,\"cx\",[30,0,[\"center\"]]],[15,\"cy\",[30,0,[\"center\"]]],[15,\"r\",[30,0,[\"radius\"]]],[14,\"fill\",\"transparent\"],[15,\"stroke\",[30,0,[\"progressStroke\"]]],[15,\"stroke-width\",[30,0,[\"strokeWidth\"]]],[14,\"stroke-linecap\",\"round\"],[15,\"stroke-dasharray\",[30,0,[\"circumference\"]]],[15,\"stroke-dashoffset\",[30,0,[\"strokeDashoffset\"]]],[15,\"transform\",[29,[\"rotate(-90 \",[30,0,[\"center\"]],\" \",[30,0,[\"center\"]],\")\"]]],[14,0,\"progress-circle\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"circular-progress-content\"],[12],[1,\"\\n        \"],[18,1,null],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[\"&default\"],[\"yield\"]]",
    "moduleName": "C:\\Users\\chris\\Documents\\push-up-trainer\\push-up-helper\\components\\circular-progress.ts",
    "isStrictMode": true
  }), _CircularProgressComponent);
});
;define("push-up-helper/components/difficulty-selector", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "push-up-helper/components/text", "push-up-helper/components/button", "push-up-helper/consts", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _text, _button, _consts, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _DifficultySelectorComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"push-up-helper/components/text",0,"push-up-helper/components/button",0,"push-up-helper/consts",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let DifficultySelectorComponent = _exports.default = (_class = (_DifficultySelectorComponent = class DifficultySelectorComponent extends _component.default {
    constructor(owner, args) {
      super(owner, args);
      _initializerDefineProperty(this, "currentLevel", _descriptor, this);
      this.currentLevel = this.args.initialLevel || _consts.MIN_LEVEL;
    }
    get canDecrease() {
      return this.currentLevel > _consts.MIN_LEVEL;
    }
    get canIncrease() {
      return this.currentLevel < _consts.MAX_LEVEL;
    }
    get cannotDecrease() {
      return !this.canDecrease;
    }
    get cannotIncrease() {
      return !this.canIncrease;
    }
    decreaseLevel() {
      if (this.canDecrease) {
        this.currentLevel--;
        this.args.onLevelChange?.(this.currentLevel);
      }
    }
    increaseLevel() {
      if (this.canIncrease) {
        this.currentLevel++;
        this.args.onLevelChange?.(this.currentLevel);
      }
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    
      <div class="difficulty-selector">
        <Button @onClick={{this.decreaseLevel}} @disabled={{this.cannotDecrease}}>
          -
        </Button>
        <Text>Level {{this.currentLevel}}</Text>
        <Text>{{this.currentLevel}} × 5</Text>
        <Button @onClick={{this.increaseLevel}} @disabled={{this.cannotIncrease}}>
          +
        </Button>
      </div>
    
  */
  {
    "id": "JONEAHal",
    "block": "[[[1,\"\\n    \"],[10,0],[14,0,\"difficulty-selector\"],[12],[1,\"\\n      \"],[8,[32,0],null,[[\"@onClick\",\"@disabled\"],[[30,0,[\"decreaseLevel\"]],[30,0,[\"cannotDecrease\"]]]],[[\"default\"],[[[[1,\"\\n        -\\n      \"]],[]]]]],[1,\"\\n      \"],[8,[32,1],null,null,[[\"default\"],[[[[1,\"Level \"],[1,[30,0,[\"currentLevel\"]]]],[]]]]],[1,\"\\n      \"],[8,[32,1],null,null,[[\"default\"],[[[[1,[30,0,[\"currentLevel\"]]],[1,\" × 5\"]],[]]]]],[1,\"\\n      \"],[8,[32,0],null,[[\"@onClick\",\"@disabled\"],[[30,0,[\"increaseLevel\"]],[30,0,[\"cannotIncrease\"]]]],[[\"default\"],[[[[1,\"\\n        +\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[],[]]",
    "moduleName": "C:\\Users\\chris\\Documents\\push-up-trainer\\push-up-helper\\components\\difficulty-selector.ts",
    "scope": () => [_button.default, _text.default],
    "isStrictMode": true
  }), _DifficultySelectorComponent), _DifficultySelectorComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "currentLevel", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "decreaseLevel", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "decreaseLevel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "increaseLevel", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "increaseLevel"), _class.prototype), _class);
});
;define("push-up-helper/components/fa-icon", ["exports", "@fortawesome/ember-fontawesome/components/fa-icon"], function (_exports, _faIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@fortawesome/ember-fontawesome/components/fa-icon"eaimeta@70e063a35619d71f
});
;define("push-up-helper/components/push-up-animation", ["exports", "@glimmer/component", "push-up-helper/modifiers/lottie-animation", "lodash", "@glimmer/tracking", "@ember/object", "@ember/component", "@ember/template-factory"], function (_exports, _component, _lottieAnimation, _lodash, _tracking, _object, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.PUSH_UP_ANIMATION_DURATION_MS = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _PushUpAnimationComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"push-up-helper/modifiers/lottie-animation",0,"lodash",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const PUSH_UP_ANIMATION_DURATION_MS = _exports.PUSH_UP_ANIMATION_DURATION_MS = 2650; // TODO To be fixed
  let PushUpAnimationComponent = _exports.default = (_class = (_PushUpAnimationComponent = class PushUpAnimationComponent extends _component.default {
    constructor(owner, args) {
      super(owner, args);
      _initializerDefineProperty(this, "animation", _descriptor, this);
      _initializerDefineProperty(this, "isPlaying", _descriptor2, this);
      _initializerDefineProperty(this, "remainingIterations", _descriptor3, this);
      _initializerDefineProperty(this, "initialIterations", _descriptor4, this);
      _initializerDefineProperty(this, "isComplete", _descriptor5, this);
      _defineProperty(this, "iterationTimeoutId", null);
      _defineProperty(this, "iterationStartTime", null);
      _defineProperty(this, "iterationRemainingTime", null);
      this.initializeIterations();
    }
    initializeIterations() {
      if ((0, _lodash.isNumber)(this.args.iterations) && this.args.iterations > 0) {
        this.initialIterations = this.args.iterations;
        this.remainingIterations = this.args.iterations;
        this.isComplete = false;
      } else {
        this.initialIterations = null;
        this.remainingIterations = null;
        this.isComplete = false;
      }
    }
    get speed() {
      const {
        duration
      } = this.args;
      if ((0, _lodash.isNumber)(duration) && duration > 0) {
        return PUSH_UP_ANIMATION_DURATION_MS / duration;
      }
      return 1.0;
    }
    get duration() {
      return this.args.duration || PUSH_UP_ANIMATION_DURATION_MS;
    }
    startIterationTimer() {
      if (this.remainingIterations !== null && this.remainingIterations > 0) {
        const timeToWait = this.iterationRemainingTime || this.duration;
        this.iterationStartTime = Date.now();
        this.iterationRemainingTime = null;
        this.iterationTimeoutId = window.setTimeout(() => {
          this.handleIterationComplete();
        }, timeToWait);
      }
    }
    pauseIterationTimer() {
      if (this.iterationTimeoutId && this.iterationStartTime) {
        const elapsed = Date.now() - this.iterationStartTime;
        const totalTime = this.iterationRemainingTime || this.duration;
        this.iterationRemainingTime = Math.max(0, totalTime - elapsed);
        clearTimeout(this.iterationTimeoutId);
        this.iterationTimeoutId = null;
        this.iterationStartTime = null;
      }
    }
    clearIterationTimer() {
      if (this.iterationTimeoutId) {
        clearTimeout(this.iterationTimeoutId);
        this.iterationTimeoutId = null;
      }
      this.iterationStartTime = null;
      this.iterationRemainingTime = null;
    }
    handleIterationComplete() {
      if (this.remainingIterations !== null && this.remainingIterations > 0) {
        this.remainingIterations--;
        if (this.remainingIterations === 0) {
          this.isPlaying = false;
          this.isComplete = true;
          if (this.animation) {
            this.animation.stop();
          }
          this.args.onComplete?.();
        } else {
          this.startIterationTimer();
        }
      }
    }
    handleAnimationReady(animation) {
      this.animation = animation;
      animation.addEventListener('loopComplete', () => {
        if (this.isComplete) {
          animation.stop();
        }
      });
      if ((0, _lodash.isFunction)(this.args.onReady)) {
        this.args.onReady({
          play: this.play.bind(this),
          pause: this.pause.bind(this),
          stop: this.stop.bind(this),
          reset: this.reset.bind(this)
        });
      }
    }
    play() {
      if (this.isComplete) {
        return;
      }
      if (this.animation && !this.isPlaying) {
        this.animation.play();
        this.isPlaying = true;
        if (this.remainingIterations !== null) {
          this.startIterationTimer();
        }
      }
    }
    pause() {
      if (this.animation && this.isPlaying) {
        this.animation.pause();
        this.isPlaying = false;
        this.pauseIterationTimer();
      }
    }
    stop() {
      if (this.animation) {
        this.animation.stop();
        this.isPlaying = false;
      }
      this.clearIterationTimer();
    }
    reset() {
      this.clearIterationTimer();
      this.initializeIterations();
      if (this.animation) {
        this.animation.stop();
        this.isPlaying = false;
      }
      this.args.onReset?.();
    }
    willDestroy() {
      super.willDestroy();
      this.clearIterationTimer();
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    
      <div
        class="push-up-animation"
        {{lottieAnimation
          path="animations/push-ups.json"
          renderer="svg"
          loop=true
          autoplay=false
          speed=this.speed
          onReady=this.handleAnimationReady
        }}
      ></div>
    
  */
  {
    "id": "pEmaejBW",
    "block": "[[[1,\"\\n    \"],[11,0],[24,0,\"push-up-animation\"],[4,[32,0],null,[[\"path\",\"renderer\",\"loop\",\"autoplay\",\"speed\",\"onReady\"],[\"animations/push-ups.json\",\"svg\",true,false,[30,0,[\"speed\"]],[30,0,[\"handleAnimationReady\"]]]]],[12],[13],[1,\"\\n  \"]],[],[]]",
    "moduleName": "C:\\Users\\chris\\Documents\\push-up-trainer\\push-up-helper\\components\\push-up-animation.ts",
    "scope": () => [_lottieAnimation.default],
    "isStrictMode": true
  }), _PushUpAnimationComponent), _PushUpAnimationComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "animation", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isPlaying", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "remainingIterations", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "initialIterations", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "isComplete", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleIterationComplete", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleIterationComplete"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleAnimationReady", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleAnimationReady"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "play", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "play"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pause", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "pause"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stop", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "stop"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "reset", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "reset"), _class.prototype), _class);
});
;define("push-up-helper/components/text", ["exports", "@glimmer/component", "@ember/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.Text = void 0;
  var _TextComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class TextComponent extends _component.default {
    get cssClasses() {
      const classes = ['text'];
      if (this.args.light) {
        classes.push('text--light');
      } else {
        classes.push('text--normal');
      }
      if (this.args.monospace) {
        classes.push('text--monospace');
      }
      return classes.join(' ');
    }
  }
  _exports.Text = _exports.default = TextComponent;
  _TextComponent = TextComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    
      <span class={{this.cssClasses}}>{{yield}}</span>
    
  */
  {
    "id": "w2lQTAym",
    "block": "[[[1,\"\\n    \"],[10,1],[15,0,[30,0,[\"cssClasses\"]]],[12],[18,1,null],[13],[1,\"\\n  \"]],[\"&default\"],[\"yield\"]]",
    "moduleName": "C:\\Users\\chris\\Documents\\push-up-trainer\\push-up-helper\\components\\text.ts",
    "isStrictMode": true
  }), _TextComponent);
});
;define("push-up-helper/components/timer", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "push-up-helper/components/circular-progress", "push-up-helper/utils/sound-player", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _circularProgress, _soundPlayer, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _TimerComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"push-up-helper/components/circular-progress",0,"push-up-helper/utils/sound-player",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const DEFAULT_DURATION_MS = 30000;
  const INTERVAL_UPDATE_MS = 5;
  const SECOND_MS = 1000;
  const SOUND_PATH = '/sounds/sound.wav';
  let TimerComponent = _exports.default = (_class = (_TimerComponent = class TimerComponent extends _component.default {
    constructor(owner, args) {
      super(owner, args);
      _initializerDefineProperty(this, "remainingTime", _descriptor, this);
      _initializerDefineProperty(this, "isRunning", _descriptor2, this);
      _initializerDefineProperty(this, "isPaused", _descriptor3, this);
      _initializerDefineProperty(this, "currentSeries", _descriptor4, this);
      _defineProperty(this, "intervalId", null);
      _defineProperty(this, "startTime", 0);
      _defineProperty(this, "pausedTime", 0);
      this.remainingTime = this.duration;
      this.currentSeries = 0;
      _soundPlayer.soundPlayer.load(SOUND_PATH);
      if (!this.args.onReady) {
        return;
      }
      this.args.onReady({
        start: this.start.bind(this),
        pause: this.pause.bind(this),
        reset: this.reset.bind(this)
      });
    }
    get duration() {
      return this.args.duration || DEFAULT_DURATION_MS;
    }
    get totalSeries() {
      return this.args.series || 1;
    }
    get seconds() {
      return Math.floor(this.remainingTime / SECOND_MS);
    }
    get milliseconds() {
      return Math.floor(this.remainingTime % SECOND_MS / 10);
    }
    get progressPercentage() {
      return (this.duration - this.remainingTime) / this.duration * 100;
    }
    get formattedTime() {
      return {
        seconds: this.seconds.toString().padStart(2, '0'),
        milliseconds: this.milliseconds.toString().padStart(2, '0')
      };
    }
    get seriesDisplay() {
      return `${this.currentSeries}/${this.totalSeries}`;
    }
    get showSeries() {
      return this.totalSeries > 1;
    }
    start() {
      if (this.isRunning && !this.isPaused) {
        return;
      }
      if (this.currentSeries >= this.totalSeries) {
        this.reset();
      }
      this.isRunning = true;
      this.isPaused = false;
      this.startTime = Date.now() - (this.duration - this.remainingTime);
      this.intervalId = window.setInterval(() => {
        const elapsed = Date.now() - this.startTime;
        this.remainingTime = Math.max(0, this.duration - elapsed);
        this.args.onTick?.(this.remainingTime);
        if (this.remainingTime <= 0) {
          this.complete();
        }
      }, INTERVAL_UPDATE_MS);
    }
    pause() {
      if (!this.isRunning || this.isPaused) return;
      this.isPaused = true;
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
    reset() {
      this.isRunning = false;
      this.isPaused = false;
      this.remainingTime = this.duration;
      this.currentSeries = 0;
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
    complete() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      _soundPlayer.soundPlayer.play(SOUND_PATH);
      this.currentSeries++;
      const areAllSeriesComplete = this.currentSeries >= this.totalSeries;
      this.args.onComplete?.(areAllSeriesComplete);
      if (this.currentSeries < this.totalSeries) {
        this.remainingTime = this.duration;
        this.startTime = Date.now();
        this.intervalId = window.setInterval(() => {
          const elapsed = Date.now() - this.startTime;
          this.remainingTime = Math.max(0, this.duration - elapsed);
          this.args.onTick?.(this.remainingTime);
          if (this.remainingTime <= 0) {
            this.complete();
          }
        }, INTERVAL_UPDATE_MS);
      } else {
        this.isRunning = false;
        this.isPaused = false;
        this.remainingTime = 0;
      }
    }
    willDestroy() {
      super.willDestroy();
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    
      <div class="timer-component">
        <CircularProgress @progress={{this.progressPercentage}}>
          <div class="timer-display">
            {{#if this.showSeries}}
              <div class="series-counter">{{this.seriesDisplay}}</div>
            {{/if}}
            <div class="time-container">
              <span
                class="seconds"
              >{{this.formattedTime.seconds}}:{{this.formattedTime.milliseconds}}</span>
            </div>
          </div>
        </CircularProgress>
      </div>
    
  */
  {
    "id": "Z8PjGlN6",
    "block": "[[[1,\"\\n    \"],[10,0],[14,0,\"timer-component\"],[12],[1,\"\\n      \"],[8,[32,0],null,[[\"@progress\"],[[30,0,[\"progressPercentage\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"timer-display\"],[12],[1,\"\\n\"],[41,[30,0,[\"showSeries\"]],[[[1,\"            \"],[10,0],[14,0,\"series-counter\"],[12],[1,[30,0,[\"seriesDisplay\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"          \"],[10,0],[14,0,\"time-container\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"seconds\"],[12],[1,[30,0,[\"formattedTime\",\"seconds\"]]],[1,\":\"],[1,[30,0,[\"formattedTime\",\"milliseconds\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[],[\"if\"]]",
    "moduleName": "C:\\Users\\chris\\Documents\\push-up-trainer\\push-up-helper\\components\\timer.ts",
    "scope": () => [_circularProgress.default],
    "isStrictMode": true
  }), _TimerComponent), _TimerComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "remainingTime", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isRunning", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isPaused", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "currentSeries", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "start", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "start"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pause", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "pause"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "reset", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "reset"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "complete", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "complete"), _class.prototype), _class);
});
;define("push-up-helper/components/title", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.Title = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const Title = _exports.Title = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    
    <h1 class="title">{{yield}}</h1>
  
  */
  {
    "id": "S6oUza0b",
    "block": "[[[1,\"\\n  \"],[10,\"h1\"],[14,0,\"title\"],[12],[18,1,null],[13],[1,\"\\n\"]],[\"&default\"],[\"yield\"]]",
    "moduleName": "C:\\Users\\chris\\Documents\\push-up-trainer\\push-up-helper\\components\\title.ts",
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "title:Title"));
  var _default = _exports.default = Title;
});
;define("push-up-helper/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("push-up-helper/consts", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.MIN_LEVEL = _exports.MAX_LEVEL = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  const MIN_LEVEL = _exports.MIN_LEVEL = 1;
  const MAX_LEVEL = _exports.MAX_LEVEL = 99;
});
;define("push-up-helper/controllers/application", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object", "push-up-helper/consts"], function (_exports, _controller, _tracking, _object, _consts) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object",0,"push-up-helper/consts"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const STORAGE_KEY = 'push-up-trainer-level';
  const DEFAULT_LEVEL = _consts.MIN_LEVEL;
  let ApplicationController = _exports.default = (_class = class ApplicationController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "timerControls", _descriptor, this);
      _initializerDefineProperty(this, "animationControls", _descriptor2, this);
      _initializerDefineProperty(this, "isRunning", _descriptor3, this);
      _initializerDefineProperty(this, "isPaused", _descriptor4, this);
      _initializerDefineProperty(this, "currentLevel", _descriptor5, this);
    }
    handleTimerReady(controls) {
      this.timerControls = controls;
    }
    handleAnimationReady(controls) {
      this.animationControls = controls;
    }
    start() {
      if (!this.timerControls || !this.animationControls) {
        return;
      }
      this.timerControls.start();
      this.animationControls.play();
      this.isRunning = true;
      this.isPaused = false;
    }
    pause() {
      if (!this.timerControls || !this.animationControls) {
        return;
      }
      if (!this.isRunning) {
        return;
      }
      this.timerControls.pause();
      this.animationControls.pause();
      this.isPaused = true;
    }
    stop() {
      if (!this.timerControls || !this.animationControls) {
        return;
      }
      this.timerControls.reset();
      this.animationControls.stop();
      this.isRunning = false;
      this.isPaused = false;
    }
    handleTimerComplete(areAllSeriesComplete) {
      if (this.animationControls) {
        this.animationControls.reset();
        if (!areAllSeriesComplete) {
          this.animationControls.play();
        }
      }
      if (areAllSeriesComplete) {
        this.isRunning = false;
        this.isPaused = false;
      }
    }
    handleLevelChange(level) {
      this.currentLevel = level;
      this.saveLevelToStorage(level);
      if (this.timerControls && this.animationControls) {
        this.timerControls.reset();
        this.animationControls.stop();
        this.animationControls.reset();
        this.isRunning = false;
        this.isPaused = false;
      }
    }
    loadLevelFromStorage() {
      let level = null;
      try {
        const value = Number(localStorage.getItem(STORAGE_KEY));
        if (!isNaN(value) && value >= _consts.MIN_LEVEL && value <= _consts.MAX_LEVEL) {
          level = Math.floor(value);
        }
      } catch (error) {
        console.error('Failed to load level from local storage', error);
      }
      return level ?? DEFAULT_LEVEL;
    }
    saveLevelToStorage(level) {
      try {
        localStorage.setItem(STORAGE_KEY, level.toString());
      } catch (error) {
        console.error('Failed to save level to local storage', error);
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "timerControls", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "animationControls", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isRunning", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isPaused", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "currentLevel", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.loadLevelFromStorage();
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleTimerReady", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleTimerReady"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleAnimationReady", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleAnimationReady"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "start", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "start"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pause", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "pause"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stop", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "stop"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTimerComplete", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleTimerComplete"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleLevelChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleLevelChange"), _class.prototype), _class);
});
;define("push-up-helper/data-adapter", ["exports", "@ember-data/debug/data-adapter"], function (_exports, _dataAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/data-adapter"eaimeta@70e063a35619d71f
});
;define("push-up-helper/deprecation-workflow", ["ember-cli-deprecation-workflow"], function (_emberCliDeprecationWorkflow) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-deprecation-workflow"eaimeta@70e063a35619d71f
  /**
   * Docs: https://github.com/ember-cli/ember-cli-deprecation-workflow
   */
  (0, _emberCliDeprecationWorkflow.default)({
    /**
      false by default, but if a developer / team wants to be more aggressive about being proactive with
      handling their deprecations, this should be set to "true"
    */
    throwOnUnhandled: false,
    workflow: [
      /* ... handlers ... */
      /* to generate this list, run your app for a while (or run the test suite),
       * and then run in the browser console:
       *
       *    deprecationWorkflow.flushDeprecations()
       *
       * And copy the handlers here
       */
      /* example: */
      /* { handler: 'silence', matchId: 'template-action' }, */
    ]
  });
});
;define("push-up-helper/font-awesome", ["@fortawesome/fontawesome-svg-core", "@fortawesome/fontawesome-svg-core/styles.css"], function (_fontawesomeSvgCore, _styles) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@fortawesome/fontawesome-svg-core",0,"@fortawesome/fontawesome-svg-core/styles.css"eaimeta@70e063a35619d71f
  // This adds the basic icon styles into your app

  // Disable auto CSS import into head. It solved the side effect for jumping icon size.
  // This is required for Fastboot apps, otherwise build fails
  // It's the recommended way for setup Font Awesome in your app
  _fontawesomeSvgCore.config.autoAddCss = false;
});
;define("push-up-helper/helpers/app-version", ["exports", "@ember/component/helper", "push-up-helper/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"push-up-helper/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("push-up-helper/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("push-up-helper/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "push-up-helper/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"push-up-helper/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("push-up-helper/initializers/ember-data", ["exports", "@ember-data/request-utils/deprecation-support"], function (_exports, _deprecationSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/request-utils/deprecation-support"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("push-up-helper/interfaces/animation-controls", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
});
;define("push-up-helper/interfaces/timer-controls", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
});
;define("push-up-helper/modifiers/lottie-animation", ["exports", "ember-modifier", "lottie-web"], function (_exports, _emberModifier, _lottieWeb) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-modifier",0,"lottie-web"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _emberModifier.modifier)(function lottieAnimation(element, _, named) {
    const {
      path,
      renderer = 'svg',
      loop = true,
      autoplay = false,
      onComplete,
      onEnterFrame,
      onError,
      onReady,
      speed = 1.0,
      ...otherOptions
    } = named;
    const animation = _lottieWeb.default.loadAnimation({
      container: element,
      renderer,
      loop,
      autoplay,
      path,
      ...otherOptions
    });
    animation.setSpeed(speed);
    if (onComplete) {
      animation.addEventListener('complete', onComplete);
    }
    if (onEnterFrame) {
      animation.addEventListener('enterFrame', onEnterFrame);
    }
    animation.addEventListener('data_failed', () => {
      if (onError) {
        onError();
      }
    });
    if (onReady) {
      onReady(animation);
    }
    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  });
});
;define("push-up-helper/router", ["exports", "@ember/routing/router", "push-up-helper/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"push-up-helper/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    // Add route declarations here
  });
});
;define("push-up-helper/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("push-up-helper/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("push-up-helper/templates/application", ["exports", "ember-page-title/helpers/page-title", "ember-route-template", "push-up-helper/components/title", "push-up-helper/components/push-up-animation", "push-up-helper/components/timer", "push-up-helper/components/button", "push-up-helper/components/difficulty-selector", "@fortawesome/ember-fontawesome/components/fa-icon", "@fortawesome/free-solid-svg-icons", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _pageTitle, _emberRouteTemplate, _title, _pushUpAnimation, _timer, _button, _difficultySelector, _faIcon, _freeSolidSvgIcons, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title",0,"ember-route-template",0,"push-up-helper/components/title",0,"push-up-helper/components/push-up-animation",0,"push-up-helper/components/timer",0,"push-up-helper/components/button",0,"push-up-helper/components/difficulty-selector",0,"@fortawesome/ember-fontawesome/components/fa-icon",0,"@fortawesome/free-solid-svg-icons",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const TITLE = 'Push Up Trainer';
  var _default = _exports.default = (0, _emberRouteTemplate.default)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    
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
    
  */
  {
    "id": "wTNjFG9C",
    "block": "[[[1,\"\\n    \"],[1,[28,[32,0],[[32,1]],null]],[1,\"\\n\\n    \"],[46,[28,[31,1],null,null],null,null,null],[1,\"\\n\\n    \"],[10,0],[14,0,\"app-container\"],[12],[1,\"\\n      \"],[8,[32,2],null,null,[[\"default\"],[[[[1,[32,1]]],[]]]]],[1,\"\\n\\n      \"],[8,[32,3],null,[[\"@initialLevel\",\"@onLevelChange\"],[[30,1,[\"currentLevel\"]],[30,1,[\"handleLevelChange\"]]]],null],[1,\"\\n\\n      \"],[10,0],[14,0,\"background-animation\"],[12],[1,\"\\n        \"],[8,[32,4],null,[[\"@duration\",\"@iterations\",\"@onReady\"],[1000,5,[30,1,[\"handleAnimationReady\"]]]],null],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[8,[32,5],null,[[\"@duration\",\"@series\",\"@onReady\",\"@onComplete\"],[10000,[30,1,[\"currentLevel\"]],[30,1,[\"handleTimerReady\"]],[30,1,[\"handleTimerComplete\"]]]],null],[1,\"\\n\\n      \"],[10,0],[14,0,\"main-controls\"],[12],[1,\"\\n\"],[41,[30,1,[\"isRunning\"]],[[[41,[30,1,[\"isPaused\"]],[[[1,\"            \"],[8,[32,6],null,[[\"@onClick\"],[[30,1,[\"start\"]]]],[[\"default\"],[[[[1,\"\\n              \"],[8,[32,7],null,[[\"@icon\"],[[32,8]]],null],[1,\"\\n              Resume\\n            \"]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"            \"],[8,[32,6],null,[[\"@onClick\"],[[30,1,[\"pause\"]]]],[[\"default\"],[[[[1,\"\\n              \"],[8,[32,7],null,[[\"@icon\"],[[32,9]]],null],[1,\"\\n              Pause\\n            \"]],[]]]]],[1,\"\\n\"]],[]]]],[]],[[[1,\"          \"],[8,[32,6],null,[[\"@onClick\"],[[30,1,[\"start\"]]]],[[\"default\"],[[[[1,\"\\n            \"],[8,[32,7],null,[[\"@icon\"],[[32,8]]],null],[1,\"\\n            Start\\n          \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"\\n        \"],[8,[32,6],null,[[\"@onClick\"],[[30,1,[\"stop\"]]]],[[\"default\"],[[[[1,\"\\n          \"],[8,[32,7],null,[[\"@icon\"],[[32,10]]],null],[1,\"\\n          Stop\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[\"@controller\"],[\"component\",\"-outlet\",\"if\"]]",
    "moduleName": "C:\\Users\\chris\\Documents\\push-up-trainer\\push-up-helper\\templates\\application.ts",
    "scope": () => [_pageTitle.default, TITLE, _title.Title, _difficultySelector.default, _pushUpAnimation.default, _timer.default, _button.default, _faIcon.default, _freeSolidSvgIcons.faPlay, _freeSolidSvgIcons.faPause, _freeSolidSvgIcons.faStop],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, undefined)));
});
;define("push-up-helper/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("push-up-helper/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("push-up-helper/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("push-up-helper/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("push-up-helper/utils/sound-player", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.soundPlayer = _exports.SoundPlayer = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class SoundPlayer {
    constructor() {
      _defineProperty(this, "audios", new Map());
      _defineProperty(this, "audio", null);
    }
    load(path) {
      const audio = new Audio(path);
      audio.volume = 0.7;
      this.audios.set(path, audio);
    }
    play(path) {
      try {
        if (this.audio) {
          this.stop();
        }
        if (!this.audios.has(path)) {
          this.load(path);
        }
        this.audio = this.audios.get(path);
        const promise = this.audio.play();
        if (promise !== undefined) {
          promise.catch(error => {
            console.warn('Unable to play sound', error);
          });
        }
      } catch (error) {
        console.warn('Error loading or playing sound', error);
      }
    }
    stop() {
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.audio = null;
      }
    }
  }
  _exports.SoundPlayer = SoundPlayer;
  const soundPlayer = _exports.soundPlayer = new SoundPlayer();
});
;

;define('push-up-helper/config/environment', [], function() {
  var prefix = 'push-up-helper';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("push-up-helper/app")["default"].create({"name":"push-up-helper","version":"0.0.0+5f3ae105"});
          }
        
//# sourceMappingURL=push-up-helper.map
