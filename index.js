/* jshint node: true */
'use strict';

var BasePlugin = require('ember-cli-deploy-plugin');
var S3         = require('./lib/s3');

module.exports = {
  name: 'ember-cli-deploy-opsworks',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      defaultConfig: {
        region: "us-east-1"
      },

      requiredConfig: ['appId', 'stackId'],

      activate: function(/* context */) {
        var appId       = this.readConfig('appId');
        var stackId     = this.readConfig('stackId');
        var accessKey   = this.readConfig('accessKeyId');
        var secret      = this.readConfig('secretAccessKey');
        var region      = this.readConfig('region');
        var comment     = this.readConfig('comment');

        var options = {
          appId: appId,
          stackId: stackId,
          accessKeyId: accessKey,
          secretAccessKey: secret,
          region: region,
          comment: comment
        };

        var s3 = new S3({ plugin: this });
        return s3.activate(options);
      }
    });

    return new DeployPlugin();
  }
};
