import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Gitfork from "../components/githubFork";
import Overlay from "react-overlay-component";
import Prism from "prismjs";

import "./demo-more.scss";

const NormalOverlay = () => {
    const [expand, setExpand] = useState(false);

    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {};

    return (
        <section>
            <h3>Default overlay</h3>
            <p>Renders an overlay/modal with default configuration</p>
            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
        open modal
            </button>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <h3>Sample header</h3>
                <p>text content</p>
            </Overlay>

            <button onClick={() => setExpand(!expand)} className={"button-code"}>
                {expand ? "Hide" : "Show"} Source code
            </button>
            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>
                <pre className="line-numbers">
                    <code className="language-jsx">{normalOverlayhtmlcode}</code>
                </pre>
            </div>
        </section>
    );
};

const normalOverlayhtmlcode = `
import React, { useState } from "react";
import Overlay from "react-overlay-component";

const Overlay = () => {
    const [expand, setExpand] = useState(false);

    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {};

    return (
        <section>
            <h3>default overlay</h3>
            <p>Renders an overlay/modal with default configuration</p>
            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
        open modal
            </button>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <h3>Sample header</h3>
                <p>text content</p>

            </Overlay>

            <button onClick={() => setExpand(!expand)} className={"button-code"}>
                {expand ? "Hide" : "Show"} Source code
            </button>
            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>
                <pre className="line-numbers">
                    <code className="language-jsx">{normalOverlayhtmlcode}</code>
                </pre>
            </div>
        </section>
    );
};
`;

const NormalOverlayNoAnimation = () => {
    const [expand, setExpand] = useState(false);

    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: false,
    };

    return (
        <section>
            <h3>Overlay with no animation</h3>
            <p>Renders an overlay/modal with no animate</p>
            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
        open modal
            </button>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <h3>Sample header</h3>
                <p>text content</p>
            </Overlay>

            <button onClick={() => setExpand(!expand)} className={"button-code"}>
                {expand ? "Hide" : "Show"} Source code
            </button>
            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>
                <pre className="line-numbers">
                    <code className="language-jsx">{NormalOverlayNoAnimationhtmlcode}</code>
                </pre>
            </div>
        </section>
    );
};

const NormalOverlayNoAnimationhtmlcode = `
import React, { useState } from "react";
import Overlay from "react-overlay-component";

const Overlay = () => {
    const [expand, setExpand] = useState(false);

    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: false
    };

    return (
        <section>
            <h3>default overlay</h3>
            <p>Renders an overlay/modal with default configuration</p>
            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
        open modal
            </button>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <h3>Sample header</h3>
                <p>text content</p>
            </Overlay>

            <button onClick={() => setExpand(!expand)} className={"button-code"}>
                {expand ? "Hide" : "Show"} Source code
            </button>
            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>
                <pre className="line-numbers">
                    <code className="language-jsx">{normalOverlayhtmlcode}</code>
                </pre>
            </div>
        </section>
    );
};
`;

const OverlayWithNoDismiss = () => {
    const [expand, setExpand] = useState(false);

    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
        clickDismiss: false,
        escapeDismiss: false,
    // focusOutline: false,
    };

    return (
        <section>
            <h3>Undismissable Overlay</h3>
            <p>Renders an overlay/modal that ignores click on backdrop and ESC key press.</p>
            <p>Can be closed programmatically.</p>
            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
        open modal
            </button>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <h3>Sample header</h3>
                <p>text content</p>
            </Overlay>

            <button onClick={() => setExpand(!expand)} className={"button-code"}>
                {expand ? "Hide" : "Show"} Source code
            </button>
            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>
                <pre className="line-numbers">
                    <code className="language-jsx">{OverlayWithNoDismisshtmlcode}</code>
                </pre>
            </div>
        </section>
    );
};

const OverlayWithNoDismisshtmlcode = `
import React, { useState } from "react";
import Overlay from "react-overlay-component";

const Overlay = () => {
    const [expand, setExpand] = useState(false);

    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
        clickDismiss: false,
        escapeDismiss: false,
    };

    return (
        <section>
            <h3>default overlay</h3>
            <p>Renders an overlay/modal with default configuration</p>
            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
                open modal
            </button>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <h3>Sample header</h3>
                <p>text content</p>
            </Overlay>

            <button onClick={() => setExpand(!expand)} className={"button-code"}>
                {expand ? "Hide" : "Show"} Source code
            </button>
            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>
                <pre className="line-numbers">
                    <code className="language-jsx">{normalOverlayhtmlcode}</code>
                </pre>
            </div>
        </section>
    );
};
`;

