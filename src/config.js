"use strict";

exports.defaults = function() {
  return {
    minifyHtml: {
      options: {}
    }
  };
};

exports.validate = function( mimosaConfig, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "minifyHtml config", mimosaConfig.minifyHtml ) ) {
    validators.ifExistsIsObject( errors, "minifyHtml.options", mimosaConfig.minifyHtml.options );
  }

  return errors;
};
