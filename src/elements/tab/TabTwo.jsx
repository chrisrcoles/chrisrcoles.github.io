import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Experience",
        tab3 = "Publications",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    Engineering leadership and management
                                                    Successful in managing projects and teams from start to completion.
                                                </li>
                                                <li>
                                                    Software architecture, engineering and development
                                                    Proven technical leader with deep experience across a wide range of technologies.
                                                </li>
                                                <li>
                                                    Business strategy and technical execution
                                                    Highly effective communicator and trust builder that joins juncture of business and engineering.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    CTO, Technical Co-founder<span> - DollaRide</span> 2017 - Current
                                                </li>
                                                <li>
                                                    Software Engineering Consultant<span> - Truss Software </span> 2018 - Current
                                                </li>
                                                <li>
                                                    Software Engineering Consultant<span> - Supportful </span> 2018
                                                </li>
                                                <span>***Complete resume available upon request.***</span>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="https://www.forbes.com/sites/laurencebradford/2017/06/30/changing-careers-in-20-weeks-with-chris-coles/#72b1dfe6e057" target="_blank">Forbes <span>Changing Tech Careers in 20 Weeks with Chris Coles</span></a>
                                               </li>
                                               <li>
                                                   <a href="https://abernathymagazine.com/tech-spotlight-chris-coles/" target="_blank">Abernathy Magazine <span>Tech Spotlight: Christopher Coles</span></a>
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   BS in Political Science, Economics, Anthropology<span> - Columbia University, New York, NY</span> - 2011 (not completed)
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;