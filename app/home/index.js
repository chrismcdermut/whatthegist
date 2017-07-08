import angular from 'angular';
import homeFactory from './home-factory';
import homeComponent from './home-component';
import homeConfig from './home-config';
import homeTopBar from './directives/home-top-bar/index';

require('./home.scss');

angular.module('home', [])
    .directive('homeTopBar', homeTopBar)
    .factory('homeFactory', homeFactory)
    .component('home', homeComponent)
    .config(homeConfig);
