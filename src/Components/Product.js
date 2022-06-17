import React, { useEffect, useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { addCart } from '../Features/cartSlice';
import { TiTimes } from "react-icons/ti";
import { toast, ToastContainer } from 'react-toastify';
const Product = ({ showProduct, closeModal, product, quantity, setQuantity}) => {
    const dispatch=useDispatch()
    // const [count, setCount]=useState(quantity)
    // console.log(count,' ',quantity);
    const notify = () => toast.success('Sebede gosuldy!!!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    //   console.log(count,' ',quantity);
    return (
        <div>
            <ToastContainer />
            {showProduct &&
                <div className="bg-gray-600 bg-opacity-50 flex justify-center items-center fixed top-0 right-0 left-0 z-50 w-full h-full inset-0 h-modal">
                    <div className="relative p-4 w-full max-w-2xl md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 dark:text-white">
                            <div className="flex justify-between items-start p-3 sm:p-4 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {product.title}
                                </h3>
                                <button onClick={() => closeModal()} type="button" className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                   <TiTimes className='text-xl' />
                                </button>
                            </div>
                            <div className="p-3 sm:p-6 flex sm:flex-row flex-col">
                                <img src={product.image} className='object-contain sm:w-1/2 sm:mr-3 mb-3 w-full sm:h-full h-44' />
                                <p className='leading-4'>{(product.description).replace(/(<([^>]+)>)/gi, "")}</p>
                            </div>
                            <div className="w-full flex items-center p-3 sm:p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <p className='mr-1'>{product.price_discount}&nbsp;TMT</p>
                                {/* <Counter quantity={quantity} setQuantity={setQuantity}/> */}
                                
                                <div className='flex justify-between items-center text-black border-2 bg-gray-200 rounded-lg h-5 w-36 sm:w-20 px-2 sm:px-3'>
                                    <p className='text-lg cursor-pointer' onClick={()=>quantity>1 && setQuantity(quantity-1)}>-</p>
                                    <p className='text-sm'>{quantity}</p>
                                    <p className='cursor-pointer' onClick={()=>setQuantity(quantity+1)}>+</p>
                                </div>

                                <div className='w-full flex justify-end'>
                                    <button className="hidden sm:block py-1 px-2 text-sm font-medium text-center text-black border-2 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {dispatch(addCart({ quantity: quantity, product }));notify()}}>Sebede gosmak</button>
                                    <button className="block sm:hidden py-1 px-2 text-sm font-medium text-center text-black border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-200 dark:hover:bg-gray-200 dark:focus:ring-blue-800" onClick={() => {dispatch(addCart({ quantity: quantity, product }));notify()}}><TiShoppingCart /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Product
