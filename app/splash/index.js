require('./splash.scss')
import splashDirective from './splash-directive';

angular.module('splash', [])
    .directive('splashDirective', splashDirective);
