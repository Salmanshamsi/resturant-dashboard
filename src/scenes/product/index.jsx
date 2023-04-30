import React, { useState } from "react";
import Heading from "../../components/Heading";
import { FlexBetween } from "../../style/CommonClasses";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "../../components/Modal";
import DishCard from "../../components/DishCard";

const Products = () => {
  const [isModalOpen, closeModal] = useState(false);
  return (
    <div>
      <div className={`${FlexBetween}`}>
        <Heading>PRODUCTS</Heading>
        <button
          className={`bg-transparent hover:bg-indigo-600 text-indigo-600 font-semibold hover:text-white py-1 px-2 border border-indigo-600 hover:border-transparent rounded ${FlexBetween} gap-4`}
          onClick={() => closeModal(true)}
        >
          <AiOutlinePlusCircle fontSize={24} /> PRODUCT
        </button>
      </div>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      <DishCard />
    </div>
  );
};

export default Products;
