import angular from 'angular';
import uirouter from 'angular-ui-router';
import home from './home/index';
import appConfig from './app-config';

require('./main.scss');

angular.module('app', [
    uirouter,
    'home'
]).config(appConfig);