const OverlayWithNoDismissCustom = () => {
    const [expand, setExpand] = useState(false);

    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
        clickDismiss: false,
        escapeDismiss: false,
        showCloseIcon: false,
        focusOutline: true,
    };

    return (
        <section>
            <h3>Undismissable custom Overlay</h3>
            <p>Same as previous overlay with focus outline and close button.</p>

            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
        open modal
            </button>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <div style={{ textAlign: "center" }}>
                    <h3>Dialog box with custom content</h3>
                    <p>sample text</p>
                    <p>
            Nullam cursus fermentum elit eu convallis. Donec non turpis eu dolor tristique mollis
            nec vel mauris. Suspendisse rutrum, odio sed tristique ultricies, ante urna egestas
            neque, non ornare ipsum erat eu felis. Proin nec enim sodales sem ullamcorper egestas.
            Duis quis sagittis ante. Morbi nibh ex, lacinia ac convallis eu, sagittis ut turpis.
            Etiam ultrices viverra diam, et dignissim dolor commodo rhoncus. Aenean euismod lacus eu
            sapien dictum, a efficitur mi condimentum. Mauris non enim lacus. Nulla tempor et dolor
            et fringilla. Praesent tempor sapien et porttitor aliquam. Phasellus vulputate libero
            volutpat, sagittis eros quis, eleifend lacus. Etiam eget metus quis tortor egestas
            lacinia.
                    </p>
                </div>

                <button
                    className="danger"
                    onClick={() => {
                        setOverlay(false);
                    }}
                >
          close
                </button>
            </Overlay>

            <button onClick={() => setExpand(!expand)} className={"button-code"}>
                {expand ? "Hide" : "Show"} Source code
            </button>
            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>
                <pre className="line-numbers">
                    <code className="language-jsx">{OverlayWithNoDismissCustomhtmlcode}</code>
                </pre>
            </div>
        </section>
    );
};

const OverlayWithNoDismissCustomhtmlcode = `
import React, { useState } from "react";
import Overlay from "react-overlay-component";

const Overlay = () => {
    const [expand, setExpand] = useState(false);

    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
        clickDismiss: false,
        escapeDismiss: false,
        showCloseIcon: false,
        focusOutline: true,
    };

    return (
        <section>
            <h3>default overlay</h3>
            <p>Renders an overlay/modal with default configuration</p>
            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
                open modal
            </button>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <div style={{ textAlign: "center" }}>
                    <h3>Dialog box with custom content</h3>
                    <p>sample text</p>
                    <p>
            Nullam cursus fermentum elit eu convallis. Donec non turpis eu dolor tristique mollis
            nec vel mauris. Suspendisse rutrum, odio sed tristique ultricies, ante urna egestas
            neque, non ornare ipsum erat eu felis. Proin nec enim sodales sem ullamcorper egestas.
            Duis quis sagittis ante. Morbi nibh ex, lacinia ac convallis eu, sagittis ut turpis.
            Etiam ultrices viverra diam, et dignissim dolor commodo rhoncus. Aenean euismod lacus eu
            sapien dictum, a efficitur mi condimentum. Mauris non enim lacus. Nulla tempor et dolor
            et fringilla. Praesent tempor sapien et porttitor aliquam. Phasellus vulputate libero
            volutpat, sagittis eros quis, eleifend lacus. Etiam eget metus quis tortor egestas
            lacinia.
                    </p>
                </div>

                <button
                    className="danger"
                    onClick={() => {
                        setOverlay(false);
                    }}
                >
                    close
                </button>
            </Overlay>

            <button onClick={() => setExpand(!expand)} className={"button-code"}>
                {expand ? "Hide" : "Show"} Source code
            </button>
            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>
                <pre className="line-numbers">
                    <code className="language-jsx">{normalOverlayhtmlcode}</code>
                </pre>
            </div>
        </section>
    );
};
`;

