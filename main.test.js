#!/usr/bin/env node

const express = require('express'),
      http    = require('http');

let mClass = {};

mClass.first = function(app){

	console.log("YOUR RESULTS IS "+"\n\n"+app);
};

module.exports = mClass.first(express);