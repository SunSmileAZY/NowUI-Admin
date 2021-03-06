import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'product',
        baseUrl: '/product/admin/v1',
        title: '商品表单',
        primaryKey: 'productId',
        store: state.product,
        breadcrumbList: [{
            name: '商品管理',
            url: '/product/index'
        }, {
            name: '商品信息',
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
			id: 'productName',
			name: '商品名称',
			type: 'VARCHAR'
		}, {
			id: 'productCategory',
			name: '商品分类',
			type: 'SELECT',
			required: true,
			select: {
				returnValueName: 'productCategoryId',
				returnLabelName: 'productCategoryName',
				staticOptionList: [
					{
						key: 'MAN',
						value: '男'
					}, {
						key: 'WOMEN',
						value: '女'
					}
				]
			},
		}, {
			id: 'productImage',
			name: '商品图片',
			type: 'MEDIA',
			returnLimit: 1,
			returnValueName: 'productImageFileId',
			returnLabelName: 'productImageFilePath',
			supportUploadTypes: ['image'],
        }]
    }
})(NDetail);
