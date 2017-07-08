import angular from 'angular';
import splashComponent from './splash-component';
import splashConfig from './splash-config';

angular.module('splash', [])
    .component('splash', splashComponent)
    .config(splashConfig);
