({
	init: function(cmp){
		cmp.set("v.srcValue", new Date());
	},
	convert: function(cmp){
		cmp.set("v.value",  cmp.get("v.srcValue").toISOString());
	},
})