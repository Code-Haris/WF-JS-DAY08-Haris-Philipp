"use strict";
var $ = function(id) {
  return document.getElementById(id);
};

var length = $("length");
var width = $("width");
var height = $("height");
var amountVolume = 0;

function calculateVolume(length, width, height) {
  amountVolume = parseFloat(length) * parseFloat(width) *
    parseFloat(height);
  var volumeRound = amountVolume.toFixed(2);
  $('volume').value = volumeRound;
};