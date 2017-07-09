require('./main.scss');
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('angular-animate');
require('angular-touch');

import angular from 'angular';
import uirouter from 'angular-ui-router';
import home from './home';
import factory from './factories';
import directives from './directives';
import appConfig from './app-config';

angular.module('app', [
    uirouter,
    'ngAnimate',
    'ngTouch',
    'factories',
    'directives',
    'home'
]).config(appConfig);
