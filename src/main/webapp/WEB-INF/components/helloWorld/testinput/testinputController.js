({
	sum: function(cmp, event){
		var num1=0;
		var num2=0;
		if (cmp.get("v.num1")){
			num1=cmp.get("v.num1");
		}
		if (cmp.get("v.num2")){
			num2=cmp.get("v.num2");
		}
		cmp.set("v.sum", num1+num2);
	},
	change: function(cmp){
		cmp.set("v.num1", 10);
	}
});