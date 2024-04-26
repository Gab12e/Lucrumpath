import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Stats from './components/Stats';
import Why from './components/Why';
import Calculate from './components/Calculate';
import Trade from './components/Trade';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Tradingplan from './components/Tradingplan';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import SignUp from './components/SignUp';

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400
    });
  })

  return (
    <Router>

      <div className='overflow-hidden'>
        <Switch>
          <Route path="/Aboutus">
            <Header />
            <Aboutus />
            <Footer />
          </Route>
          <Route path="/Tradingplan">
            <Header />
            <Tradingplan />
            <Footer />
          </Route>
          <Route path="/Faqs">
            <Header />
            <Faqs />
            <Footer />
          </Route>
          <Route path="/Contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/SignUp">
            <Header />
            <SignUp />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Hero />
            <Stats />
            <Why />
            <Calculate />
            <Trade />
            <Features />
            <Newsletter />
            <Footer />
          </Route>
          {/* <div className='h-[500px]'></div> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
