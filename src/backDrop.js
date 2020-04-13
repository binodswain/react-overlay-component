import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import { STATES } from "./index";

const backdrop = (props) => {
    const { overlayState, clickDismiss = true, closeOverlay } = props;
    const inTransition = overlayState === STATES.OPENING || overlayState === STATES.CLOSING;

    return (
        <div
            className={styles["backdrop"]}
            onClick={clickDismiss && !inTransition ? () => closeOverlay() : undefined}
        ></div>
    );
};

backdrop.propTypes = {
    overlayState: PropTypes.string.isRequired,
    clickDismiss: PropTypes.bool,
    closeOverlay: PropTypes.func,
};
export default backdrop;
