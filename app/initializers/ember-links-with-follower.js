import ENV from '../config/environment';
import Configuration from 'ember-links-with-follower/configuration';

export function initialize() {
  const config = ENV['ember-links-with-follower'] || {};
  Configuration.load(config);
}

export default {
  name: 'ember-links-with-follower',
  initialize
};
