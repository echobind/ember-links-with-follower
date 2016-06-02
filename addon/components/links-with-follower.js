import Ember from 'ember';
import layout from '../templates/components/links-with-follower';
import { scheduleOnce } from 'ember-runloop';
import { isEmpty } from 'ember-utils';
import { assert } from 'ember-metal/utils';
import { A as emberArray } from 'ember-array/utils';
import jQuery from 'jquery';
import getOwner from 'ember-getowner-polyfill';

export default Ember.Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['links-with-follower'],

  /**
   * Tag name to use for the link list parent element.
   *
   * @property listSelector
   * @type {String}
   * @default 'ul'
   */
  listSelector: 'ul',

  /**
   * Tag name to use for the follower. It is expected to match items passed
   * in via the block.
   *
   * @property childSelector
   * @type {String}
   * @default 'li'
   */
  childSelector: 'li',

  /**
   * The selector used to consider a link active.
   *
   * @property activeSelector
   * @type {String}
   * @default 'li.active'
   */
  activeSelector: 'li.active',

  /**
   * The duration used to animate the follower link.
   *
   * @property followerAnimationDuration
   * @type {Number}
   * @default 150
   */
  followerAnimationDuration: 150,

  /**
   * Where to position the follower. Not yet used.
   *
   * @property followerPosition
   * @type {String}
   * @default 'bottom'
   */
  followerPosition: 'bottom', // TODO: support top, bottom, both

  init() {
    this._super(...arguments);
    this.router = getOwner(this).lookup('router:main');
    Ember.addObserver(this.router, 'currentPath', this, this._queueMoveFollower);
  },

  didInsertElement() {
    this._super(...arguments);

    this._assertChildrenMatchSelector();
    this._moveFollower(false);
  },

  willDestroy() {
    this._super(...arguments);
    Ember.removeObserver(this.router, 'currentPath', this, this._moveFollower);
    this.router = null;
  },

  /**
   * Asserts that children passed in via block match the provided childSelector
   * property.
   *
   * @private
   */
  _assertChildrenMatchSelector() {
    let listSelector = this.get('listSelector');
    let childSelector = this.get('childSelector');
    let children = emberArray(this.$(`${listSelector}`).children().toArray());
    let childrenMatch = children.every((c) => jQuery(c).is(childSelector));

    assert(`children in block must match the 'childSelector' property`, childrenMatch);
  },

  /**
   * Queues moving of a follower.
   * @private
   */
  _queueMoveFollower() {
    scheduleOnce('afterRender', this, this._moveFollower);
  },

  /**
   * Moves and resizes the link follower to match the currently active link.
   *
   * @param  {Boolean} animate=true If the follower should animate
   * @private
   */
  _moveFollower(animate=true) {
    let width = this._widthOfActiveLink();
    let left = this._leftPositionOfActiveLink();
    let shouldHideFollower = isEmpty(width) || isEmpty(left);

    this._hideFollower(shouldHideFollower);
    this._animateFollower(animate, { width, left });
  },

  /**
   * Shows or hides the follower link.
   *
   * @param  {Boolean} shouldHideFollower=true If the follower should animate
   * @private
   */
  _hideFollower(shouldHideFollower=true) {
    let follower = this.$('.link-follower');

    if (shouldHideFollower) {
      follower.hide();

      Ember.warn('No active link found. Hiding follower', false, {
        id: 'ember-debug.links-with-follower-no-active'
      });
    } else {
      follower.show();
    }
  },

  /**
   * Animates a follower to its final width / position.
   *
   * @param  {Boolean} animate=true If the follower should animate or not
   * @param  {Object} options={}    Animate options passed to velocity or jQuery
   * @private
   */
  _animateFollower(animate=true, options={}) {
    let follower = this.$('.link-follower');

    if (animate) {
      if (follower.velocity) {
        follower.velocity(options, this.get('followerAnimationDuration'));
      } else {
        follower.animate(options, this.get('followerAnimationDuration'));
      }
    } else {
      follower.css(options);
    }
  },

  /**
   * Gets the width of the active link.
   *
   * @return {Number} The width including margins/padding
   * @private
   */
  _widthOfActiveLink() {
    let activeLink = this._activeLink();

    return activeLink.outerWidth(true);
  },

  /**
   * Gets the left position of the active link.
   *
   * @return {Number} The left position or 0 if it cannot be determined
   * @private
   */
  _leftPositionOfActiveLink() {
    let activeLink = this._activeLink();
    let offset = activeLink.position() || { left: 0 };

    return offset.left;
  },

  /**
   * Gets the active link based on `activeSelector`.
   *
   * @return {Object} The results of the jQuery selector
   * @private
   */
  _activeLink() {
    let activeSelector = this.get('activeSelector');
    return this.$(activeSelector);
  }
});
