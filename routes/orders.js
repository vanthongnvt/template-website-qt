var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/danh-sach', function(req, res, next) {
	const data = [
		{id:'132',name:'Nguyễn Văn A',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'53',name:'Nguyễn Văn B',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'35',name:'Nguyễn Văn C',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'63',name:'Nguyễn Văn D',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'235',name:'Nguyễn Văn E',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'623',name:'Nguyễn Văn F',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'1232',name:'Nguyễn Văn G',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'12',name:'Nguyễn Văn H',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'51',name:'Nguyễn Văn I',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'85',name:'Nguyễn Văn A',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'535',name:'Nguyễn Văn B',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'3345',name:'Nguyễn Văn C',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'75',name:'Nguyễn Văn D',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'33',name:'Nguyễn Văn E',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'3',name:'Nguyễn Văn F',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'74',name:'Nguyễn Văn G',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'25',name:'Nguyễn Văn H',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'5',name:'Nguyễn Văn I',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'75',name:'Nguyễn Văn A',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'98',name:'Nguyễn Văn B',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'34',name:'Nguyễn Văn C',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'46',name:'Nguyễn Văn D',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'47',name:'Nguyễn Văn E',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'934',name:'Nguyễn Văn F',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'157',name:'Nguyễn Văn G',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'92',name:'Nguyễn Văn H',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},
		{id:'72',name:'Nguyễn Văn I',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E',total:'1,200,000',status:'Đã giao'},


	];
  res.render('list-order',{orders:data});
});

module.exports = router;
