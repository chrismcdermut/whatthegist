require('./main.scss');
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('angular-animate');
require('angular-touch');

import angular from 'angular';
import uirouter from 'angular-ui-router';
import home from './home/index';
import appConfig from './app-config';

angular.module('app', [
    uirouter,
    'ngAnimate',
    'ngTouch',
    'home'
]).config(appConfig);
