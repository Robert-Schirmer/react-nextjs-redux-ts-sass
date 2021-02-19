import React from 'react'
// @ts-ignore
import ReactLogo from '../imgs/react-logo.png'
// @ts-ignore
import NextLogo from '../imgs/nextjs-logo.png'
// @ts-ignore
import ReduxLogo from '../imgs/redux-logo.png'
// @ts-ignore
import TSLogo from '../imgs/ts-logo.png'
// @ts-ignore
import SassLogo from '../imgs/sass-logo.png'


const Logos = () => {

    return (
        <div className="container-row align-center spacing-1">
            <div className="item">
                <a href="https://reactjs.org/" target="_blank">
                    <img src={ReactLogo} className="logo-img" />
                </a>
            </div>
            <div className="item">
                <a href="https://redux.js.org/" target="_blank">
                    <img src={ReduxLogo} className="logo-img" />
                </a>
            </div>
            <div className="item">
                <a href="https://nextjs.org/" target="_blank">
                    <img src={NextLogo} className="logo-img" />
                </a>
            </div>
            <div className="item">
                <a href="https://www.typescriptlang.org/" target="_blank">
                    <img src={TSLogo} className="logo-img" />
                </a>
            </div>
            <div className="item">
                <a href="https://sass-lang.com/" target="_blank">
                    <img src={SassLogo} className="logo-img" />
                </a>
            </div>
        </div>
    )
}

export default Logos
