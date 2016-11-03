import Ember from 'ember';

const { getWithDefault, testing, typeOf } = Ember;

const DEFAULTS = {
  followerAnimationDuration: testing ? 0 : 150
};

export default {
  followerAnimationDuration: DEFAULTS.followerAnimationDuration,

  load(config) {
    for (let property in this) {
      if (this._hasProperty(property)) {
        this[property] = getWithDefault(config, property, DEFAULTS[property]);
      }
    }
  },

  _hasProperty(prop) {
    return this.hasOwnProperty(prop) && typeOf(this[prop]) !== 'function';
  }
};
