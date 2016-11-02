import Ember from 'ember';

const { getWithDefault, typeOf } = Ember;

const DEFAULTS = {
  followerAnimationDuration: 150
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
