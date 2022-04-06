sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";
        return Controller.extend("project1.controller.App", {        
            onInit: function () {

            },

            onNavigateTo: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteViewIndex");
            }

        });
    });