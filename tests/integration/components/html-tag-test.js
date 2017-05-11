import { expect } from 'chai';
import { setupComponentTest } from 'ember-mocha';
import { describe, it } from 'mocha';
import hbs from 'htmlbars-inline-precompile';

describe('HtmlTagComponent', function() {
  setupComponentTest('html-tag', { integration: true });

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
});
