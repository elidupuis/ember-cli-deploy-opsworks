var AWS        = require('aws-sdk');
var CoreObject = require('core-object');
var Promise    = require('ember-cli/lib/ext/promise');
var fs         = require('fs');
var path       = require('path');

module.exports = CoreObject.extend({
  init: function(options) {
    this._super();
    var plugin = options.plugin;
    var config = plugin.pluginConfig;

    this._plugin = plugin;
    this._client = plugin.readConfig('s3Client') || new AWS.OpsWorks(config);
  },

  activate: function(options) {
    var plugin            = this._plugin;
    var client            = this._client;
    var stackId           = options.stackId;
    var appId             = options.appId;
    var region            = options.region;
    var comment           = options.comment;
    var createDeployment  = Promise.denodeify(client.createDeployment.bind(client));

    var params = {
      Command: { /* required */
        Name: 'deploy', /* required */
      },
      StackId: stackId, /* required */
      AppId: appId,
      Comment: comment || ''
    };

    plugin.log('triggering OpsWorks deployment');

    return createDeployment(params)
      .then(function(data) {
        var opsworksDeploymentID = data.DeploymentId;

        plugin.log('✔ DeploymentId: ' + opsworksDeploymentID);
        return {
          opsworksDeploymentID: opsworksDeploymentID
        };
      })
      .catch(function(err) {
        throw new Error(err.stack);
      });
  }
});
