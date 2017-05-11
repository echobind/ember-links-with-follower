import Evented from 'ember-evented';
import run from 'ember-runloop';
import getOwner from 'ember-owner/get';
import { expect } from 'chai';
import { setupComponentTest } from 'ember-mocha';
import { beforeEach, describe, it } from 'mocha';
import hbs from 'htmlbars-inline-precompile';

describe('LinksWithFollowerComponent', function() {
  setupComponentTest('links-with-follower', { integration: true });

  describe('default usage', function() {
    beforeEach(function() {
      this.render(hbs`
        {{#links-with-follower}}
          <li>One</li>
          <li class="active"></li>
        {{/links-with-follower}}
      `);
    });

    it('adds a follower', function() {
      expect(this.$('.link-follower')).to.have.length(1);
    });

    it('defaults the follower tag to \'li\'', function() {
      expect(this.$('li.link-follower')).to.have.length(1);
    });

    it('renders the links from the block', function() {
      expect(this.$('li')).to.have.length(3);
    });
  });

  describe('allows custom tags for the list parent', function() {
    beforeEach(function() {
      this.render(hbs`
        {{#links-with-follower containerTagName='ol'}}
          <li>one</li>
        {{/links-with-follower}}
      `)
    });

    it('renders the proper tag', function() {
      expect(this.$('ol')).to.have.length(1);
    });
  });

  describe('allows custom tags for the children and follower', function() {
    beforeEach(function() {
      this.render(hbs`
        {{#links-with-follower linkTagName='div'}}
          <div>one</div>
        {{/links-with-follower}}
      `);
    });

    it('renders the proper tag', function() {
      expect(this.$('div')).to.have.length(2);
    });
  });


  // Asserting error thrown no longer works as of ember 2.11
  // TODO: Remove skip once https://github.com/emberjs/ember.js/issues/15013 is resolved.
  describe.skip('block children and childSelector dont match', function() {
    it('throws an error', function() {
      expect(() => {
        this.render(hbs`
          {{#links-with-follower linkTagName='div'}}
            <li>one</li>
          {{/links-with-follower}}
        `);
      }).to.throw(/children in block must match the 'linkTagName' property/);
    });
  });

  describe('clicking a link', function() {
    let router;

    beforeEach(function() {
      // eslint-disable-next-line no-undef
      this.register('router:main', Ember.Object.extend(Evented));

      router = this.container.lookup('router:main');

      this.render(hbs`
        {{#links-with-follower class="icon-nav"}}
          <li class="active">One</li>
          <li>Two</li>
          <li class="long">Three Four Five Six</li>
        {{/links-with-follower}}
      `);
    });

    it('moves follower to the active link position', function(done) {
      let $follower = this.$('.link-follower');

      run.next(() => {
        expect($follower.position().left).to.equal(this.$('.active').position().left);

        run(() => {
          this.$('.active').removeClass('active');
          this.$('.long').addClass('active');
          router.trigger('willTransition');
        });

        expect($follower.position().left).to.equal(this.$('.active').position().left);
        done();
      });
    });

    it('changes width of follower to width of active link', function(done) {
      let $follower = this.$('.link-follower');

      run.next(() => {
        expect($follower.outerWidth()).to.equal(this.$('.active').outerWidth());

        run(() => {
          this.$('.active').removeClass('active');
          this.$('.long').addClass('active');
          router.trigger('willTransition');
        });

        expect($follower.outerWidth()).to.equal(this.$('.active').outerWidth());

        done();
      });
    });
  });

  describe('no active link', function() {
    beforeEach(function() {
      this.render(hbs`
        {{#links-with-follower linkTagName='div'}}
          <div>one</div>
          <div>two</div>
          <div>three</div>
        {{/links-with-follower}}
      `);

      getOwner(this).lookup('router:main').trigger('willTransition');
    });

    it('hides the follower', function() {
      expect(this.$('li.link-follower').is(':visible')).not.to.be.ok;
    });
  });
});
