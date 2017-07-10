sap.ui.define([
	"parent/controller/S0.controller"
], function(ParentController) {
	"use strict";

	return ParentController.extend("child.controller.S0_Custom", {
     
		extAfterAdd: function() {
			alert('Enhancement de controller');
		}
	});
});