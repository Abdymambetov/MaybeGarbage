import React, { useState, useEffect } from "react";
import axios from "axios";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);
function SliderCook() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <Swiper
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
  >
    {products.map((product) => (
      <SwiperSlide key={product.id}>
        <img src={product.image} alt={product.title} />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default SliderCook