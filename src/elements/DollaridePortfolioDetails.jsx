import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/dollaride1'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/company/dollaride'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/dollaride'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/dollaride'},
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
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">
                                        Consultant to Co-Founder: How startups are built from the ground up</h2>
                                    <p>Dollaride: A Case Study </p>
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
                                        <h2>Dollaride</h2>
                                        <p className="subtitle">Dollaride is a mobility company that provides a unique transportation service for people living in transit desserts.</p>
                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <ul>
                                                <div className="port-view">
                                                    <span>Project Types</span>
                                                    <h4>Mobile Apps (iOS, Android), Web Apps</h4>
                                                </div>

                                                <div className="port-view">
                                                    <span>Program</span>
                                                    <h4><a href="https://apps.apple.com/us/app/dollaride-passenger/id1234733176" target="_blank">View Project</a></h4>
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
                                        <p>Build a ride-sharing system for <a href="https://www.nytimes.com/2019/12/11/nyregion/dollar-van-app-nyc-dollaride.html"><span>dollar van</span></a> drivers and passengers that allows for passengers and drivers to complete ride requests, passengers to pay for a ride using their credit card, see a map of the nearest, live vans to them, see a real-time current location route tracker and estimated times of arrival that scales for 1200+ drivers, 120,000 daily passengers and 27 current routes. </p>
                                        <h3>Why</h3>
                                        <p>Since the 1980, dollar vans have catered to communities under-served by the city's subway and bus system, offering commuters in neighborhoods in Brooklyn, Bronx, Lower Manhattan, and Queens an affordable way to travel. Many New Yorkers live in 'transit deserts' - areas within an urban city that offer relatively low and/or poor transportation infrastructure. These are places where the nearest public transportation option is atleast a 15-minute walk. Dollaride offers a more reliable, efficient, flexible and fun way for passengers to connect with drivers and drivers to make more money. </p>
                                        <h3>What I Did</h3>
                                        <p>I took an idea from designs to execution: </p>
                                        <h4>Five new web applications</h4>
                                        <ul>
                                            <li>iOS and Android Passenger Mobile App</li>
                                            <li>iOS and Android Driver Mobile App</li>
                                            <li>An API that allows drivers and passengers to make requests, interact with databases and third-party services.</li>
                                            <li>A websocket application that allows the driver and passenger mobile apps to stay in sync.</li>
                                            <li>An operator web application that allows the business operator to review operations and earnings.</li>
                                        </ul>
                                        <h4>Created Engineering Team Process and Culture</h4>
                                        <ul>
                                            <li>Defined all processes around engineering culture, such as standards for code quality, automated testing and deployment, along with introducing agile practices like standups, retros, demos and sprint plannings.</li>
                                            <li>Led all strategy and direction for engineering team.</li>
                                        </ul>
                                        <h4>Built and Led a top-notch engineering team</h4>
                                        <ul>
                                            <li>Recruit and manage application and infrastructure engineering teams.</li>
                                            <li>Managed a series of overseas teams to deliver a project in time and budget.</li>
                                        </ul>

                                        <div className="row">
                                            {/* Start Single Portfolio */}
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="/portfolio-details">
                                                            <img src="/assets/images/portfolio/dollaride-flow-1.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Portfolio */}
                                            {/* Start Single Portfolio */}
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="/portfolio-details">
                                                            <img src="/assets/images/portfolio/dollaride-flow-2.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Portfolio */}
                                            {/* Start Single Portfolio */}
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="/portfolio-details">
                                                            <img src="/assets/images/portfolio/dollaride-flow-3.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Portfolio */}
                                            {/* Start Single Portfolio */}
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="/portfolio-details">
                                                            <img src="/assets/images/portfolio/dollaride-flow-4.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Portfolio */}
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <p>This is a portion of the ride request flow for a passenger on the iOS app, allowing a passenger to enter a destination, request a ride, identify their ride, pay and review a ride receipt.</p>
                                        <br></br>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="/portfolio-details">
                                                            <img src="/assets/images/portfolio/dollaride-driver-flow-1.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="/portfolio-details">
                                                            <img src="/assets/images/portfolio/dollaride-driver-flow-2.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="/portfolio-details">
                                                            <img src="/assets/images/portfolio/dollaride-driver-flow-3.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <p>This shows some of the iOS app screens, allowing a driver to see their earnings, passenger pickup and drop off lists, as well as their current location in relation to dropoffs and pickups.</p>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="/portfolio-details">
                                                            <img src="/assets/images/portfolio/dollaride-operator-flow-1.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="related-work text-center mt--30">
                                                    <div className="thumb">
                                                        <a href="/portfolio-details">
                                                            <img src="/assets/images/portfolio/dollaride-operator-flow-2.png" alt="Portfolio-images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner row">
                                        <div className="col-lg-12">
                                            <h3>My Impact</h3>
                                            <p>I took a highly complex idea and brought it to life in the form of a software platform that allows users to connect with each other in real-time. I led the efforts for the engineering, technical strategy and recruiting of the engineering team. I delivered a product that has ultimately gone on from $0 revenue to $500K in annual revenue. Ultimately, the person who hired me as a part time consultant ended up asking me to be their co-founder and partner to lead the engineering efforts in an expanded role.</p>
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
