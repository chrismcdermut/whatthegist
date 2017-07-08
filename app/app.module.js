require('./main.scss');
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');

import angular from 'angular';
import uirouter from 'angular-ui-router';
import home from './home/index';
import appConfig from './app-config';

angular.module('app', [
    uirouter,
    'home'
]).config(appConfig);
