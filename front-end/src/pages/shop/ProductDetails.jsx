import React, { useEffect, useState } from "react";
import RelatedProductsContainer from "../../components/containers/shop/RelatedProductsContainer";
import { Icon } from "@iconify/react";
import CitiesInput from "../../components/containers/shop/CitiesInput";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/partials/Loading";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/slices/ShopSlice";
import { addToCart } from "../../redux/slices/cartSlice";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const {productId} = useParams()
  useEffect(()=>{
    dispatch(getProductById(productId))
  },[dispatch, productId])
  const { loading, product, relatedProducts } = useSelector((state) => state.shop);
  const [qty, setQty] = useState(1);
  const addOne = () => {
    setQty(qty + 1);
  };
  const subtractOne = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  return (
    <div className="w-full font-description flex flex-col gap-5 px-10 py-10">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex w-full h-screen gap-5 overflow-clip">
            <div className="w-9/12 bg-white flex h-full shadow-2xl border-2 border-border rounded">
              <div className="w-1/3 h-full py-5 flex justify-center border-r-2 border-border">
                <img src={product.productPicture} alt="" className="h-full object-cover" />
              </div>
              <div className="w-2/3 bg-border h-full text-black px-10 py-5">
                <p className="text-center text-4xl font-bold pb-5">
                  {product.label}
                </p>
                <p className=" text-lg pb-2" >Description</p>
                <div className="w-full h-full outline-none bg-transparent text-sm" dangerouslySetInnerHTML={{__html: product.description}}></div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-3/12 h-4/5 bg-border shadow-2xl border-2 border-border rounded-xl text-black p-5">
              <p title={product.label} className="text-center text-4xl font-bold pb-5 truncate">{product.label}</p>
              <p className="flex gap-0.5 text-4xl pb-5">
                {product.unitPrice}<span className="text-lg">MAD</span>
              </p>
              <p className="pb-2">Quanity:</p>
              <div className="flex items-center gap-4 justify-center pb-5">
                <Icon
                  icon="icons8:minus"
                  className="cursor-pointer text-3xl"
                  onClick={subtractOne}
                />
                <input
                  readOnly
                  type="text"
                  name=""
                  id=""
                  value={qty}
                  className=" rounded-full outline-none py-2 text-center select-none"
                />
                <Icon
                  icon="icons8:plus"
                  className="cursor-pointer text-3xl"
                  onClick={addOne}
                />
              </div>
              <p className="pb-2">Status:</p>
              <div className=" pb-5">
                <div className={`${product.quantity > 0 ? 'bg-in-stock': 'bg-out-of-stock'} text-center rounded-full outline-none py-2 px-10 select-none`}>
                  {product.quantity >0 ? 'In Stock': 'Out Of Stock'}
                </div>
              </div>
              <p className="pb-2 flex items-center">
                <Icon icon="basil:location-solid" className="" />
                Delevery:
              </p>
              <div className=" pb-5">
                <CitiesInput />
              </div>
              <button onClick={()=>handleAddToCart(product)} className="w-full text-center border-2 py-3 hover:bg-dark-purple hover:border-transparent hover:text-white rounded-full transition-all duration-300">
                Add To Cart
              </button>
            </div>
          </div>
          {relatedProducts && relatedProducts.length === 0 ? '' : <RelatedProductsContainer relatedProducts={relatedProducts} /> }
        </>
      )}
    </div>
  );
}
