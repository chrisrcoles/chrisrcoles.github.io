import React, { Component } from "react";

class Brand extends Component{
    render(){
        const {branstyle } = this.props;
        return(
            <React.Fragment>
                <ul className={`brand-list ${branstyle}`}>
                    <li>
                        <a href="https://www.dollaride.com" target="_blank">
                            <div><img src="/assets/images/brand/brand-01.png" alt="Logo Images"/></div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.truss.works" target="_blank">
                            <div>
                                <img src="/assets/images/brand/brand-02.png" alt="Logo Images"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.forbes.com" target="_blank">
                            <div>
                                <img src="/assets/images/brand/brand-03.png" alt="Logo Images"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.supportful.com" target="_blank">
                            <div>
                                <img src="/assets/images/brand/brand-04.png" alt="Logo Images"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://defense.gov" target="_blank">
                            <div>
                                <img src="/assets/images/brand/brand-05.png" alt="Logo Images"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://645ventures.com" target="_blank">
                            <div>
                                <img src="/assets/images/brand/brand-06.png" alt="Logo Images"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://b8ta.com" target="_blank">
                            <div>
                                <img src="/assets/images/brand/brand-07.png" alt="Logo Images"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://vynedental.com/blog/vyne-dental-acquires-simplifeye/" target="_blank">
                            <div>
                                <img src="/assets/images/brand/brand-08.svg" alt="Logo Images"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="http://dnainfo.com" target="_blank">
                            <div>
                                <img src="/assets/images/brand/brand-09.svg" alt="Logo Images"/>
                            </div>
                        </a>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default Brand;