sap.ui.define([
	"parent/controller/S1.controller"
], function(ParentController) {
	"use strict";

	return ParentController.extend("child.controller.S1_Custom", {

		onFilter: function() {
			jQuery.sap.log.info("Custom Filter");
		},

		hookSetAddButtonVisibility: function() {
			return false;
		}
	});
});