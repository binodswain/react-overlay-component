import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Gitfork from "../components/githubFork";
import Overlay from "react-overlay-component";
import Prism from "prismjs";

const htmlcode = `import React, { useState } from "react";
import Overlay from "react-overlay-component";

function App() {
    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
        // clickDismiss: false,
        // escapeDismiss: false,
        // focusOutline: false,
    };

    return (
        <div>
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

                <button
                    className="danger"
                    onClick={() => {
                        setOverlay(false);
                    }}
                >
                    close modal
                </button>
            </Overlay>
        </div>
    );
}
`;

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey'
};

const IndexPage = () => {
    useEffect(() => {
    // call the highlightAll() function to style our code blocks
        Prism.highlightAll();
    }, []);

    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
    // clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
    };

    return (
        <Layout>
            <SEO title="react-overlay-component" />
            <Gitfork />
            <h1>react-overlay-component</h1>

            <section className="badges">
                <a href="https://www.npmjs.com/package/react-overlay-component">
                    <img src="https://badgen.net/npm/v/react-overlay-component" alt="npm version" />
                </a>
                <a href="https://github.com/binodswain/react-overlay-component/actions">
                    <img
                        src="https://github.com/binodswain/react-overlay-component/workflows/Test/badge.svg"
                        alt="test status"
                    />
                </a>
                <a href="https://github.com/binodswain/react-overlay-component/actions">
                    <img
                        src="https://github.com/binodswain/react-overlay-component/workflows/Build/badge.svg"
                        alt="build status"
                    />
                </a>
                <a href="https://github.com/binodswain/react-overlay-component/issues">
                    <img
                        src="https://badgen.net/github/open-issues/binodswain/react-overlay-component"
                        alt="issues"
                    />
                </a>
                <a href="https://github.com/binodswain/react-overlay-component/blob/master/LICENSE">
                    <img
                        src="https://badgen.net/github/license/binodswain/react-overlay-component"
                        alt="license"
                    />
                </a>
            </section>
            <section className="demo">
                <h2>Demo</h2>

                <h4>default overlay usage:</h4>
                <button
                    className="primary"
                    onClick={() => {
                        setOverlay(true);
                    }}
                >
          open modal
                </button>
                <br />

                <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                    <h2>Sample header</h2>
                    <p>text content</p>
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
                </Overlay>

                <Link to={"/demo-more"}>More demo</Link>
            </section>
            <section className="usage">
                <h3>Usage</h3>
                <div>Install the package.</div>
                <pre>
                    <code className="language-markup">npm install --save react-overlay-component</code>
                </pre>
                <div>Import the package.</div>
                <pre>
                    <code className="language-markup">import Overlay from "react-overlay-component";</code>
                </pre>
                <br />
                <div>example: </div>
                <br />
                <pre className="line-numbers">
                    <code className="language-jsx">{htmlcode}</code>
                </pre>
            </section>
            <section className="dataformat">
                <h3>Props</h3>
                <p>
          react-overlay-component requires isOpen, configs(optional), closeOverlay(optional) as
          props.
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>prop</th>
                            <th>type</th>
                            <th>optional</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>isOpen</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>flag to toggle the overlay</td>
                        </tr>
                        <tr>
                            <td>configs</td>
                            <td>object</td>
                            <td>true</td>
                            <td>config object to customize overlay behavior</td>
                        </tr>
                        <tr>
                            <td>closeOverlay</td>
                            <td>function</td>
                            <td>true</td>
                            <td>function that sets isOpen to false</td>
                        </tr>
                    </tbody>
                </table>
                <a
                    href="https://github.com/binodswain/react-overlay-component#configs"
                    target="_blank"
                    rel="noopener norefferer"
                >
          Learn more about config
                </a>
            </section>
        </Layout>
    );
};

export default IndexPage;
