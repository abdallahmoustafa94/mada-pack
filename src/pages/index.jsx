import React, { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/PaymentSolutionsNav';
import Header from '@components/PaymentSolutions/Header';

import ChooseUs from '@components/PaymentSolutions/ChooseUs';
import Screenshots from '@components/PaymentSolutions/Screenshots';

import Footer from '@components/PaymentSolutions/Footer';

const HomePaymentSolutions = () => {
  useEffect(() => {
    document.body.classList.add('home-style-14');
    return () => document.body.classList.remove('home-style-14');
  }, []);

  return (
    <>
      <Head>
        <title>مادا - رواد صناعة البلاستيك في مصر</title>
      </Head>

      <MainLayout>
        <Navbar />
        <Header />
        <main>
          {/* <Clients /> */}
          <Screenshots />
          {/* <Features /> */}
          <ChooseUs />
          {/* <Numbers />
          <About />
          <Contact />
          <Testimonials />
          <Blog /> */}
        </main>
        <Footer />
      </MainLayout>
    </>
  )
}

export default HomePaymentSolutions;