import util from '../common/util';

export default {
    childRoutes: [{
        path: '/menu/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/menu/Index').default);
            }, 'menu.index');
        }
    }, {
        path: '/menu/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/menu/Detail').default);
            }, 'menu.detail');
        }
    }, {
        path: '/menu/edit/:menuId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/menu/Detail').default);
            }, 'menu.detail');
        }
    }]
}
