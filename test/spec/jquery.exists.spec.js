(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "qulog", "../../src/jquery.exists.js"], factory); // AMD/Require.js
    } else {
        factory(root.jQuery, root.qulog); // Browser globals
    }
}(this, function factory($, log) {
    $(); // this is needed in order to run tests properly in jasmine_node

    // Sanity checks, whether the dependencies (jQuery and qulog and the plugin) are loaded properly
    describe('if "jQuery" exists', function() {
        it('-> have to return "function"', function() {
            expect(typeof $).toEqual("function");
        });
    });
    describe('if "qulog" exists', function() {
        it('-> have to return "function"', function() {
            expect(typeof log).toEqual("function");
        });
    });
    describe('if "jquery.exists" loaded', function() {
        it('-> have to return "function"', function() {
            expect(typeof $.fn.exists).toEqual("function");
        });
    });

    // Check against main dom elements
    describe('check for $("html")', function() {
        it('-> have to return "true"', function() {
            expect($("html").exists()).toBe(true);
        });
    });
    describe('check for $("body")', function() {
        it('-> have to return "true"', function() {
            expect($("body").exists()).toBe(true);
        });
    });
    describe('check for $(document)', function() {
        it('-> have to return "true"', function() {
            expect($(document).exists()).toBe(true);
        });
    });
    describe('check for $(window)', function() {
        it('-> have to return "true"', function() {
            expect($(window).exists()).toBe(true);
        });
    });

    // Check against "unexpected" values
    describe('check for $()', function() {
        it('-> have to return "false"', function() {
            expect($().exists()).toBe(false);
        });
    });
    describe('check for $([])', function() {
        it('-> have to return "false"', function() {
            expect($([]).exists()).toBe(false);
        });
    });
    describe('check for $([1])', function() {
        it('-> have to return "false"', function() {
            expect($([1]).exists()).toBe(false);
        });
    });
    describe('check for $([1, 2, 3])', function() {
        it('-> have to return "false"', function() {
            expect($([1, 2, 3]).exists()).toBe(false);
        });
    });
    describe('check for $({})', function() {
        it('-> have to return "false"', function() {
            expect($({}).exists()).toBe(false);
        });
    });
    describe('check for $({a:1})', function() {
        it('-> have to return "false"', function() {
            expect($({a:1}).exists()).toBe(false);
        });
    });
    describe('check for $({a:1, b:2, c:3})', function() {
        it('-> have to return "false"', function() {
            expect($({a:1, b:2, c:3}).exists()).toBe(false);
        });
    });

    // Check against expected values
    describe('check against a couple of existing elements with default argument (parent = "html")', function() {
        var body = $("body"),
            e1, e2;

        beforeEach(function() {
            e1 = $("<div/>").append(
                $("<ul/>").append(
                    $("<li/>"),
                    $("<li/>"),
                    $("<li/>")
                )
            );
            body.append(e1);

            e2 = $("<div/>").append(
                $("<ul/>").append(
                    $("<li/>"),
                    $("<li/>"),
                    $("<li/>", {id: "deepEl"})
                )
            );
            body.append(e2);
        });
        afterEach(function() {
            e1.remove();
            e2.remove();
        });

        it('-> have to return "true"', function() {
            expect($(e1).exists()).toBe(true);
            expect($(e2).exists()).toBe(true);
            expect($("ul", e2).exists()).toBe(true);
            expect($("li", e2).exists()).toBe(true);
            expect($("#deepEl", e2).exists()).toBe(true);
        });
    });
    describe('check against a couple of existing elements with (parent = "div")', function() {
        var parent = "div",
            body = $("body"),
            e1, e2;

        beforeEach(function() {
            e1 = $("<div/>").append(
                $("<ul/>").append(
                    $("<li/>"),
                    $("<li/>"),
                    $("<li/>")
                )
            );
            body.append(e1);

            e2 = $("<div/>").append(
                $("<ul/>").append(
                    $("<li/>"),
                    $("<li/>"),
                    $("<li/>", {id: "deepEl"})
                )
            );
            body.append(e2);
        });
        afterEach(function() {
            e1.remove();
            e2.remove();
        });

        it('-> "true" and "false" values', function() {
            expect($(e1).exists(parent)).toBe(false);
            expect($(e2).exists(parent)).toBe(false);
            expect($("ul", e2).exists(parent)).toBe(true);
            expect($("li", e2).exists(parent)).toBe(true);
            expect($("#deepEl", e2).exists(parent)).toBe(true);
        });
    });
    describe('check against a couple of existing elements with (parent = "ul")', function() {
        var parent = "ul",
            body = $("body"),
            e1, e2;

        beforeEach(function() {
            e1 = $("<div/>").append(
                $("<ul/>").append(
                    $("<li/>"),
                    $("<li/>"),
                    $("<li/>")
                )
            );
            body.append(e1);

            e2 = $("<div/>").append(
                $("<ul/>").append(
                    $("<li/>"),
                    $("<li/>"),
                    $("<li/>", {id: "deepEl"})
                )
            );
            body.append(e2);
        });
        afterEach(function() {
            e1.remove();
            e2.remove();
        });

        it('-> "true" and "false" values', function() {
            expect($(e1).exists(parent)).toBe(false);
            expect($(e2).exists(parent)).toBe(false);
            expect($("ul", e2).exists(parent)).toBe(false);
            expect($("li", e2).exists(parent)).toBe(true);
            expect($("#deepEl", e2).exists(parent)).toBe(true);
        });
    });
    describe('check against a couple of non-existing elements with default argument (parent = "html")', function() {
        var body = $("body"),
            e1, e2;

        beforeEach(function() {
            e1 = $("<div/>").append(
                $("<ul/>").append(
                    $("<li/>"),
                    $("<li/>"),
                    $("<li/>")
                )
            );

            e2 = $("<div/>").append(
                $("<ul/>").append(
                    $("<li/>"),
                    $("<li/>"),
                    $("<li/>", {id: "deepEl"})
                )
            );
        });

        it('-> have to return "false"', function() {
            expect($(e1).exists()).toBe(false);
            expect($(e2).exists()).toBe(false);
            expect($("ul", e2).exists()).toBe(false);
            expect($("li", e2).exists()).toBe(false);
            expect($("#deepEl", e2).exists()).toBe(false);
        });
    });
    describe('check against a couple of non-existing elements with (parent = "div")', function() {
        var parent = "div",
            body = $("body"),
            e1, e2;

        beforeEach(function() {
            e1 = $("<div/>").append(
                $("<ul/>").append(
                    $("<li/>"),
                    $("<li/>"),
                    $("<li/>")
                )
            );

            e2 = $("<div/>").append(
                $("<ul/>").append(
                    $("<li/>"),
                    $("<li/>"),
                    $("<li/>", {id: "deepEl"})
                )
            );
        });

        it('-> "true" and "false" values', function() {
            expect($(e1).exists(parent)).toBe(false);
            expect($(e2).exists(parent)).toBe(false);
            expect($("ul", e2).exists(parent)).toBe(true);
            expect($("li", e2).exists(parent)).toBe(true);
            expect($("#deepEl", e2).exists(parent)).toBe(true);
        });
    });
}));