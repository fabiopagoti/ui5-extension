sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("parent.controller.S1", {

		onInit: function() {
			var oModel = new JSONModel({
				addButtonVisible: true,
				People: [{
					Id: "1",
					FirstName: "João",
					LastName: "Silva",
					Age: 40,
					Country: "Brazil",
					Title: "Doctor"
				}, {
					Id: "2",
					FirstName: "Mary",
					LastName: "Johnson",
					Age: 25,
					Country: "US",
					Title: "Manager"
				}, {
					Id: "3",
					FirstName: "Alejandro",
					LastName: "Banderas",
					Age: 30,
					Country: "Spain",
					Title: "Plumber"
				}]
			});
			this.getView().setModel(oModel);

			if (this.hookSetAddButtonVisibility) {
				oModel.setProperty("/addButtonVisible", this.hookSetAddButtonVisibility());
			}

		},

		onAdd: function() {
			this.getOwnerComponent().getRouter().navTo("new");
		}

	});

});