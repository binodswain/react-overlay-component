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
            data-comp="backdrop"
            onClick={
                clickDismiss && !inTransition
                    ? (e) => {
                        if (e.target.dataset && e.target.dataset.comp === "backdrop") {
                            closeOverlay();
                        }
                    }
                    : undefined
            }
        >
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
