import angular from 'angular';
import homeFactory from './home-factory';
import homeComponent from './home-component';
import homeConfig from './home-config';
import characterSelection from './directives/character-selection/index';
import queryBar from './directives/query-bar/index';
import characterDisplay from './directives/character-display/index';

require('./home.scss');

angular.module('home', [])
    .directive('characterSelection', characterSelection)
    .directive('queryBar', queryBar)
    .directive('characterDisplay', characterDisplay)
    .factory('homeFactory', homeFactory)
    .component('home', homeComponent)
    .config(homeConfig);
