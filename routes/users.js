var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/danh-sach', function(req, res, next) {
	const data = [
		{firstname:'Tôn',lastname:'Ngộ Không',username:'ngokhong',email:'tethiendaithanh@gmail.com',phone:null,address:'Hoa Qua Son'},
		{firstname:'Kiều',lastname:'Phong',username:'kieuphong',email:'backieuphong@gmail.com',phone:null,address:'Tung cua'},
		{firstname:'Son',lastname:'Goku',username:'songoku',email:'songoku@gmail.com',phone:null,address:null},
		{firstname:'Đỗ',lastname:'Nam Trung',username:'donamtrung',email:'donamtrung@gmail.com',phone:null,address:'Meo'},
		{firstname:'Tiểu',lastname:'Cường',username:'gian',email:'tieucuong@gmail.com',phone:null,address:null},
		{firstname:'Nguyễn',lastname:'Văn A',username:'nguyenvana',email:'nguyenvana@gmail.com',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E'},
		{firstname:'Tôn',lastname:'Ngộ Không',username:'ngokhong',email:'tethiendaithanh@gmail.com',phone:null,address:'Hoa Qua Son'},
		{firstname:'Kiều',lastname:'Phong',username:'kieuphong',email:'backieuphong@gmail.com',phone:null,address:'Tung cua'},
		{firstname:'Son',lastname:'Goku',username:'songoku',email:'songoku@gmail.com',phone:null,address:null},
		{firstname:'Đỗ',lastname:'Nam Trung',username:'donamtrung',email:'donamtrung@gmail.com',phone:null,address:'Meo'},
		{firstname:'Tiểu',lastname:'Cường',username:'gian',email:'tieucuong@gmail.com',phone:null,address:null},
		{firstname:'Nguyễn',lastname:'Văn A',username:'nguyenvana',email:'nguyenvana@gmail.com',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E'},
		{firstname:'Tôn',lastname:'Ngộ Không',username:'ngokhong',email:'tethiendaithanh@gmail.com',phone:null,address:'Hoa Qua Son'},
		{firstname:'Kiều',lastname:'Phong',username:'kieuphong',email:'backieuphong@gmail.com',phone:null,address:'Tung cua'},
		{firstname:'Son',lastname:'Goku',username:'songoku',email:'songoku@gmail.com',phone:null,address:null},
		{firstname:'Đỗ',lastname:'Nam Trung',username:'donamtrung',email:'donamtrung@gmail.com',phone:null,address:'Meo'},
		{firstname:'Tiểu',lastname:'Cường',username:'gian',email:'tieucuong@gmail.com',phone:null,address:null},
		{firstname:'Nguyễn',lastname:'Văn A',username:'nguyenvana',email:'nguyenvana@gmail.com',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E'},
		{firstname:'Tôn',lastname:'Ngộ Không',username:'ngokhong',email:'tethiendaithanh@gmail.com',phone:null,address:'Hoa Qua Son'},
		{firstname:'Kiều',lastname:'Phong',username:'kieuphong',email:'backieuphong@gmail.com',phone:null,address:'Tung cua'},
		{firstname:'Son',lastname:'Goku',username:'songoku',email:'songoku@gmail.com',phone:null,address:null},
		{firstname:'Đỗ',lastname:'Nam Trung',username:'donamtrung',email:'donamtrung@gmail.com',phone:null,address:'Meo'},
		{firstname:'Tiểu',lastname:'Cường',username:'gian',email:'tieucuong@gmail.com',phone:null,address:null},
		{firstname:'Nguyễn',lastname:'Văn A',username:'nguyenvana',email:'nguyenvana@gmail.com',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E'},
	];
  	res.render('list-user',{users:data});
});

router.get('/sua', function(req, res, next) {
	const data={firstname:'Nguyễn',lastname:'Văn A',username:'nguyenvana',email:'nguyenvana@gmail.com',phone:'029364872',address:'242 Nguyen Van B, P.Nguyen C, Q.Nguyen D, tp.Nguyen E'};
  	res.render('edit-user',{user:data});
});


module.exports = router;
