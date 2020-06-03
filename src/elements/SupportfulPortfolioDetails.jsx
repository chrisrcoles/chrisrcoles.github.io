import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/joinsupportful'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/company/supportful'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/joinsupportful'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/joinsupportful'},
]

class DollaridePortfolioDetails extends Component{
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--6"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">
                                        How I helped Supportful go from no code to over 20,000 families helped</h2>
                                    <p>Supportful: A Case Study </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>Supportful</h2>
                                        <p className="subtitle">Supportful is a crowdsourcing platform, enabling people facing hardships to raise money and request help with supplies, meals and errands.</p>
                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <ul>
                                                <div className="port-view">
                                                    <span>Project Types</span>
                                                    <h4>Responsive Web Apps</h4>
                                                </div>

                                                <div className="port-view">
                                                    <span>Program</span>
                                                    <h4><a href="https://www.supportful.com" target="_blank">View Project</a></h4>
                                                </div>
                                            </ul>
                                        </div>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`} target="_blank">{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <h3>Challenge</h3>
                                        <p>Build a crowdsourcing platform that allows users to donate and raise money, request help and pay bills for themselves or others. </p>
                                        <h3>Why</h3>
                                        <p>People facing difficult times often could use the help of others in their community, including money, but also other things that might be helpful. Whether it be a tragic life circumstance like loosing a parent or a sudden serious illness, having the help from others can make a huge difference. By allowing individuals to create campaign pages to tell their story and raise funds for any type of hardship, from medical expenses, memorials and pets to tuition assistance, and missions trips, Supportful offers a less expensive, stressful and easier way for people to get help when they need it most.</p>
                                        <h3>What I Did</h3>
                                        <p>I took an idea from designs to execution: </p>
                                        <h4>Two new web applications</h4>
                                        <ul>
                                            <li>A crowdsourcing web app</li>
                                            <li>An API that allows users to crowdsource.</li>
                                        </ul>
                                        <h4>Agile Development Process</h4>
                                        <ul>
                                            <li>Worked to define foundational agile practices for engineering team.</li>
                                            <li>Led technical direction for original engineering team.</li>
                                        </ul>

                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="">
                                                            <img src="/assets/images/portfolio/supportful-portfolio-1.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <p>This shows the main feature of the web app, Care Pages, the dashboard through which the user manages the campaign.</p>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="">
                                                            <img src="/assets/images/portfolio/supportful-portfolio-2.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="">
                                                            <img src="/assets/images/portfolio/supportful-portfolio-3.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="">
                                                            <img src="/assets/images/portfolio/supportful-portfolio-4.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <br></br>
                                    <br></br>
                                    <div className="inner row">
                                        <div className="col-lg-12">
                                            <h3>My Impact</h3>
                                            <p>I helped get this company off to the right start by helping them establish a strong technical foundation and engineering culture. Since then, Supportful has gone on to help over 20,000 families raise millions of dollars through this platform.</p>
                                        </div>
                                    </div>
                                    {/*
                                    <div className="portfolio-thumb-inner">
                                        <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>


                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Portfolio Images"/>
                                        </div>

                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div>
                                    </div>
                                    */}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

                {/* Start Related Work */}
                {/*
                <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>Our More Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Digital Analysis</a></h4>
                                        <span className="category">Technique</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Plan Management</a></h4>
                                        <span className="category">PLANNING</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    *}
                {/* End Related Work */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <FooterTwo />


            </React.Fragment>
        )
    }
}
export default DollaridePortfolioDetails;
