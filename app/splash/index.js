import angular from 'angular';
import splashComponent from './splash-component';
import splashConfig from './splash-config';
import splashDirective from './splash-directive';

require('./splash.scss')

angular.module('splash', [])
    .directive('splashDirective', splashDirective);
