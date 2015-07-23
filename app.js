

//<debug>
Ext.Loader.setPath({
    'Ext': '../touch/src',
    'Ext.ux.touch.grid': 'Ext.ux.touch.grid',
});
//</debug>

Ext.application({
    name: 'Practice',

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    views:       ['Practice.view.portal'],
    controllers: ['Practice.controller.portalController'],
    
    require: ['Ext.List'],

    launch: function () {
        // Set up a model to use in our Store
        Ext.define('User', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    {name: 'firstName', type: 'string'},
                    {name: 'lastName',  type: 'string'},
                    {name: 'age',       type: 'int'},
                    {name: 'eyeColor',  type: 'string'}
                ]
            }
        });

        Ext.create("Ext.data.Store", {
            storeId: "usersStore",
            model: "User",
            data : [
                {firstName: "Ed",    lastName: "Spencer"},
                {firstName: "Tommy", lastName: "Maintz"},
                {firstName: "Aaron", lastName: "Conran"},
                {firstName: "Jamie", lastName: "Avins"}
            ]
        });

        // var mainPanel = Ext.create("Ext.List", {
        //     fullscreen: true,
        //     store: "usersStore",
        //     itemTpl: "{lastName}, {firstName}"
        // });

        var mainPanel = Ext.create('Practice.view.portal');

        Ext.Viewport.add(mainPanel);
    }
});
