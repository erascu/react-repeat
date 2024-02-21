import React from "react";
import styles from './Skeleton.module.scss';
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (

    <ContentLoader
        className={styles.skeleton}
        speed={2}
        width={133}
        height={205}
        viewBox="0 0 133 205"
        backgroundColor="#ffffff"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="81" y="35" rx="0" ry="0" width="0" height="1" />
        <rect x="20" y="275" rx="10" ry="10" width="232" height="85" />
        <rect x="20" y="391" rx="10" ry="10" width="127" height="40" />
        <rect x="155" y="398" rx="10" ry="10" width="99" height="26" />
        <rect x="0" y="0" rx="5" ry="5" width="133" height="112" />
        <rect x="0" y="126" rx="5" ry="5" width="133" height="28" />
        <rect x="0" y="173" rx="5" ry="5" width="62" height="32" />
        <rect x="100" y="173" rx="5" ry="5" width="32" height="32" />
    </ContentLoader>
)

export default Skeleton;