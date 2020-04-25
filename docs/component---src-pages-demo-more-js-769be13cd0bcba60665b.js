(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        Agvw: function (e, n, a) {
            
            a.r(n);
            var t = a("q1tI"),
                l = a.n(t),
                s = (a("Wbzz"), a("Bl7J")),
                o = a("vrFN"),
                c = (a("TwNY"), a("QLbG")),
                r = a("jHpe"),
                i = a.n(r),
                u =
                    (a("y1X9"),
                    a("QWvX"),
                    a("ZgVT"),
                    a("bPOv"),
                    a("85O/"),
                    a("CjHp"),
                    a("hL/g"),
                    a("GHhE"),
                    function () {
                        const e = Object(t.useState)(!1),
                            n = e[0],
                            a = e[1],
                            s = Object(t.useState)(!1),
                            o = s[0],
                            r = s[1];
                        return l.a.createElement(
                            "section",
                            null,
                            l.a.createElement("h2", null, "Default overlay"),
                            l.a.createElement(
                                "p",
                                null,
                                "Renders an overlay/modal with default configuration",
                            ),
                            l.a.createElement(
                                "button",
                                {
                                    className: "primary",
                                    onClick: function () {
                                        r(!0);
                                    },
                                },
                                "open modal",
                            ),
                            l.a.createElement(
                                c.a,
                                {
                                    configs: {},
                                    isOpen: o,
                                    closeOverlay: function () {
                                        return r(!1);
                                    },
                                },
                                l.a.createElement("h2", null, "Sample header"),
                                l.a.createElement("p", null, "text content"),
                            ),
                            l.a.createElement(
                                "button",
                                {
                                    onClick: function () {
                                        return a(!n);
                                    },
                                    className: "button-code",
                                },
                                n ? "Hide" : "Show",
                                " Source code",
                            ),
                            l.a.createElement(
                                "div",
                                {
                                    className: ["expandable-section", n ? "expand" : "close"].join(
                                        " ",
                                    ),
                                },
                                l.a.createElement(
                                    "pre",
                                    { className: "line-numbers" },
                                    l.a.createElement("code", { className: "language-jsx" }, m),
                                ),
                            ),
                        );
                    }),
                m =
                    '\nimport React, { useState } from "react";\nimport Overlay from "react-overlay-component";\n\nconst Overlay = () => {\n    const [expand, setExpand] = useState(false);\n\n    const [isOpen, setOverlay] = useState(false);\n\n    const closeOverlay = () => setOverlay(false);\n\n    const configs = {};\n\n    return (\n        <section>\n            <h2>default overlay</h2>\n            <p>Renders an overlay/modal with default configuration</p>\n            <button\n                className="primary"\n                onClick={() => {\n                    setOverlay(true);\n                }}\n            >\n        open modal\n            </button>\n\n            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>\n                <h2>Sample header</h2>\n                <p>text content</p>\n\n            </Overlay>\n\n            <button onClick={() => setExpand(!expand)} className={"button-code"}>\n                {expand ? "Hide" : "Show"} Source code\n            </button>\n            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>\n                <pre className="line-numbers">\n                    <code className="language-jsx">{normalOverlayhtmlcode}</code>\n                </pre>\n            </div>\n        </section>\n    );\n};\n',
                d = function () {
                    const e = Object(t.useState)(!1),
                        n = e[0],
                        a = e[1],
                        s = Object(t.useState)(!1),
                        o = s[0],
                        r = s[1];
                    return l.a.createElement(
                        "section",
                        null,
                        l.a.createElement("h2", null, "Overlay with no animation"),
                        l.a.createElement("p", null, "Renders an overlay/modal with no animate"),
                        l.a.createElement(
                            "button",
                            {
                                className: "primary",
                                onClick: function () {
                                    r(!0);
                                },
                            },
                            "open modal",
                        ),
                        l.a.createElement(
                            c.a,
                            {
                                configs: { animate: !1 },
                                isOpen: o,
                                closeOverlay: function () {
                                    return r(!1);
                                },
                            },
                            l.a.createElement("h2", null, "Sample header"),
                            l.a.createElement("p", null, "text content"),
                        ),
                        l.a.createElement(
                            "button",
                            {
                                onClick: function () {
                                    return a(!n);
                                },
                                className: "button-code",
                            },
                            n ? "Hide" : "Show",
                            " Source code",
                        ),
                        l.a.createElement(
                            "div",
                            { className: ["expandable-section", n ? "expand" : "close"].join(" ") },
                            l.a.createElement(
                                "pre",
                                { className: "line-numbers" },
                                l.a.createElement("code", { className: "language-jsx" }, p),
                            ),
                        ),
                    );
                },
                p =
                    '\nimport React, { useState } from "react";\nimport Overlay from "react-overlay-component";\n\nconst Overlay = () => {\n    const [expand, setExpand] = useState(false);\n\n    const [isOpen, setOverlay] = useState(false);\n\n    const closeOverlay = () => setOverlay(false);\n\n    const configs = {\n        animate: false\n    };\n\n    return (\n        <section>\n            <h2>default overlay</h2>\n            <p>Renders an overlay/modal with default configuration</p>\n            <button\n                className="primary"\n                onClick={() => {\n                    setOverlay(true);\n                }}\n            >\n        open modal\n            </button>\n\n            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>\n                <h2>Sample header</h2>\n                <p>text content</p>\n            </Overlay>\n\n            <button onClick={() => setExpand(!expand)} className={"button-code"}>\n                {expand ? "Hide" : "Show"} Source code\n            </button>\n            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>\n                <pre className="line-numbers">\n                    <code className="language-jsx">{normalOverlayhtmlcode}</code>\n                </pre>\n            </div>\n        </section>\n    );\n};\n',
                v = function () {
                    const e = Object(t.useState)(!1),
                        n = e[0],
                        a = e[1],
                        s = Object(t.useState)(!1),
                        o = s[0],
                        r = s[1];
                    return l.a.createElement(
                        "section",
                        null,
                        l.a.createElement("h2", null, "Undismissable Overlay"),
                        l.a.createElement(
                            "p",
                            null,
                            "Renders an overlay/modal that ignores click on backdrop and ESC key press.",
                        ),
                        l.a.createElement("p", null, "Can be closed programmatically."),
                        l.a.createElement(
                            "button",
                            {
                                className: "primary",
                                onClick: function () {
                                    r(!0);
                                },
                            },
                            "open modal",
                        ),
                        l.a.createElement(
                            c.a,
                            {
                                configs: { animate: !0, clickDismiss: !1, escapeDismiss: !1 },
                                isOpen: o,
                                closeOverlay: function () {
                                    return r(!1);
                                },
                            },
                            l.a.createElement("h2", null, "Sample header"),
                            l.a.createElement("p", null, "text content"),
                        ),
                        l.a.createElement(
                            "button",
                            {
                                onClick: function () {
                                    return a(!n);
                                },
                                className: "button-code",
                            },
                            n ? "Hide" : "Show",
                            " Source code",
                        ),
                        l.a.createElement(
                            "div",
                            { className: ["expandable-section", n ? "expand" : "close"].join(" ") },
                            l.a.createElement(
                                "pre",
                                { className: "line-numbers" },
                                l.a.createElement("code", { className: "language-jsx" }, f),
                            ),
                        ),
                    );
                },
                f =
                    '\nimport React, { useState } from "react";\nimport Overlay from "react-overlay-component";\n\nconst Overlay = () => {\n    const [expand, setExpand] = useState(false);\n\n    const [isOpen, setOverlay] = useState(false);\n\n    const closeOverlay = () => setOverlay(false);\n\n    const configs = {\n        animate: true,\n        clickDismiss: false,\n        escapeDismiss: false,\n    };\n\n    return (\n        <section>\n            <h2>default overlay</h2>\n            <p>Renders an overlay/modal with default configuration</p>\n            <button\n                className="primary"\n                onClick={() => {\n                    setOverlay(true);\n                }}\n            >\n                open modal\n            </button>\n\n            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>\n                <h2>Sample header</h2>\n                <p>text content</p>\n            </Overlay>\n\n            <button onClick={() => setExpand(!expand)} className={"button-code"}>\n                {expand ? "Hide" : "Show"} Source code\n            </button>\n            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>\n                <pre className="line-numbers">\n                    <code className="language-jsx">{normalOverlayhtmlcode}</code>\n                </pre>\n            </div>\n        </section>\n    );\n};\n',
                y = function () {
                    const e = Object(t.useState)(!1),
                        n = e[0],
                        a = e[1],
                        s = Object(t.useState)(!1),
                        o = s[0],
                        r = s[1];
                    return l.a.createElement(
                        "section",
                        null,
                        l.a.createElement("h2", null, "Undismissable custom Overlay"),
                        l.a.createElement(
                            "p",
                            null,
                            "Same as previous overlay with focus outline and close button.",
                        ),
                        l.a.createElement(
                            "button",
                            {
                                className: "primary",
                                onClick: function () {
                                    r(!0);
                                },
                            },
                            "open modal",
                        ),
                        l.a.createElement(
                            c.a,
                            {
                                configs: {
                                    animate: !0,
                                    clickDismiss: !1,
                                    escapeDismiss: !1,
                                    showCloseIcon: !1,
                                    focusOutline: !0,
                                },
                                isOpen: o,
                                closeOverlay: function () {
                                    return r(!1);
                                },
                            },
                            l.a.createElement(
                                "div",
                                { style: { textAlign: "center" } },
                                l.a.createElement("h2", null, "Dialog box with custom content"),
                                l.a.createElement("p", null, "sample text"),
                                l.a.createElement(
                                    "p",
                                    null,
                                    "Nullam cursus fermentum elit eu convallis. Donec non turpis eu dolor tristique mollis nec vel mauris. Suspendisse rutrum, odio sed tristique ultricies, ante urna egestas neque, non ornare ipsum erat eu felis. Proin nec enim sodales sem ullamcorper egestas. Duis quis sagittis ante. Morbi nibh ex, lacinia ac convallis eu, sagittis ut turpis. Etiam ultrices viverra diam, et dignissim dolor commodo rhoncus. Aenean euismod lacus eu sapien dictum, a efficitur mi condimentum. Mauris non enim lacus. Nulla tempor et dolor et fringilla. Praesent tempor sapien et porttitor aliquam. Phasellus vulputate libero volutpat, sagittis eros quis, eleifend lacus. Etiam eget metus quis tortor egestas lacinia.",
                                ),
                            ),
                            l.a.createElement(
                                "button",
                                {
                                    className: "danger",
                                    onClick: function () {
                                        r(!1);
                                    },
                                },
                                "close",
                            ),
                        ),
                        l.a.createElement(
                            "button",
                            {
                                onClick: function () {
                                    return a(!n);
                                },
                                className: "button-code",
                            },
                            n ? "Hide" : "Show",
                            " Source code",
                        ),
                        l.a.createElement(
                            "div",
                            { className: ["expandable-section", n ? "expand" : "close"].join(" ") },
                            l.a.createElement(
                                "pre",
                                { className: "line-numbers" },
                                l.a.createElement("code", { className: "language-jsx" }, O),
                            ),
                        ),
                    );
                },
                O =
                    '\nimport React, { useState } from "react";\nimport Overlay from "react-overlay-component";\n\nconst Overlay = () => {\n    const [expand, setExpand] = useState(false);\n\n    const [isOpen, setOverlay] = useState(false);\n\n    const closeOverlay = () => setOverlay(false);\n\n    const configs = {\n        animate: true,\n        clickDismiss: false,\n        escapeDismiss: false,\n        showCloseIcon: false,\n        focusOutline: true,\n    };\n\n    return (\n        <section>\n            <h2>default overlay</h2>\n            <p>Renders an overlay/modal with default configuration</p>\n            <button\n                className="primary"\n                onClick={() => {\n                    setOverlay(true);\n                }}\n            >\n                open modal\n            </button>\n\n            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>\n                <div style={{ textAlign: "center" }}>\n                    <h2>Dialog box with custom content</h2>\n                    <p>sample text</p>\n                    <p>\n            Nullam cursus fermentum elit eu convallis. Donec non turpis eu dolor tristique mollis\n            nec vel mauris. Suspendisse rutrum, odio sed tristique ultricies, ante urna egestas\n            neque, non ornare ipsum erat eu felis. Proin nec enim sodales sem ullamcorper egestas.\n            Duis quis sagittis ante. Morbi nibh ex, lacinia ac convallis eu, sagittis ut turpis.\n            Etiam ultrices viverra diam, et dignissim dolor commodo rhoncus. Aenean euismod lacus eu\n            sapien dictum, a efficitur mi condimentum. Mauris non enim lacus. Nulla tempor et dolor\n            et fringilla. Praesent tempor sapien et porttitor aliquam. Phasellus vulputate libero\n            volutpat, sagittis eros quis, eleifend lacus. Etiam eget metus quis tortor egestas\n            lacinia.\n                    </p>\n                </div>\n\n                <button\n                    className="danger"\n                    onClick={() => {\n                        setOverlay(false);\n                    }}\n                >\n                    close\n                </button>\n            </Overlay>\n\n            <button onClick={() => setExpand(!expand)} className={"button-code"}>\n                {expand ? "Hide" : "Show"} Source code\n            </button>\n            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>\n                <pre className="line-numbers">\n                    <code className="language-jsx">{normalOverlayhtmlcode}</code>\n                </pre>\n            </div>\n        </section>\n    );\n};\n';
            n.default = function () {
                return (
                    Object(t.useEffect)(function () {
                        i.a.highlightAll();
                    }),
                    l.a.createElement(
                        s.a,
                        null,
                        l.a.createElement(o.a, { title: "more demo" }),
                        l.a.createElement("h1", null, "Overlay demos with different configs"),
                        l.a.createElement(
                            "ul",
                            null,
                            l.a.createElement("li", null, l.a.createElement(u, null)),
                            l.a.createElement("li", null, l.a.createElement(d, null)),
                            l.a.createElement("li", null, l.a.createElement(v, null)),
                            l.a.createElement("li", null, l.a.createElement(y, null)),
                        ),
                    )
                );
            };
        },
        GHhE: function (e, n, a) {},
    },
]);
//# sourceMappingURL=component---src-pages-demo-more-js-769be13cd0bcba60665b.js.map
