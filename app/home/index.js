import angular from 'angular';
import homeFactory from './home-factory';
import homeComponent from './home-component';
import homeConfig from './home-config';

require('./home.scss');

angular.module('home', [])
    .factory('homeFactory', homeFactory)
    .component('home', homeComponent)
    .config(homeConfig);
