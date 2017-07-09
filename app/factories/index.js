'use strict';

import angular from 'angular';
import watson from './watson';


angular.module('factories', [])
    .factory('watsonFactory', watson);
