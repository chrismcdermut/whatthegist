import angular from 'angular';
import splash from './directives/splash/splash';

angular.module('common', [])
    .directive('splash', splash);
