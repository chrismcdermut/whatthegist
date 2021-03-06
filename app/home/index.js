import angular from 'angular';
import homeComponent from './home-component';
import homeConfig from './home-config';
import characterSelection from './directives/character-selection/index';
import queryBar from './directives/query-bar/index';
import characterDisplay from './directives/character-display/index';

require('./home.scss');

angular.module('home', [])
    .directive('characterDisplay', characterDisplay)
    .directive('characterSelection', characterSelection)
    .directive('queryBar', queryBar)
    .component('home', homeComponent)
    .config(homeConfig);
