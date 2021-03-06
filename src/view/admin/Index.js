import React from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';
import constant from "../../common/constant";

export default connect(function (state) {
    return {
        id: 'admin',
        type: 'TABLE',
        title: '管理员',
        primaryKey: 'adminId',
        store: state.admin,
        listUrl: '/admin/admin/v1/list',
        breadcrumbList: [{
            name: '管理员管理',
            url: ''
        }],
        buttonList: [{
            name: '搜索',
            icon: 'search',
            type: 'SEARCH',
            isLoad: true,
            isPrimary: true
        }],
		secondButtonList: [{
			name: '新增',
			icon: 'plus-circle',
			type: 'ADD',
			addUrl: '/admin/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/admin/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'userAccount',
            name: '账号',
            type: 'VARCHAR'
        }, {
            id: 'userNickName',
            name: '昵称',
            type: 'VARCHAR'
        }, {
            id: 'userMobile',
            name: '手机号码',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'userAccount',
            name: '账号',
            editUrl: '/admin/edit/:adminId'
        }, {
            id: 'userNickName',
            name: '昵称'
        }, {
            id: 'userName',
            name: '姓名'
        }, {
            id: 'userMobile',
            name: '手机号码'
        }, {
            id: 'userEmail',
            name: '邮箱'
        }, {
            id: 'userAvatar',
            name: '头像',
            render: function (text, record, index, self) {
                return (
                    text ?
                        <span>
                          <img alt="example" style={{width: 100}} src={constant.imageHost + text.filePath} />
                        </span>
                        :
                        null
                )
            }
        }]
    }
})(NIndex);
