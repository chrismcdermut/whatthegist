function splashState($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('splash', {
            url: '/splash',
            component: 'splash'
        })
}

export default splashState;
