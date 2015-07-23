/** 
 * @class App.controller.TopTenController 
 * @extends Ext.app.Controller 
 *  
 * Top10 
 *  
 */  
Ext.define("Practice.controller.portalController", {  
    extend : "Ext.app.Controller",  
    config : {  
            /** 
             * @private 
             */  
            currentType : "",  
              
            currentGrid : null,  
              
            selectType:{"1":[ {  
                        header : '排名',  
                        dataIndex : 'firstName',  
                        style : 'text-align: center;',  
                        width : '50%',  
                        sortable : false  
                    }, {  
                        header : '系统',  
                        dataIndex : 'lastName',  
                        style : 'text-align: center;',  
                        width : '50%',  
                        sortable : false  
                    } ],  
                    "2":[ {  
                        header : '排名',  
                        dataIndex : 'firstName',  
                        style : 'text-align: center;',  
                        width : '30%',  
                        sortable : false  
                    } ]  
            },  
              
            refs : {  
                portalPanel : "portalPanel",  
                columntype:"selectfield[name=columntype]",      
            },  
          
            control : {  
                portalPanel:{  
                    activate : "on_portal_panel_activate",  
                },  
                columntype : {  
                    change : "on_column_type_change"  
                }  
            }  
        },  
          
        on_column_type_change :function(field, newValue, oldValue, eOpts){  
            this.setCurrentType(newValue);  
            this.doGetData();  
        },  
          
        on_portal_panel_activate : function(){  
            this.setCurrentType("1");  
            this.doGetData();  
        },  
          
        doGetData:function(){  
            var me=this;  
            var app = this.getApplication();  
            var portalPanel=this.getPortalPanel();  
              
            if(this.getCurrentGrid()!=null)  
            {  
                portalPanel.remove(this.getCurrentGrid());  
            }  
              
            var type=this.getCurrentType();  
//            var url=TOP10URL[type];  

            var columns=this.getSelectType()[type];  
              
            //请求表格数据  
//            app.getRequest("HeadSysList",columns, url, true, "",function(store){      
                //创建表格，并加入到页面中  
            var grid=Ext.create('Ext.ux.touch.grid.List',{
                store:"usersStore",
                flex : 1
            });  

            grid.setColumns(columns);  
            me.setCurrentGrid(grid);  
            portalPanel.add(grid);             
 //           });  
        }  
  
}); 

