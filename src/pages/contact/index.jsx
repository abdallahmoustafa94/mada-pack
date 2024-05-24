import MainLayout from '@layouts/Main';
import Navbar from '@components/Navbars/PaymentSolutionsNav';
import Form from '@components/Contact/Form';
import Map from '@components/Contact/Map';
import Footer from '@components/PaymentSolutions/Footer';

const Contact = ()=>{
  return(
    <MainLayout title="مادا | اتصل بنا">
      <Navbar />
      <main className="contact-page style-5" >
      <div className="m-auto " style={{background:`url(/assets/img/banner-inner.jpg)`, backgroundSize:"cover", height:"350px", width:"100%", backgroundPosition:"center ", backgroundRepeat:"no-repeat"}}>
    
    </div>
          <Form style="5" />
          <Map />
          <Footer />
        </main>
    </MainLayout>
  )
}

export default Contact