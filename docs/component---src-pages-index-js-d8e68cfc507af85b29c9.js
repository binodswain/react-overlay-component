(window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    {
        RXBc: function (e, t, a) {
            
            a.r(t);
            const n = a("q1tI"),
                l = a.n(n),
                r = a("Wbzz"),
                o = a("Bl7J"),
                c = a("vrFN"),
                s = a("TwNY"),
                i = a("QLbG"),
                m = a("jHpe"),
                u = a.n(m);
            a("y1X9"), a("QWvX"), a("ZgVT"), a("bPOv"), a("85O/"), a("CjHp"), a("hL/g");
            t.default = function () {
                Object(n.useEffect)(function () {
                    u.a.highlightAll();
                }, []);
                const e = Object(n.useState)(!1),
                    t = e[0],
                    a = e[1];
                return l.a.createElement(
                    o.a,
                    null,
                    l.a.createElement(c.a, { title: "react-overlay-component" }),
                    l.a.createElement(s.a, null),
                    l.a.createElement("h1", null, "react-overlay-component"),
                    l.a.createElement(
                        "section",
                        { className: "badges" },
                        l.a.createElement(
                            "a",
                            {
                                href:
                                    "https://github.com/binodswain/react-overlay-component/actions",
                            },
                            l.a.createElement("img", {
                                src:
                                    "https://github.com/binodswain/react-overlay-component/workflows/Test/badge.svg",
                                alt: "test status",
                            }),
                        ),
                        l.a.createElement(
                            "a",
                            {
                                href:
                                    "https://github.com/binodswain/react-overlay-component/actions",
                            },
                            l.a.createElement("img", {
                                src:
                                    "https://github.com/binodswain/react-overlay-component/workflows/Build/badge.svg",
                                alt: "build status",
                            }),
                        ),
                        l.a.createElement(
                            "a",
                            {
                                href:
                                    "https://github.com/binodswain/react-overlay-component/issues",
                            },
                            l.a.createElement("img", {
                                src:
                                    "https://badgen.net/github/open-issues/binodswain/react-overlay-component",
                                alt: "issues",
                            }),
                        ),
                        l.a.createElement(
                            "a",
                            {
                                href:
                                    "https://github.com/binodswain/react-overlay-component/blob/master/LICENSE",
                            },
                            l.a.createElement("img", {
                                src:
                                    "https://badgen.net/github/license/binodswain/react-overlay-component",
                                alt: "license",
                            }),
                        ),
                    ),
                    l.a.createElement(
                        "section",
                        { className: "demo" },
                        l.a.createElement("h2", null, "Demo"),
                        l.a.createElement("h4", null, "default overlay usage:"),
                        l.a.createElement(
                            "button",
                            {
                                className: "primary",
                                onClick: function () {
                                    a(!0);
                                },
                            },
                            "open modal",
                        ),
                        l.a.createElement("br", null),
                        l.a.createElement(
                            i.a,
                            {
                                configs: { animate: !0 },
                                isOpen: t,
                                closeOverlay: function () {
                                    return a(!1);
                                },
                            },
                            l.a.createElement("h2", null, "Sample header"),
                            l.a.createElement("p", null, "text content"),
                            l.a.createElement(
                                "p",
                                null,
                                "Nullam cursus fermentum elit eu convallis. Donec non turpis eu dolor tristique mollis nec vel mauris. Suspendisse rutrum, odio sed tristique ultricies, ante urna egestas neque, non ornare ipsum erat eu felis. Proin nec enim sodales sem ullamcorper egestas. Duis quis sagittis ante. Morbi nibh ex, lacinia ac convallis eu, sagittis ut turpis. Etiam ultrices viverra diam, et dignissim dolor commodo rhoncus. Aenean euismod lacus eu sapien dictum, a efficitur mi condimentum. Mauris non enim lacus. Nulla tempor et dolor et fringilla. Praesent tempor sapien et porttitor aliquam. Phasellus vulputate libero volutpat, sagittis eros quis, eleifend lacus. Etiam eget metus quis tortor egestas lacinia.",
                            ),
                        ),
                        l.a.createElement(r.a, { to: "/demo-more" }, "More demo"),
                    ),
                    l.a.createElement(
                        "section",
                        { className: "usage" },
                        l.a.createElement("h3", null, "Usage"),
                        l.a.createElement("div", null, "Install the package."),
                        l.a.createElement(
                            "pre",
                            null,
                            l.a.createElement(
                                "code",
                                { className: "language-markup" },
                                "npm install --save react-overlay-component",
                            ),
                        ),
                        l.a.createElement("div", null, "Import the package."),
                        l.a.createElement(
                            "pre",
                            null,
                            l.a.createElement(
                                "code",
                                { className: "language-markup" },
                                'import Overlay from "react-overlay-component";',
                            ),
                        ),
                        l.a.createElement("br", null),
                        l.a.createElement("div", null, "example: "),
                        l.a.createElement("br", null),
                        l.a.createElement(
                            "pre",
                            { className: "line-numbers" },
                            l.a.createElement(
                                "code",
                                { className: "language-jsx" },
                                'import React, { useState } from "react";\nimport Overlay from "react-overlay-component";\n\nfunction App() {\n    const [isOpen, setOverlay] = useState(false);\n\n    const closeOverlay = () => setOverlay(false);\n\n    const configs = {\n        animate: true,\n        // clickDismiss: false,\n        // escapeDismiss: false,\n        // focusOutline: false,\n    };\n\n    return (\n        <div>\n            <button\n                className="primary"\n                onClick={() => {\n                    setOverlay(true);\n                }}\n            >\n                open modal\n            </button>\n\n            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>\n                <h2>Sample header</h2>\n                <p>text content</p>\n\n                <button\n                    className="danger"\n                    onClick={() => {\n                        setOverlay(false);\n                    }}\n                >\n                    close modal\n                </button>\n            </Overlay>\n        </div>\n    );\n}\n',
                            ),
                        ),
                    ),
                    l.a.createElement(
                        "section",
                        { className: "dataformat" },
                        l.a.createElement("h3", null, "Props"),
                        l.a.createElement(
                            "p",
                            null,
                            "react-overlay-component requires isOpen, configs(optional), closeOverlay(optional) as props.",
                        ),
                        l.a.createElement(
                            "table",
                            null,
                            l.a.createElement(
                                "thead",
                                null,
                                l.a.createElement(
                                    "tr",
                                    null,
                                    l.a.createElement("th", null, "prop"),
                                    l.a.createElement("th", null, "type"),
                                    l.a.createElement("th", null, "optional"),
                                    l.a.createElement("th", null, "description"),
                                ),
                            ),
                            l.a.createElement(
                                "tbody",
                                null,
                                l.a.createElement(
                                    "tr",
                                    null,
                                    l.a.createElement("td", null, "isOpen"),
                                    l.a.createElement("td", null, "boolean"),
                                    l.a.createElement("td", null, "false"),
                                    l.a.createElement("td", null, "flag to toggle the overlay"),
                                ),
                                l.a.createElement(
                                    "tr",
                                    null,
                                    l.a.createElement("td", null, "configs"),
                                    l.a.createElement("td", null, "object"),
                                    l.a.createElement("td", null, "true"),
                                    l.a.createElement(
                                        "td",
                                        null,
                                        "config object to customize overlay behavior",
                                    ),
                                ),
                                l.a.createElement(
                                    "tr",
                                    null,
                                    l.a.createElement("td", null, "closeOverlay"),
                                    l.a.createElement("td", null, "function"),
                                    l.a.createElement("td", null, "true"),
                                    l.a.createElement(
                                        "td",
                                        null,
                                        "function that sets isOpen to false",
                                    ),
                                ),
                            ),
                        ),
                        l.a.createElement(
                            "a",
                            {
                                href:
                                    "https://github.com/binodswain/react-overlay-component#configs",
                                target: "_blank",
                                rel: "noopener norefferer",
                            },
                            "Learn more about config",
                        ),
                    ),
                );
            };
        },
    },
]);
//# sourceMappingURL=component---src-pages-index-js-d8e68cfc507af85b29c9.js.map
