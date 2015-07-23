
Ext.define('Practice.view.portal', {  
    extend : 'Ext.Container',  
    xtype : 'portalPanel',  
    requires: [  
         'Ext.ux.touch.grid.View',  
         'Ext.ux.touch.grid.List',  
         'Ext.ux.touch.grid.feature.Feature',  
         'Ext.ux.touch.grid.feature.Sorter'  
     ],  
    config : {  
        title : '告警排名Top10',  
        layout : 'vbox',  
        scrollable : false,  
        items : [ {  
            scrollable : false,  
            layout : 'hbox',  
            height : "40px",  
            defaults : {  
                flex : 1,  
                align : 'center',  
            },  
            items : [ {  
                xtype : 'selectfield',  
                name : 'columntype',  
                cls : "selectField",  
                options : [ {  
                    text : '2 columns',  
                    value : '1'  
                }, {  
                    text : '1 column',  
                    value : '2'  
                }],  
                usePicker : false  
            } ]  
        }]  
  
    }  
});






