import React, { useState } from "react";
import "./App.scss";
import Overlay from "react-overlay-component";

function App() {
    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

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
                open
            </button>
            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                Hello there <br/>
                <button
                    className="danger"
                    onClick={() => {
                        setOverlay(false);
                    }}
                >
                    close
                </button>
            </Overlay>
        </div>
    );
}

export default App;
