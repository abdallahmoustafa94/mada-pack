import MainLayout from '@layouts/Main';
import Navbar from '@components/Navbars/PaymentSolutionsNav';
import Footer from '@components/PaymentSolutions/Footer';
import Shop from '@components/Shop';

const Products = ()=>{
  return(
    <MainLayout title="مادا | منتجاتنا">
    <Navbar />
    <main>
    <div className="m-auto " style={{background:`url(/assets/img/banner-inner.jpg)`, backgroundSize:"cover", height:"350px", width:"100%", backgroundPosition:"center ", backgroundRepeat:"no-repeat"}}>
    
        </div>
      <main className="shop-page style-5 style-grad">
          <Shop style="4" />
        </main>
    </main>
    <Footer />
  </MainLayout>
  )
}
export default Products