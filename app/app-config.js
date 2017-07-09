function appConfig($urlRouterProvider, $httpProvider) {
    $urlRouterProvider.when('', '/home'); // We'll change this to splash page once it's up.
    $urlRouterProvider.when('/', '/home');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}

export default appConfig;
