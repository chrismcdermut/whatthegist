import angular from 'angular';
import homeFactory from './home-factory';
import homeComponent from './home-component';
import homeConfig from './home-config';
import cameraView from './directives/camera-view/index';
import characterSelection from './directives/character-selection/index';
import queryBar from './directives/query-bar/index';
import questions from './questions';
import characterOneDisplay from './directives/character-display/index';
import characterTwoDisplay from './directives/character-display-two/index';

require('./home.scss');

angular.module('home', [])
    .directive('cameraView', cameraView)
    .directive('characterSelection', characterSelection)
    .directive('queryBar', queryBar)
    .directive('characterOneDisplay', characterOneDisplay)
    .directive('characterTwoDisplay', characterTwoDisplay)
    .factory('homeFactory', homeFactory)
    .constant('questions', questions)
    .component('home', homeComponent)
    .config(homeConfig);
