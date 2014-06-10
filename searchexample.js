var kde=require("ksana-document").kde;
var kse=require("ksana-document").kse;
kde.openLocal("ccc",function(db){
	kse.search(db,"天地",{range:{start:0}},function(data){
		console.log(data);
	})
})