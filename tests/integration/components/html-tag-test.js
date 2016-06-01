/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'html-tag',
  'Integration: HtmlTagComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#html-tag}}
      //     template content
      //   {{/html-tag}}
      // `);

      this.render(hbs`{{html-tag}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
