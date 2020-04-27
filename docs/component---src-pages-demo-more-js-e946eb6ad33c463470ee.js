(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        Agvw: function (e, n, t) {
            
            t.r(n);
            var a = t("q1tI"),
                l = t.n(a),
                s = (t("Wbzz"), t("Bl7J")),
                o = t("vrFN"),
                i = t("TwNY"),
                c = t("QLbG"),
                r = t("jHpe"),
                u = t.n(r),
                m =
                    (t("y1X9"),
                    t("QWvX"),
                    t("ZgVT"),
                    t("bPOv"),
                    t("85O/"),
                    t("CjHp"),
                    t("hL/g"),
                    t("GHhE"),
                    function () {
                        const e = Object(a.useState)(!1),
                            n = e[0],
                            t = e[1],
                            s = Object(a.useState)(!1),
                            o = s[0],
                            i = s[1];
                        return l.a.createElement(
                            "section",
                            null,
                            l.a.createElement("h3", null, "Default overlay"),
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
                                        i(!0);
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
                                        return i(!1);
                                    },
                                },
                                l.a.createElement("h3", null, "Sample header"),
                                l.a.createElement("p", null, "text content"),
                            ),
                            l.a.createElement(
                                "button",
                                {
                                    onClick: function () {
                                        return t(!n);
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
                                    l.a.createElement("code", { className: "language-jsx" }, p),
                                ),
                            ),
                        );
                    }),
                p =
                    '\nimport React, { useState } from "react";\nimport Overlay from "react-overlay-component";\n\nconst Overlay = () => {\n    const [expand, setExpand] = useState(false);\n\n    const [isOpen, setOverlay] = useState(false);\n\n    const closeOverlay = () => setOverlay(false);\n\n    const configs = {};\n\n    return (\n        <section>\n            <h3>default overlay</h3>\n            <p>Renders an overlay/modal with default configuration</p>\n            <button\n                className="primary"\n                onClick={() => {\n                    setOverlay(true);\n                }}\n            >\n        open modal\n            </button>\n\n            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>\n                <h3>Sample header</h3>\n                <p>text content</p>\n\n            </Overlay>\n\n            <button onClick={() => setExpand(!expand)} className={"button-code"}>\n                {expand ? "Hide" : "Show"} Source code\n            </button>\n            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>\n                <pre className="line-numbers">\n                    <code className="language-jsx">{normalOverlayhtmlcode}</code>\n                </pre>\n            </div>\n        </section>\n    );\n};\n',
                d = function () {
                    const e = Object(a.useState)(!1),
                        n = e[0],
                        t = e[1],
                        s = Object(a.useState)(!1),
                        o = s[0],
                        i = s[1];
                    return l.a.createElement(
                        "section",
                        null,
                        l.a.createElement("h3", null, "Overlay with no animation"),
                        l.a.createElement("p", null, "Renders an overlay/modal with no animate"),
                        l.a.createElement(
                            "button",
                            {
                                className: "primary",
                                onClick: function () {
                                    i(!0);
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
                                    return i(!1);
                                },
                            },
                            l.a.createElement("h3", null, "Sample header"),
                            l.a.createElement("p", null, "text content"),
                        ),
                        l.a.createElement(
                            "button",
                            {
                                onClick: function () {
                                    return t(!n);
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
                                l.a.createElement("code", { className: "language-jsx" }, v),
                            ),
                        ),
                    );
                },
                v =
                    '\nimport React, { useState } from "react";\nimport Overlay from "react-overlay-component";\n\nconst Overlay = () => {\n    const [expand, setExpand] = useState(false);\n\n    const [isOpen, setOverlay] = useState(false);\n\n    const closeOverlay = () => setOverlay(false);\n\n    const configs = {\n        animate: false\n    };\n\n    return (\n        <section>\n            <h3>default overlay</h3>\n            <p>Renders an overlay/modal with default configuration</p>\n            <button\n                className="primary"\n                onClick={() => {\n                    setOverlay(true);\n                }}\n            >\n        open modal\n            </button>\n\n            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>\n                <h3>Sample header</h3>\n                <p>text content</p>\n            </Overlay>\n\n            <button onClick={() => setExpand(!expand)} className={"button-code"}>\n                {expand ? "Hide" : "Show"} Source code\n            </button>\n            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>\n                <pre className="line-numbers">\n                    <code className="language-jsx">{normalOverlayhtmlcode}</code>\n                </pre>\n            </div>\n        </section>\n    );\n};\n',
                f = function () {
                    const e = Object(a.useState)(!1),
                        n = e[0],
                        t = e[1],
                        s = Object(a.useState)(!1),
                        o = s[0],
                        i = s[1];
                    return l.a.createElement(
                        "section",
                        null,
                        l.a.createElement("h3", null, "Undismissable Overlay"),
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
                                    i(!0);
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
                                    return i(!1);
                                },
                            },
                            l.a.createElement("h3", null, "Sample header"),
                            l.a.createElement("p", null, "text content"),
                        ),
                        l.a.createElement(
                            "button",
                            {
                                onClick: function () {
                                    return t(!n);
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
                    '\nimport React, { useState } from "react";\nimport Overlay from "react-overlay-component";\n\nconst Overlay = () => {\n    const [expand, setExpand] = useState(false);\n\n    const [isOpen, setOverlay] = useState(false);\n\n    const closeOverlay = () => setOverlay(false);\n\n    const configs = {\n        animate: true,\n        clickDismiss: false,\n        escapeDismiss: false,\n    };\n\n    return (\n        <section>\n            <h3>default overlay</h3>\n            <p>Renders an overlay/modal with default configuration</p>\n            <button\n                className="primary"\n                onClick={() => {\n                    setOverlay(true);\n                }}\n            >\n                open modal\n            </button>\n\n            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>\n                <h3>Sample header</h3>\n                <p>text content</p>\n            </Overlay>\n\n            <button onClick={() => setExpand(!expand)} className={"button-code"}>\n                {expand ? "Hide" : "Show"} Source code\n            </button>\n            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>\n                <pre className="line-numbers">\n                    <code className="language-jsx">{normalOverlayhtmlcode}</code>\n                </pre>\n            </div>\n        </section>\n    );\n};\n',
                y = function () {
                    const e = Object(a.useState)(!1),
                        n = e[0],
                        t = e[1],
                        s = Object(a.useState)(!1),
                        o = s[0],
                        i = s[1];
                    return l.a.createElement(
                        "section",
                        null,
                        l.a.createElement("h3", null, "Undismissable custom Overlay"),
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
                                    i(!0);
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
                                    return i(!1);
                                },
                            },
                            l.a.createElement(
                                "div",
                                { style: { textAlign: "center" } },
                                l.a.createElement("h3", null, "Dialog box with custom content"),
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
                                        i(!1);
                                    },
                                },
                                "close",
                            ),
                        ),
                        l.a.createElement(
                            "button",
                            {
                                onClick: function () {
                                    return t(!n);
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
                                l.a.createElement("code", { className: "language-jsx" }, g),
                            ),
                        ),
                    );
                },
                g =
                    '\nimport React, { useState } from "react";\nimport Overlay from "react-overlay-component";\n\nconst Overlay = () => {\n    const [expand, setExpand] = useState(false);\n\n    const [isOpen, setOverlay] = useState(false);\n\n    const closeOverlay = () => setOverlay(false);\n\n    const configs = {\n        animate: true,\n        clickDismiss: false,\n        escapeDismiss: false,\n        showCloseIcon: false,\n        focusOutline: true,\n    };\n\n    return (\n        <section>\n            <h3>default overlay</h3>\n            <p>Renders an overlay/modal with default configuration</p>\n            <button\n                className="primary"\n                onClick={() => {\n                    setOverlay(true);\n                }}\n            >\n                open modal\n            </button>\n\n            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>\n                <div style={{ textAlign: "center" }}>\n                    <h3>Dialog box with custom content</h3>\n                    <p>sample text</p>\n                    <p>\n            Nullam cursus fermentum elit eu convallis. Donec non turpis eu dolor tristique mollis\n            nec vel mauris. Suspendisse rutrum, odio sed tristique ultricies, ante urna egestas\n            neque, non ornare ipsum erat eu felis. Proin nec enim sodales sem ullamcorper egestas.\n            Duis quis sagittis ante. Morbi nibh ex, lacinia ac convallis eu, sagittis ut turpis.\n            Etiam ultrices viverra diam, et dignissim dolor commodo rhoncus. Aenean euismod lacus eu\n            sapien dictum, a efficitur mi condimentum. Mauris non enim lacus. Nulla tempor et dolor\n            et fringilla. Praesent tempor sapien et porttitor aliquam. Phasellus vulputate libero\n            volutpat, sagittis eros quis, eleifend lacus. Etiam eget metus quis tortor egestas\n            lacinia.\n                    </p>\n                </div>\n\n                <button\n                    className="danger"\n                    onClick={() => {\n                        setOverlay(false);\n                    }}\n                >\n                    close\n                </button>\n            </Overlay>\n\n            <button onClick={() => setExpand(!expand)} className={"button-code"}>\n                {expand ? "Hide" : "Show"} Source code\n            </button>\n            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>\n                <pre className="line-numbers">\n                    <code className="language-jsx">{normalOverlayhtmlcode}</code>\n                </pre>\n            </div>\n        </section>\n    );\n};\n',
                b = function () {
                    const e = Object(a.useState)(!1),
                        n = e[0],
                        t = e[1],
                        s = Object(a.useState)(!1),
                        o = s[0],
                        i = s[1],
                        r = Object(a.useState)(!1),
                        u = r[0],
                        m = r[1];
                    return l.a.createElement(
                        "section",
                        null,
                        l.a.createElement("h3", null, "Overlay inside an overlay"),
                        l.a.createElement(
                            "button",
                            {
                                className: "primary",
                                onClick: function () {
                                    i(!0);
                                },
                            },
                            "open modal",
                        ),
                        l.a.createElement(
                            c.a,
                            {
                                configs: { animate: !0, showCloseIcon: !1, focusOutline: !0 },
                                isOpen: o,
                                closeOverlay: function () {
                                    return i(!1);
                                },
                            },
                            l.a.createElement(
                                c.a,
                                {
                                    configs: {},
                                    isOpen: u,
                                    closeOverlay: function () {
                                        return m(!1);
                                    },
                                },
                                l.a.createElement("h3", null, "Sample header"),
                                l.a.createElement("p", null, "text content"),
                            ),
                            l.a.createElement(
                                "div",
                                { style: { textAlign: "center" } },
                                l.a.createElement("h3", null, "Dialog box with custom content"),
                                l.a.createElement(
                                    "button",
                                    {
                                        className: "primary",
                                        onClick: function () {
                                            m(!0);
                                        },
                                    },
                                    "open modal",
                                ),
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
                                        i(!1);
                                    },
                                },
                                "close",
                            ),
                        ),
                        l.a.createElement(
                            "button",
                            {
                                onClick: function () {
                                    return t(!n);
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
                                l.a.createElement("code", { className: "language-jsx" }, E),
                            ),
                        ),
                    );
                },
                E =
                    '\nimport React, { useState } from "react";\nimport Overlay from "react-overlay-component";\n\nconst OverlayWithNested = () => {\n  const [expand, setExpand] = useState(false)\n\n  const [isOpen, setOverlay] = useState(false)\n\n  const closeOverlay = () => setOverlay(false)\n\n  const configs = {\n    animate: true,\n    showCloseIcon: false,\n    focusOutline: true,\n  }\n\n  const [isOpen1, setOverlay1] = useState(false)\n\n  const closeOverlay1 = () => setOverlay1(false)\n\n  const configs1 = {}\n\n  return (\n    <section>\n      <button\n        className="primary"\n        onClick={() => {\n          setOverlay(true)\n        }}\n      >\n        open modal\n      </button>\n\n      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>\n        <Overlay configs={configs1} isOpen={isOpen1} closeOverlay={closeOverlay1}>\n          <h3>Sample header</h3>\n          <p>text content</p>\n        </Overlay>\n        <div style={{ textAlign: "center" }}>\n          <h3>Dialog box with custom content</h3>\n          <button\n            className="primary"\n            onClick={() => {\n              setOverlay1(true)\n            }}\n          >\n            open modal\n          </button>\n          <p>sample text</p>\n          <p>\n            Nullam cursus fermentum elit eu convallis. Donec non turpis eu dolor tristique mollis\n            nec vel mauris. Suspendisse rutrum, odio sed tristique ultricies, ante urna egestas\n            neque, non ornare ipsum erat eu felis. Proin nec enim sodales sem ullamcorper egestas.\n            Duis quis sagittis ante. Morbi nibh ex, lacinia ac convallis eu, sagittis ut turpis.\n            Etiam ultrices viverra diam, et dignissim dolor commodo rhoncus. Aenean euismod lacus eu\n            sapien dictum, a efficitur mi condimentum. Mauris non enim lacus. Nulla tempor et dolor\n            et fringilla. Praesent tempor sapien et porttitor aliquam. Phasellus vulputate libero\n            volutpat, sagittis eros quis, eleifend lacus. Etiam eget metus quis tortor egestas\n            lacinia.\n          </p>\n        </div>\n\n        <button\n          className="danger"\n          onClick={() => {\n            setOverlay(false)\n          }}\n        >\n          close\n        </button>\n      </Overlay>\n    </section>\n  )\n}\n\n';
            n.default = function () {
                return (
                    Object(a.useEffect)(function () {
                        u.a.highlightAll();
                    }),
                    l.a.createElement(
                        s.a,
                        null,
                        l.a.createElement(o.a, { title: "more demo" }),
                        l.a.createElement(i.a, null),
                        l.a.createElement("h1", null, "Overlay demos with different configs"),
                        l.a.createElement(
                            "ul",
                            null,
                            l.a.createElement("li", null, l.a.createElement(m, null)),
                            l.a.createElement("li", null, l.a.createElement(d, null)),
                            l.a.createElement("li", null, l.a.createElement(f, null)),
                            l.a.createElement("li", null, l.a.createElement(y, null)),
                            l.a.createElement("li", null, l.a.createElement(b, null)),
                        ),
                    )
                );
            };
        },
        GHhE: function (e, n, t) {},
    },
]);
//# sourceMappingURL=component---src-pages-demo-more-js-e946eb6ad33c463470ee.js.map
