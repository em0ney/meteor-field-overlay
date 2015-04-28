Package.describe({
  name: 'field-overlay',
  version: '0.0.1',
  summary: 'Simple one field overlay on screen - similar to mac spotlight search',
  // URL to the Git repository containing the source code for this package.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['fourseven:scss', 'templating'], 'client');

  api.versionsFrom('1.1.0.2');

  api.addFiles([
    'lib/field-overlay.scss',
    'lib/field-overlay.html',
    'lib/field-overlay.js'
  ], 'client');
});

