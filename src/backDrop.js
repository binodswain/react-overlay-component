import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import { STATES } from "./index";

const backdrop = (props) => {
    const { overlayState, clickDismiss = true, closeOverlay } = props;

    const inTransition = overlayState === STATES.OPENING || overlayState === STATES.CLOSING;
    /**
     * Closes overlay when the backdrop is clicked and not
     * in transition mode (opening or closing)
     * @param {Event} e
     */
    const handleClick = (e) => {
        const isBackdrop = e.target.dataset && e.target.dataset.comp === "backdrop";
        const canClose = clickDismiss && !inTransition;
        if (canClose && isBackdrop) {
            closeOverlay();
        }
        e.stopPropagation();
    };

    return (
        <div className={styles["backdrop"]} data-comp="backdrop" onClick={handleClick}>
            {props.children}
        </div>
    );
};

backdrop.propTypes = {
    overlayState: PropTypes.string.isRequired,
    clickDismiss: PropTypes.bool,
    closeOverlay: PropTypes.func,
    children: PropTypes.element,
};
export default backdrop;