const OverlayWithNested = () => {
    const [expand, setExpand] = useState(false);

    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
        showCloseIcon: false,
        focusOutline: true,
    };

    const [isOpen1, setOverlay1] = useState(false);

    const closeOverlay1 = () => setOverlay1(false);

    const configs1 = {};

    return (
        <section>
            <h3>Overlay inside an overlay</h3>

            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
        open modal
            </button>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <Overlay configs={configs1} isOpen={isOpen1} closeOverlay={closeOverlay1}>
                    <h3>Sample header</h3>
                    <p>text content</p>
                </Overlay>
                <div style={{ textAlign: "center" }}>
                    <h3>Dialog box with custom content</h3>
                    <button
                        className="primary"
                        onClick={() => {
                            setOverlay1(true);
                        }}
                    >
            open modal
                    </button>
                    <p>sample text</p>
                    <p>
            Nullam cursus fermentum elit eu convallis. Donec non turpis eu dolor tristique mollis
            nec vel mauris. Suspendisse rutrum, odio sed tristique ultricies, ante urna egestas
            neque, non ornare ipsum erat eu felis. Proin nec enim sodales sem ullamcorper egestas.
            Duis quis sagittis ante. Morbi nibh ex, lacinia ac convallis eu, sagittis ut turpis.
            Etiam ultrices viverra diam, et dignissim dolor commodo rhoncus. Aenean euismod lacus eu
            sapien dictum, a efficitur mi condimentum. Mauris non enim lacus. Nulla tempor et dolor
            et fringilla. Praesent tempor sapien et porttitor aliquam. Phasellus vulputate libero
            volutpat, sagittis eros quis, eleifend lacus. Etiam eget metus quis tortor egestas
            lacinia.
                    </p>
                </div>

                <button
                    className="danger"
                    onClick={() => {
                        setOverlay(false);
                    }}
                >
          close
                </button>
            </Overlay>

            <button onClick={() => setExpand(!expand)} className={"button-code"}>
                {expand ? "Hide" : "Show"} Source code
            </button>
            <div className={["expandable-section", expand ? "expand" : "close"].join(" ")}>
                <pre className="line-numbers">
                    <code className="language-jsx">{OverlayWithNestedhtmlcode}</code>
                </pre>
            </div>
        </section>
    );
};

const OverlayWithNestedhtmlcode = `
import React, { useState } from "react";
import Overlay from "react-overlay-component";

const OverlayWithNested = () => {
  const [expand, setExpand] = useState(false)

  const [isOpen, setOverlay] = useState(false)

  const closeOverlay = () => setOverlay(false)

  const configs = {
    animate: true,
    showCloseIcon: false,
    focusOutline: true,
  }

  const [isOpen1, setOverlay1] = useState(false)

  const closeOverlay1 = () => setOverlay1(false)

  const configs1 = {}

  return (
    <section>
      <button
        className="primary"
        onClick={() => {
          setOverlay(true)
        }}
      >
        open modal
      </button>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <Overlay configs={configs1} isOpen={isOpen1} closeOverlay={closeOverlay1}>
          <h3>Sample header</h3>
          <p>text content</p>
        </Overlay>
        <div style={{ textAlign: "center" }}>
          <h3>Dialog box with custom content</h3>
          <button
            className="primary"
            onClick={() => {
              setOverlay1(true)
            }}
          >
            open modal
          </button>
          <p>sample text</p>
          <p>
            Nullam cursus fermentum elit eu convallis. Donec non turpis eu dolor tristique mollis
            nec vel mauris. Suspendisse rutrum, odio sed tristique ultricies, ante urna egestas
            neque, non ornare ipsum erat eu felis. Proin nec enim sodales sem ullamcorper egestas.
            Duis quis sagittis ante. Morbi nibh ex, lacinia ac convallis eu, sagittis ut turpis.
            Etiam ultrices viverra diam, et dignissim dolor commodo rhoncus. Aenean euismod lacus eu
            sapien dictum, a efficitur mi condimentum. Mauris non enim lacus. Nulla tempor et dolor
            et fringilla. Praesent tempor sapien et porttitor aliquam. Phasellus vulputate libero
            volutpat, sagittis eros quis, eleifend lacus. Etiam eget metus quis tortor egestas
            lacinia.
          </p>
        </div>

        <button
          className="danger"
          onClick={() => {
            setOverlay(false)
          }}
        >
          close
        </button>
      </Overlay>
    </section>
  )
}

`;

const SecondPage = () => {
    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <Layout>
            <SEO title="more demo" />
            <Gitfork />
            <h1>Overlay demos with different configs</h1>
            <ul>
                <li>
                    <NormalOverlay />
                </li>
                <li>
                    <NormalOverlayNoAnimation />
                </li>
                <li>
                    <OverlayWithNoDismiss />
                </li>
                <li>
                    <OverlayWithNoDismissCustom />
                </li>
                <li>
                    <OverlayWithNested />
                </li>
            </ul>
        </Layout>
    );
};

export default SecondPage;
