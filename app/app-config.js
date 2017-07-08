function appConfig($urlRouterProvider) {
    $urlRouterProvider.when('', '/home'); // We'll change this to splash page once it's up.
    $urlRouterProvider.when('/', '/home');
}

export default appConfig;
