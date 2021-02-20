import React from 'react'
import classes from './Loading.module.scss'

const LoadingIcon = () => {

    return (
        <div className="container-row spacing">
            <div className="item">
                <div className={classes.dot1} />
            </div>
            <div className="item">
                <div className={classes.dot2} />
            </div>
            <div className="item">
                <div className={classes.dot3} />
            </div>
        </div >
    )
}

export default LoadingIcon