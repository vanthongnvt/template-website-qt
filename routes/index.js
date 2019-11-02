var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	const sales_chart=[{
                    period: '2010 Q1',
                    sales: 40000000,
                }, {
                    period: '2010 Q2',
                    sales: 50000000,
                }, {
                    period: '2010 Q3',
                    sales: 30000000,
                }, {
                    period: '2010 Q4',
                    sales: 35000000,
                }, {
                    period: '2011 Q1',
                    sales: 42000000,
                }, {
                    period: '2011 Q2',
                    sales: 29000000,
                }, {
                    period: '2011 Q3',
                    sales: 33000000,
                }, {
                    period: '2011 Q4',
                    sales: 49000000,
                }, {
                    period: '2012 Q1',
                    sales: 44000000,
                }, {
                    period: '2012 Q2',
                    sales: 37000000,
                }];
  	
  	const top_product=[
  		{name:'Áo tàng hình Harry Potter',amount:400},
  		{name:'Giày bay cao cấp',amount:300},
  		{name:'Wow Bummerang',amount:200},
  		{name:'Nokia 1080',amount:180},
  		{name:'Trường sinh dược',amount:1750},
  		{name:'Super Full set Điệp Viên',amount:150},
  		{name:'Vip lu gạch',amount:120},
  		{name:'Giáng long thập bát chưởng',amount:100},
  		{name:'Hồng Bảo thạch',amount:50},
  		{name:'Đả cẩu bổng',amount:40}

  	];

  	const top_category=[
  		{name:'Dày dép',amount:900},
  		{name:'Vũ khí',amount:800},
  		{name:'Thảo dược',amount:750},
  		{name:'Bí kíp võ công',amount:700},
  		{name:'Điện thoại',amount:690},
  		{name:'Linh đan',amount:500},
  		{name:'Đạo cụ',amount:450},
  		{name:'Thực phẩm',amount:400},
  		{name:'Laptop',amount:390},
  		{name:'Tóc giả',amount:20}
  	];


  	res.render('index',{sales_chart:sales_chart,top_product:top_product,top_category:top_category});

});

module.exports = router;
