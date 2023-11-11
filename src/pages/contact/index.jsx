import MainLayout from '@layouts/Main';
import Navbar from '@components/Navbars/PaymentSolutionsNav';
import Form from '@components/Contact/Form';
import Map from '@components/Contact/Map';
import Footer from '@components/PaymentSolutions/Footer';

const Contact = ()=>{
  return(
    <MainLayout title="مادا | اتصل بنا">
      <Navbar />
      <main className="contact-page style-5" style={{paddingTop:'150px'}}>
          <Form style="5" />
          <Map />
          <Footer />
        </main>
    </MainLayout>
  )
}

export default Contact