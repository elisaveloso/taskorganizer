import React from 'react';


import Header from '../../components/Header';
import LandingText from '../../components/LandingText';
import Footer from '../../components/Footer';

import './styles.css';

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <Header />
      <LandingText />
      <Footer />
    </div>
  );
}
