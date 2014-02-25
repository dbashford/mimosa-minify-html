"use strict";

var config = require( "./config" )
  , htmlmin = require( "html-minifier" ).minify;

var _execute = function ( mimosaConfig, options, next ) {
  if ( options.files && options.files.length ) {
    options.files.forEach( function( file ) {
      var prevSize = file.outputFileText.length;
      if ( typeof file.outputFileText === "object" ) {
        file.outputFileText = file.outputFileText.toString();
      }
      try {
        file.outputFileText = htmlmin( file.outputFileText, mimosaConfig.minifyHtml.options || {});
        var minifiedSize = file.outputFileText.length;
        if ( minifiedSize < prevSize ) {
          var sizeDiff = prevSize - minifiedSize;
          var pcnt = Math.round( ( sizeDiff / prevSize ) * 100 );
          mimosaConfig.log.info( "Saved [[ " + sizeDiff + " (" + pcnt + "%) ]] characters for file [[ " + file.inputFileName + " ]]");
        }
      } catch (err) {
        return mimosaConfig.log.error( "Error occurred html-minifiying [[ " + file.inputFileName + " ]] ", err );
      }
    });
  }

  next();
};

var registration = function ( mimosaConfig, register ) {
  if ( mimosaConfig.isMinify ) {
    register( [ "add", "update", "buildFile"], "afterCompile", _execute, [ "html", "htm" ] );
  }
};

module.exports = {
  registration: registration,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};