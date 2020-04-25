import React, { Component } from "react";
import BackDrop from "./backDrop";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import CloseIcon from "./assets/close.svg";

export const STATES = {
    OPEN: "OPEN",
    OPENING: "OPENING",
    HIDDEN: "HIDDEN",
    CLOSED: "CLOSED",
    CLOSING: "CLOSING",
};

const DFAULT_TIMEOUT = 700;

/**
 * Updates classlist of body with scroll-lock class depending on flag val
 * if true, adds classlist
 * else removes the class
 * @param {Boolean} flag
 */
const updateDom = (flag) => {
    const body = document.getElementsByTagName("body")[0];
    if (flag) {
        body.classList.add(styles["scroll-lock"]);
    } else {
        body.classList.remove(styles["scroll-lock"]);
    }
};

/**
 * Focuses the element passed as param
 * @param {Element} el
 */
const updateFocus = (el) => el && el.focus();

class RootComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overlayState: STATES.HIDDEN,
            prevState: props.isOpen,
            initiator: null,
        };
        this.ref = React.createRef();
    }

    /**
     * This function class returns next state value based on isOpen value
     * if the prevState and isOpen are same, state update is not required.
     */
    static getDerivedStateFromProps(props, state) {
        const { isOpen, configs: { animate = true } = {} } = props;
        const { prevState } = state;

        if (isOpen === prevState) {
            return null;
        }

        if (isOpen) {
            updateDom(true);
            return {
                overlayState: !animate ? STATES.OPEN : STATES.OPENING,
                prevState: isOpen,
                initiator: document.activeElement,
            };
        } else {
            return {
                overlayState: !animate ? STATES.CLOSED : STATES.CLOSING,
                prevState: isOpen,
            };
        }
    }

    /**
     * Handles escape key press
     * if the overlay is open, then triggers close function
     * @param {KeyboardEvent} event
     */
    keyPress = (event) => {
        const code = event.keyCode ? event.keyCode : event.which;

        // if the escape key is pressed
        if (code === 27) {
            const { isOpen, closeOverlay } = this.props;
            // const { overlayState } = this.state;
            if (isOpen) {
                closeOverlay();
            }
        }
    };

    /**
     * Shifts focus to content div inside backdrop
     */
    shiftFocusToOverlay = () => {
        const node = this.ref.current;
        updateFocus(node);
    };

    /**
     * shifts focus to the initiating element i.e last active element
     * before overlay opened.
     * And remove the scroll-lock class from body classList
     * @param {JSX.Element} initiator
     */
    shiftFocusToEle = (initiator) => {
        updateFocus(initiator);
        updateDom(false);
    };

    /**
     * This lifecycle method updates the overlayDate to final
     * (from transition mode) if animate is true.
     * Otherwise just shifts focus to respective element based on overlayState
     */
    componentDidUpdate() {
        const { animate = true } = this.props.configs || {};
        const { overlayState, initiator } = this.state;

        if (!animate) {
            if (overlayState === STATES.OPEN) {
                this.shiftFocusToOverlay();
            } else {
                this.shiftFocusToEle(initiator);
            }
            return;
        }

        if (overlayState === STATES.OPENING) {
            this.shiftFocusToOverlay();
            setTimeout(() => {
                this.setState({
                    overlayState: STATES.OPEN,
                });
            }, DFAULT_TIMEOUT);
        } else if (overlayState === STATES.CLOSING) {
            this.shiftFocusToEle(initiator);
            setTimeout(() => {
                this.setState({
                    overlayState: STATES.CLOSED,
                });
            }, DFAULT_TIMEOUT);
        }
    }

    handleCloseOverlay = (e) => {
        e.preventDefault();
        if (this.props.closeOverlay) {
            this.props.closeOverlay();
        }
    };

    render() {
        const { children, isOpen, closeOverlay, showCloseIcon = true, configs = {} } = this.props;
        const {
            animate,
            top = 0,
            contentClass = "",
            clickDismiss = true,
            escapeDismiss = true,
            focusOutline = false,
        } = configs;
        const { overlayState } = this.state;

        const className = [
            styles["overlay-wrapper"],
            overlayState === STATES.HIDDEN ? styles["overlay-hidden"] : "",
            overlayState === STATES.OPEN ? styles["overlay-open"] : "",
            overlayState === STATES.OPENING ? styles["overlay-opening"] : "",
            overlayState === STATES.CLOSING ? styles["overlay-closing"] : "",
            overlayState === STATES.CLOSED ? styles["overlay-closed"] : "",
        ]
            .filter(Boolean)
            .join(" ");

        const attrs = {
            className,
            onKeyPress: escapeDismiss ? (e) => this.keyPress(e) : undefined,
            onKeyDown: escapeDismiss ? (e) => this.keyPress(e) : undefined,
        };

        const contentAttrs = {
            className: [
                showCloseIcon ? styles["overlay-content"] : "",
                focusOutline ? styles["with-outline"] : "",
                contentClass,
            ]
                .filter(Boolean)
                .join(" "),
            tabIndex: 0,
        };

        const style = {
            "--top": top,
        };

        return (
            <div {...attrs} style={style}>
                <BackDrop
                    overlayState={overlayState}
                    clickDismiss={clickDismiss}
                    closeOverlay={closeOverlay}
                >
                    <div ref={this.ref} {...contentAttrs}>
                        {closeOverlay && showCloseIcon ? (
                            <div
                                className={styles["overlay-close"]}
                                role="button"
                                tabIndex="0"
                                onClick={closeOverlay}
                                onKeyPress={this.handleCloseOverlay}
                                // onKeyDown={closeOverlay}
                                dangerouslySetInnerHTML={{ __html: CloseIcon }}
                            />
                        ) : null}

                        {children}
                    </div>
                </BackDrop>
            </div>
        );
    }
}

RootComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.any,
    configs: PropTypes.object,
    closeOverlay: PropTypes.func,
    showCloseIcon: PropTypes.bool,
};

export default RootComponent;
