import angular from 'angular';
import homeFactory from './home-factory';
import homeComponent from './home-component';
import homeConfig from './home-config';
import homeTopBar from './directives/home-top-bar/index';
import queryBar from './directives/query-bar/index';
import questions from './questions';
import cameraView from './directives/camera-view/index';
import characterSelection from './directives/character-selection/index';


require('./home.scss');

angular.module('home', [])
    .directive('homeTopBar', homeTopBar)
    .directive('queryBar', queryBar)
    .directive('cameraView', cameraView)
    .directive('characterSelection', characterSelection)
    .factory('homeFactory', homeFactory)
    .constant('questions', questions)
    .component('home', homeComponent)
    .config(homeConfig);
