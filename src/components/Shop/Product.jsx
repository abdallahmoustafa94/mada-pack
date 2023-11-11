import { useRouter } from "next/router"
const Product = ({ product, rtl }) => {
  const router = useRouter()
  return (
    <div className="col-6 col-lg-3 col-sm-6 card-width">
      <div className="product-card" onClick={()=>router.push(`/products/${product.id}`)}>
        <div className="img">
          <img src={product.images?.[0]} alt="" />
        </div>
        <div className="info">
          <h5 className="title">{ product.title }</h5>
        </div>


        <a href="#" className="btn rounded-pill mt-20">
          <span>التفاصيل</span>
        </a>
      </div>
    </div>
  )
}

export default Product