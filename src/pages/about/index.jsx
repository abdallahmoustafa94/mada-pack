import MainLayout from '@layouts/Main';
import Navbar from '@components/Navbars/PaymentSolutionsNav';
import Screenshots from '@components/PaymentSolutions/Screenshots';
import Footer from '@components/PaymentSolutions/Footer';
import Head from 'next/head';
const About = ()=>{
  return(
    <MainLayout title={"مادا | من نحن"}>
      <Navbar />
      <main style={{paddingTop:'150px'}}>
        <div className='m-auto w-50'>
          <h1 className='text-center'>من نحن</h1>
          <img src="/assets/img/mada-icon.png" alt="" className='w-25 m-auto d-block'/>
        </div>
        <Screenshots />
      </main>
      <Footer />
    </MainLayout>
  )
}
export default About