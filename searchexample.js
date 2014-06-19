var kde=require("ksana-document").kde;
var kse=require("ksana-document").kse;
kde.openLocal("ccc",function(db){
	kse.highlightPage(db,"周易.坤",{q:"天地"},function(data){
		console.log(data);
	})
})