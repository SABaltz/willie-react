import React, {Component} from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header resumeData={resumeData}/>
                <About resumeData={resumeData}/>
                {/*<Resume resumeData={resumeData}/>*/}
                <Portfolio resumeData={resumeData}/>
                {/*<Testimonials resumeData={resumeData}/>*/}
                {/*<ContactUs resumeData={resumeData}/>*/}
                <Footer resumeData={resumeData}/>
            </div>
        );
    }
}

export default App;
