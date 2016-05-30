import Ember from 'ember';
import layout from '../templates/components/links-with-follower';
import { scheduleOnce } from 'ember-runloop';
import { isEmpty } from 'ember-utils';
import { assert } from 'ember-metal/utils';
import { A as emberArray } from 'ember-array/utils';
import jQuery from 'jquery';

export default Ember.Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['links-with-follower'],

  listSelector: 'ul',
  childSelector: 'li',
  activeSelector: 'li.active',
  followerAnimationDuration: 150,
  followerPosition: 'bottom', // TODO: support top, bottom, both

  didInsertElement() {
    this._assertChildrenMatchSelector();
    this._moveFollower(false);
    this._addClickListener();
  },

  willDestroyElement() {
    this.$().off('click');
  },

  _assertChildrenMatchSelector() {
    let listSelector = this.get('listSelector');
    let childSelector = this.get('childSelector');
    let children = emberArray(this.$(`${listSelector}`).children().toArray());
    let childrenMatch = children.every((c) => jQuery(c).is(childSelector));

    assert(`children in block must match the 'childSelector' property`, childrenMatch);
  },

  _addClickListener() {
    this.$().on('click', this.get('childSelector'), () => {
      scheduleOnce('afterRender', this, this._moveFollower);
    });
  },

  _moveFollower(animate=true) {
    let width = this._widthOfActiveTab();
    let left = this._leftPositionOfActiveTab();
    let shouldHideFollower = isEmpty(width) || isEmpty(left);

    this._hideFollower(shouldHideFollower);
    this._animateFollower(animate, { width, left });
  },

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

  _widthOfActiveTab() {
    let activeTab = this._activeLink();

    return activeTab.outerWidth(true);
  },

  _leftPositionOfActiveTab() {
    let activeTab = this._activeLink();
    let offset = activeTab.position() || { left: 0 };

    return offset.left;
  },

  _activeLink() {
    let activeSelector = this.get('activeSelector');
    return this.$(activeSelector);
  }
});
