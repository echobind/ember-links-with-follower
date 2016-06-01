/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import {
  beforeEach,
  describe
} from 'mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'links-with-follower',
  'Integration: LinksWithFollowerComponent',
  {
    integration: true
  },
  function() {
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
          {{#links-with-follower listSelector='ol'}}
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
          {{#links-with-follower childSelector='div'}}
            <div>one</div>
          {{/links-with-follower}}
        `);
      });

      it('renders the proper tag', function() {
        expect(this.$('div')).to.have.length(2);
      });
    });

    describe('block children and childSelector dont match', function() {
      it('throws an error', function() {
        expect(() => {
          this.render(hbs`
            {{#links-with-follower childSelector='div'}}
              <li>one</li>
            {{/links-with-follower}}
          `);
        }).to.throw(/children in block must match the 'childSelector' property/);
      });
    });

    describe('clicking a link', function() {
      it('moves follower to the active link position')
      it('changes width of follower to width of active link');
    });

    describe('no active link', function() {
      it('hides the follower');
    });
  }
);
