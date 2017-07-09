function homeState($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        component: 'home'
    })
}

export default homeState;
