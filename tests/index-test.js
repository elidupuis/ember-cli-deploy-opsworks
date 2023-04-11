"use strict";

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var assert = chai.assert;

describe("opsworks plugin", function () {
  var subject, context, mockUi, plugin; // context, mockUi

  before(function () {
    subject = require("../index");
  });

  beforeEach(function () {
    mockUi = {
      verbose: true,
      messages: [],
      write: function () {},
      writeLine: function (message) {
        this.messages.push(message);
      },
    };

    plugin = subject.createDeployPlugin({
      name: "opsworks",
    });

    context = {
      ui: mockUi,
      config: {
        opsworks: {
          stackId: "MOCK_AWS_STACK_ID",
          appId: "MOCK_AWS_APP_ID",
          accessKeyId: "MOCK_AWS_KEY",
          secretAccessKey: "MOCK_AWS_SECRET",
        },
      },
    };
  });

  it("has a name", function () {
    assert.equal(plugin.name, "opsworks");
  });

  it("implements the correct hooks", function () {
    var plugin = subject.createDeployPlugin({
      name: "test-plugin",
    });

    assert.typeOf(plugin.activate, "function");
  });

  describe("configure hook", function () {
    it("resolves if config is ok", function () {
      var plugin = subject.createDeployPlugin({
        name: "opsworks",
      });

      plugin.beforeHook(context);
      plugin.configure(context);
      assert.ok(true); // it didn't throw
    });
  });
});
