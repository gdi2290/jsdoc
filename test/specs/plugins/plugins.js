/*global app: true, describe: true, expect: true, it: true, jasmine: true */
// TODO: consolidate with specs/jsdoc/parser and specs/jsdoc/plugins
describe("plugins", function() {
    var myGlobal = require('jsdoc/util/global');
    myGlobal.jsdocPluginsTest = myGlobal.jsdocPluginsTest || {};

    if (!app.jsdoc.parser) {
        app.jsdoc.parser = new ( require('jsdoc/src/parser') ).Parser();
    }

    require('jsdoc/plugins').installPlugins(['test/fixtures/testPlugin1',
        'test/fixtures/testPlugin2'], app.jsdoc.parser);

    var docSet = jasmine.getDocSetFromFile("test/fixtures/plugins.js", app.jsdoc.parser);

    it("should fire the plugin's event handlers", function() {
        expect(myGlobal.jsdocPluginsTest.plugin1.fileBegin).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin1.fileBegin).toEqual(true);
        expect(myGlobal.jsdocPluginsTest.plugin1.beforeParse).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin1.beforeParse).toEqual(true);
        expect(myGlobal.jsdocPluginsTest.plugin1.jsdocCommentFound).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin1.jsdocCommentFound).toEqual(true);
        expect(myGlobal.jsdocPluginsTest.plugin1.symbolFound).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin1.symbolFound).toEqual(true);
        expect(myGlobal.jsdocPluginsTest.plugin1.newDoclet).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin1.newDoclet).toEqual(true);
        expect(myGlobal.jsdocPluginsTest.plugin1.fileComplete).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin1.fileComplete).toEqual(true);

        expect(myGlobal.jsdocPluginsTest.plugin2.fileBegin).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin2.fileBegin).toEqual(true);
        expect(myGlobal.jsdocPluginsTest.plugin2.beforeParse).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin2.beforeParse).toEqual(true);
        expect(myGlobal.jsdocPluginsTest.plugin2.jsdocCommentFound).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin2.jsdocCommentFound).toEqual(true);
        expect(myGlobal.jsdocPluginsTest.plugin2.symbolFound).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin2.symbolFound).toEqual(true);
        expect(myGlobal.jsdocPluginsTest.plugin2.newDoclet).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin2.newDoclet).toEqual(true);
        expect(myGlobal.jsdocPluginsTest.plugin2.fileComplete).toBeDefined();
        expect(myGlobal.jsdocPluginsTest.plugin2.fileComplete).toEqual(true);
    });

    it("should add the plugin's tag definitions to the dictionary", function() {
        var test = docSet.getByLongname("test");

        expect(test[0].longname).toEqual("test");
        expect(test[0].foo).toEqual(true);
    });
});
