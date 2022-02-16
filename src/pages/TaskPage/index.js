import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';
import HomeApp from '../../components/HomeApp';

export default function TaskPage() {
  return (
    <div className="task-page-container">
      <Header />
      <HomeApp />
      <Footer />
    </div>
  );
}
