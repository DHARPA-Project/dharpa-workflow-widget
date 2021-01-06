var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'dharpa-workflow-widget',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'dharpa-workflow-widget',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

