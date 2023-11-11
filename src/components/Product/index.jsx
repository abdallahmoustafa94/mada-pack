import ProductHead from './ProductHead'
import ProductImages from './ProductImages'
import MainInfo from './MainInfo'
import ColorSelect from './ColorSelect'
import AddToCart from './AddToCart'
import MoreInfo from './MoreInfo'
import SocialIcons from './SocialIcons'

import productData from '@data/App/product.json';
import productDataRTL from '@data/App/product-rtl.json';

const Product = ({ style = "4", rtl ,product}) => {
  const data = product
console.log(data)
  return (
    <section className="product" style={{paddingTop:150,paddingBottom:50}}>
      <div className="container">
        {/* <ProductHead productName={data?.title} rtl={rtl} /> */}
        <div className="content">
          <div className="row gx-5">
            <ProductImages productImages={data?.images} />
            <div className="col-lg-6">
              <div className="product-info">
                <MainInfo title={data?.title} desc={data?.desc} rtl={rtl} />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product