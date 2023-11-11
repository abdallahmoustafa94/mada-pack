import { useState } from 'react';
import shopData from '@data/App/shop.json';
import shopDataRTL from '@data/App/shop-rtl.json';

import Product from './Product';
import TopFilter from './TopFilter'

const Shop = ({ style = "4", rtl }) => {
  const [listView, setListView] = useState(false);
  const data = rtl ? shopDataRTL : shopData;

  return (
    <section className="shop section-padding pt-50">
      <div className="container">

        <div className="row gx-4">

          <div className="col-lg-12">
            <div className="products-content">
              <div className={`products ${listView ? 'list-view':''}`}>
                <div className="row gx-2 gx-lg-4">
                  {
                    data.map((item, index) => (
                      <Product key={index} product={item} rtl={rtl} />
                    ))
                  }
                </div>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop