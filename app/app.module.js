require('./main.scss');
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('angular-animate');
require('angular-touch');

import angular from 'angular';
import uirouter from 'angular-ui-router';
import common from './common';
import home from './home';
import factory from './factories';
import appConfig from './app-config';

angular.module('app', [
    uirouter,
    'factories',
    'ngAnimate',
    'ngTouch',
    'common',
    'home',
]).config(appConfig);
