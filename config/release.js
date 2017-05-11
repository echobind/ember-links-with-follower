/* eslint-env node */
var execSync = require('child_process').execSync;

module.exports = {
  publish: true,
  beforeCommit: function(project, versions) {
    // generate changelog
    runCommand('github_changelog_generator --simple-list --future-release='+versions.next);
  },

  afterPublish: function(project, versions) {
    // Publish dummy app with docs to gh-pages
    runCommand('ember github-pages:commit --message "Released ' + versions.next + '"');
    runCommand('git push origin gh-pages:gh-pages');
  }
};

function runCommand(command) {
  console.log('running: ' + command);
  var output = execSync(command, { encoding: 'utf8' });
  console.log(output);
}
