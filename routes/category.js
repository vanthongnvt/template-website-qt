var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/danh-sach', function(req, res, next) {
	const data = [{name:'Quần áo',status:'Mở'},
					{name:'Dày dép',status:'Mở'},
					{name:'Vũ khí',status:'Mở'},
					{name:'Thảo dược',status:'Mở'},
					{name:'Thực phẩm',status:'Đóng'},
					{name:'Bí kíp võ công',status:'Mở'},
					{name:'Điện thoại',status:'Mở'},
					{name:'Laptop',status:'Mở'},
					{name:'Linh đan',status:'Đóng'},
					{name:'Đạo cụ',status:'Mở'},
					{name:'Dày dép',status:'Mở'},
					{name:'Vũ khí',status:'Mở'},
					{name:'Thảo dược',status:'Mở'},
					{name:'Thực phẩm',status:'Đóng'},
					{name:'Bí kíp võ công',status:'Mở'},
					{name:'Điện thoại',status:'Mở'},
					{name:'Laptop',status:'Mở'},
					{name:'Linh đan',status:'Đóng'},
					{name:'Đạo cụ',status:'Mở'}
				]
  	res.render('list-category',{categories:data});
});

router.get('/them', function(req, res, next) {
  res.render('add-category');
});

router.get('/sua', function(req, res, next) {
	const data={name:'Bí kíp võ công',status:1,desc:null,image:null};
  	res.render('add-category',{category:data});
});

module.exports = router;
