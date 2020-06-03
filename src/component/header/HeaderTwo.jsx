import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import {FaTwitter, FaGithub ,FaInstagram ,FaFacebookF , FaLinkedinIn } from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/chrisrcoles'},
    {Social: <FaGithub /> , link: 'https://www.github.com/in/chrisrcoles'},
    // {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    // {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/chrisrcoles'},
]

class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
        }
        return(
            <header className={`header-area header-style-two header--transparent ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href="/">
                                <img src="/assets/images/logo/1214-logo.png" alt="1214"/>
                            </a>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            <ul className="mainmenu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link smooth to="/#about" >About</Link></li>
                                <li><Link smooth to="/#clients" >Clients</Link></li>
                                <li><Link smooth to="/#case-studies" >Case Studies</Link>
                                    <ul className="submenu">
                                        <li><Link to="/case-study/dollaride">Dollaride</Link></li>
                                        {/*<li><Link to="/projects/truss">Truss</Link></li>*/}
                                        <li><Link to="/case-study/supportful">Supportful</Link></li>
                                    </ul>
                                </li>
                                <li><Link smooth to="/#contact" >Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;