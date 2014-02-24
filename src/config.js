"use strict";

exports.defaults = function() {
  return {
    minifyHtml: {
      options: {}
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
         "  minifyHtml:     # config settings for HTML minifier\n" +
         "    options: {}   # pass-through options to the html-minifier tool";

};

exports.validate = function( mimosaConfig, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "minifyHtml config", mimosaConfig.minifyHtml ) ) {
    validators.ifExistsIsObject( errors, "minifyHtml.options", mimosaConfig.minifyHtml.options );
  }

  return errors;
};
