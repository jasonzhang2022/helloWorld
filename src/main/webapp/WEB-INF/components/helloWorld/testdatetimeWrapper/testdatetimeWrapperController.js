({
	init: function(cmp){
		var n=new Date();
		cmp.set("v.srcValue", new Date());
	},
	convert: function(cmp){
		cmp.set("v.toValue",  cmp.get("v.srcValue").toISOString());
		cmp.set("v.srcValueString",  cmp.get("v.srcValue").toString());
	},
	change: function(cmp){
		cmp.set("v.srcValue", new Date());
	}
})