import angular from 'angular';
import homeFactory from './home-factory';
import homeComponent from './home-component';
import homeConfig from './home-config';
import homeTopBar from './directives/home-top-bar/index';
import queryBar from './directives/query-bar/index';
import questions from './questions';

require('./home.scss');

angular.module('home', [])
    .directive('homeTopBar', homeTopBar)
    .directive('queryBar', queryBar)
    .factory('homeFactory', homeFactory)
    .constant('questions', questions)
    .component('home', homeComponent)
    .config(homeConfig);
