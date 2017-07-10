sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("parent.controller.S0", {
		
		onPressAdd: function(){
			console.log('adicionando');
			
			if(this.extAfterAdd){
				this.extAfterAdd();
			}
		}
	});
});