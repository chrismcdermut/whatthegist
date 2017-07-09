function appConfig($urlRouterProvider, $httpProvider) {
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.when('/', '/home');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}

export default appConfig;
