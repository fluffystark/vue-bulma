export default [{
    path: '/feed',
    name: 'feed',
    component: () => import('../../pages/HelloWorld.vue'),
    pathToRegexOptions: {
        strict: true
    },
    meta: {
        title: 'Question App',
        loginRequired: true,
    },
}];
