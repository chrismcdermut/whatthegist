require('./main.scss');
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');

import angular from 'angular';
import uirouter from 'angular-ui-router';
import home from './home';
import appConfig from './app-config';
import splash from './splash';

angular.module('app', [
    uirouter,
    'splash',
    'home'
]).config(appConfig);
