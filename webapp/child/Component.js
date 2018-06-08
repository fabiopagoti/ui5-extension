sap.ui.define([
	"parent/Component"
], function(ParentComponent) {
	"use strict";

	return ParentComponent.extend("child.Component", {

		metadata: {
			"manifest": "json",
			"customizing": {
				"sap.ui.viewModifications": {
					"parent.view.S1": {
						"header": {
							"visible": false
						}
					}

				},
				"sap.ui.viewExtensions": {
					"parent.view.S1": {
						"extFooter": {
							"className": "sap.ui.core.Fragment",
							"fragmentName": "child.fragments.S1_Footer",
							"type": "XML"
						}
					}
				},
				"sap.ui.controllerReplacements": {
					"parent.controller.S1": "child.controller.S1_Custom"
				},
				"sap.ui.viewReplacements": {
					"parent.view.S2": {
						viewName: "child.view.S2_Custom",
						type: "XML"
					}
				}
			}

		},

		init: function() {
			ParentComponent.prototype.init.apply(this, arguments);

			var oModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl: "../parent/i18n/i18n.properties"
			});
			oModel.enhance({
				bundleUrl: "i18n/i18n.properties"
			});

			this.setModel(oModel, "i18n");
			sap.ui.getCore().setModel(oModel, "i18n");

		}
	});
});