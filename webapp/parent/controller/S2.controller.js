sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("parent.controller.S2", {

		onBack: function(){
			this.getOwnerComponent().getRouter().navTo("default");
		}
		
	});

});