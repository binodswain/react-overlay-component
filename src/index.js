import React, { PureComponent } from "react";
// import PropTypes from "prop-types";

import style from "./styles.scss";

class RootComponent extends PureComponent {
    static propTypes = {};

    render() {
        return <div className={style["app"]}>Hello from react-lib-template</div>;
    }
}

let rootComponent;

if (typeof window !== "undefined") {
    rootComponent = RootComponent;
}

export default rootComponent;
