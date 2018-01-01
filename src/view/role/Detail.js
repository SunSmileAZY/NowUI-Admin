import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'role',
        title: '角色表单',
        primaryKey: 'roleId',
        store: state.role,
        breadcrumbList: [{
            name: '角色管理',
            url: '/role/index'
        }, {
            name: '角色信息',
            url: ''
        }],
        buttonList: [{
            name: '返回',
            icon: 'left-circle',
            type: 'BACK',
            isPrimary: false
        }],
        secondButtonList: [{
            name: '删除',
            icon: 'delete',
            type: 'DELETE'
        }],
        columnList: [{
            id: 'roleName',
            name: '名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'roleCode',
            name: '编码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'roleDescription',
            name: '描述',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'roleSort',
            name: '排序',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);
