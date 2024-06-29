import React, {Component} from 'react';

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about" style={{backgroundImage: 'linear-gradient(to right, #4286f4, #373B44)'}}>
                <div className="row">
                    <div className="four columns">
                        <img className="profile-pic" src="/images/WillieSucksDrumbs.jpg" alt=""/>
                    </div>
                    <div className="four columns">
                        <img className="profile-pic" src="/images/WillieSucksDrumbs.jpg" alt=""/>
                    </div>
                    <div className="four columns">
                        <img className="profile-pic" src="/images/WillieSucksDrumbs.jpg" alt=""/>
                    </div>
                    <div className="twelve columns main-col">
                        <h2>About Me</h2>
                        <p style={{color: 'white'}}>
                            {
                                resumeData.aboutme
                            }
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p style={{color: 'white'}} className="address">
                                    <span>{resumeData.name}</span>
                                    <br></br>
                                    <span>{resumeData.address}</span>
                                    <br></br>
                                    <span>{resumeData.website}</span>
                                    <br></br>
                                    <span>{resumeData.phone}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
