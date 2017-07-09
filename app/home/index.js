import angular from 'angular';
import homeFactory from './home-factory';
import homeComponent from './home-component';
import homeConfig from './home-config';
import cameraView from './directives/camera-view/index';
import characterSelection from './directives/character-selection/index';


require('./home.scss');

angular.module('home', [])
    .directive('cameraView', cameraView)
    .directive('characterSelection', characterSelection)
    .factory('homeFactory', homeFactory)
    .component('home', homeComponent)
    .config(homeConfig);
