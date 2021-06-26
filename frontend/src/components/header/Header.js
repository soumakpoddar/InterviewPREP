import React from 'react';
import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://st2.depositphotos.com/1012885/9938/i/950/depositphotos_99389832-stock-photo-large-grunge-textures-and-backgrounds.jpg" alt="Home" />
        </div>
    )
}
