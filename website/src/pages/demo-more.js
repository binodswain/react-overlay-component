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
            <h2>Default overlay</h2>
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
                <h2>Sample header</h2>
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
            <h2>default overlay</h2>
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
                <h2>Sample header</h2>
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
            <h2>Overlay with no animation</h2>
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
                <h2>Sample header</h2>
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
            <h2>default overlay</h2>
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
                <h2>Sample header</h2>
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
            <h2>Undismissable Overlay</h2>
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
                <h2>Sample header</h2>
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
            <h2>default overlay</h2>
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
                <h2>Sample header</h2>
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
            <h2>Undismissable custom Overlay</h2>
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
                    <h2>Dialog box with custom content</h2>
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
            <h2>default overlay</h2>
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
                    <h2>Dialog box with custom content</h2>
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

const SecondPage = () => {
    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <Layout>
            <SEO title="more demo" />
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
            </ul>
        </Layout>
    );
};

const htmlcode = `import React, { useEffect, useState } from "react"
import Player from "react-howler-player";
const Component = () => {
  const [filepath, setFilepath] = useState('')
  const [name, setName] = useState('')
  const onChange = (event) => {
    if (!event.target.files[0]) {
      return
    }
    let filepath = URL.createObjectURL(event.target.files[0]);
    const {
      type,
      name
    } = event.target.files[0];
    setFilepath(filepath)
    setName(name)
  }
  const removeAudio = (e) => {
    e.preventDefault();
    setFilepath('')
    setName('')
  }
  return (
    <div>
      <div className="form-element">
        <input type="file" 
            className="file-input" 
            id="file-input" 
            name="audio_file" 
            accept="audio/*" 
            onChange={(e) => onChange(e)}
            id="audio-file"
            hidden
        />
        <label htmlFor="audio-file">
            <div className="form-label">
                {name || 'Select an audio file'} 
            </div>
            {filepath ? 
                <div className="icon-close" onClick={(e)=>removeAudio(e)}>
                    <i className="material-icons">
                        close
                    </i>
                </div>
                :null
            }
        </label>
      </div>
      {filepath ? 
          <Player
              src={[filepath]}
              format={['wav', 'mp3']}
          /> : null
      }
    </div>
  )
}`;
export default SecondPage;
