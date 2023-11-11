import MainLayout from '@layouts/Main';
import Navbar from '@components/Navbars/PaymentSolutionsNav';
import Footer from '@components/PaymentSolutions/Footer';
import Shop from '@components/Shop';

const Products = ()=>{
  return(
    <MainLayout title="مادا | منتجاتنا">
    <Navbar />
    <main style={{paddingTop:'150px'}}>
      <div className='m-auto w-50'>
        <h1 className='text-center'>منتجاتنا</h1>
        <img src="/assets/img/mada-icon.png" alt="" className='w-25 m-auto d-block'/>
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