import React, { Component } from "react";
import BackDrop from "./backDrop";
import PropTypes from "prop-types";
import styles from "./styles.scss";

export const STATES = {
    OPEN: "OPEN",
    OPENING: "OPENING",
    HIDDEN: "HIDDEN",
    CLOSED: "CLOSED",
    CLOSING: "CLOSING",
};

const updateDom = (flag) => {
    const html = document.getElementsByTagName("body")[0];
    if (flag) {
        html.classList.add("scroll-lock");
    } else {
        html.classList.remove("scroll-lock");
    }
};

class RootComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overlayState: STATES.HIDDEN,
            prevState: props.isOpen,
        };
    }
    setOverlayState = (val) => {
        this.setState({
            overlayState: val,
        });
    };

    setPrevState = (val) => {
        this.setState({
            prevState: val,
        });
    };

    static getDerivedStateFromProps(props, state) {
        const { isOpen } = props;
        const { prevState } = state;
        if (isOpen === prevState) {
            return null;
        }
        if (isOpen) {
            updateDom(true);
            return {
                overlayState: STATES.OPENING,
                prevState: isOpen,
            };
        } else {
            return {
                overlayState: STATES.CLOSING,
                prevState: isOpen,
            };
        }
    }

    componentDidUpdate() {
        const { overlayState } = this.state;
        const that = this;
        if (overlayState === STATES.OPENING) {
            setTimeout(() => {
                this.setState({
                    overlayState: STATES.OPEN,
                });
            }, 1000);
        }
        if (overlayState === STATES.CLOSING) {
            setTimeout(() => {
                this.setState(
                    {
                        overlayState: STATES.CLOSED,
                    },
                    () => updateDom(false),
                );
            }, 1000);
        }
    }

    render() {
        const { children, isOpen, closeOverlay, configs = {} } = this.props;
        const { animate, top, contentClass } = configs;
        const { overlayState, prevState } = this.state;
        const className = [
            styles["overlay-wrapper"],
            styles["react-overlay"],
            overlayState === STATES.HIDDEN ? styles["react-hidden"] : "",
            overlayState === STATES.OPEN ? styles["react-open"] : "",
            overlayState === STATES.OPENING ? styles["react-opening"] : "",
            overlayState === STATES.CLOSING ? styles["react-closing"] : "",
            overlayState === STATES.CLOSED ? styles["react-closed"] : "",
        ]
            .filter(Boolean)
            .join(" ");
        return (
            <div className={className}>
                <>
                    <BackDrop overlayState={overlayState} />
                    <div className={contentClass || styles["overlay-content"]}>
                        {closeOverlay ? (
                            <div
                                className={styles["overlay-close"]}
                                role="button"
                                onClick={closeOverlay}
                            ></div>
                        ) : null}

                        {children}
                    </div>
                </>
            </div>
        );
    }
}

RootComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.any,
    configs: PropTypes.object,
    closeOverlay: PropTypes.func,
};

export default RootComponent;
