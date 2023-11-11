import {useState, useEffect } from "react";
import { useRouter } from "next/router"
import shopData from '@data/App/shop.json';
import MainLayout from '@layouts/Main';
import Navbar from '@components/Navbars/PaymentSolutionsNav';
import Footer from '@components/PaymentSolutions/Footer';
import Product from "@components/Product";

const singleProduct = ({params})=>{
  const [productData, setProductData] = useState(null)
  const router = useRouter()
  const data = shopData
  const getData = ()=>{
   const filterData =  data.find(item=>item.id === router.query.id)
   setProductData(filterData)
  }

  useEffect(()=>{
    getData()
  },[])
  return(
    <>
   <MainLayout title={`مادا | ${productData?.title}`}>
    <Navbar />
    <main className="product-page style-5">

          <Product product={productData}  />
    </main>
    <Footer />
  </MainLayout>
    </>
  )
}

export default singleProduct