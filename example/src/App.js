import React, { useState } from "react";
import "./App.scss";
import Overlay from "react-overlay-component";

function App() {
    const [isOpen, setOverlay] = useState(false);
    const [isOpen1, setOverlay1] = useState(false);

    const closeOverlay = () => setOverlay(false);
    const closeOverlay1 = () => setOverlay1(false);

    const configs = {
        animate: false,
        top: 65,
        contentClass: "container overlay-content",
    };

    return (
        <div>
            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
                open modal 0
            </button>
            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                Hello there <br />
                <button
                    className="danger"
                    onClick={() => {
                        setOverlay(false);
                    }}
                >
                    close
                </button>
            </Overlay>
            <br />
            <br />
            <br />
            <button
                className="primary"
                onClick={() => {
                    setOverlay1(true);
                }}
            >
                open modal 1
            </button>
            <Overlay configs={configs} isOpen={isOpen1} closeOverlay={closeOverlay1}>
                Hello there <br />
                <button
                    className="danger"
                    onClick={() => {
                        setOverlay1(false);
                    }}
                >
                    close
                </button>
            </Overlay>
        </div>
    );
}

export default App;
