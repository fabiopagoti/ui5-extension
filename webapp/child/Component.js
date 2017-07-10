sap.ui.define([
	"parent/Component"
], function(ParentComponent) {
	"use strict";

	return ParentComponent.extend("child.Component", {

		metadata: {
			"customizing": {
				"sap.ui.controllerReplacements": {
					"parent.controller.S0": "child.controller.S0_Custom"
				},
				"sap.ui.viewExtensions": {
					"parent.view.S0": {
						"extFooter": {
							"className": "sap.ui.core.Fragment",
							"fragmentName": "child.fragments.S0_Footer",
							"type": "XML"
						}
					}
				},
				"sap.ui.viewModifications": {
					"parent.view.S0": {
						"someControl": {
							"visible": false
						}
					}
				}
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			ParentComponent.prototype.init.apply(this, arguments);
		}
	});
});