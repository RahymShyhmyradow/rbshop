import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { addCart } from '../../Features/cartSlice';
import Product from '../Product';
import ModalImage from 'react-modal-image'
import { motion } from 'framer-motion'
function Phones() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const [showProduct, setShowProduct] = useState(false)
    const [productItem, setProductItem] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('http://rbshop.pythonanywhere.com/brand?filter=2')
                setData(response.results);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    const dispatch = useDispatch()
    const addCartOne = (product) => {
        const existItem = cartProducts.find(x => x.product.id === product.id)
        if (existItem) {
            dispatch(addCart({ quantity: existItem.quantity, product }))
        } else {
            dispatch(addCart({ quantity: 1, product }))
        }
    }
    const [quantity, setQuantity] = useState(0)
    const openModal = (e) => {
        setProductItem(e.product)
        setShowProduct(true)
        const existItem = cartProducts.find(x => x.product.id === e.product.id)
        if (existItem) {
            setQuantity(existItem.quantity)
        } else setQuantity(1)
    }
    const closeModal = () => {
        setShowProduct(false)
    }
    const notify = () => toast.success('Sebede gosuldy!!!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const listVariants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 0.3
            }
        }),
        hidden: { opacity: 0 }
    }
    return (
        <div className='container mx-auto sm:w-full'>
            <ToastContainer />
            <Product showProduct={showProduct} closeModal={closeModal} product={productItem} quantity={quantity} setQuantity={setQuantity} />
            <h1 className='my-2 text-2xl font-bold sm:px-0 px-2'>Telefonlar</h1>
            <div className='pb-5 px-2 sm:px-0 w-full grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {data && data.map((product, index) => (
                    <motion.div
                        custom={index}
                        variants={listVariants}
                        initial='hidden'
                        animate='visible'
                        key={index} className="w-full p-2 py-4 sm:p-5 flex flex-col justify-between max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='relative bg-white'>
                            {loading ? <Skeleton width='100%' height={100} /> : <ModalImage className="object-contain rounded-t-lg w-full h-36 sm:h-48" small={product.image} large={product.image} alt="" />}
                            {product.discount > 0 && <p className='w-10 h-10 text-sm p-0.5 flex justify-center items-center absolute top-0 right-0 rounded-full bg-green-500 text-white font-bold dark:text-gray-200'>-{product.discount}%</p>}
                        </div>
                        {loading ? <Skeleton width='30%' height={25} /> : <h5 className="sm:mb-2 h-10 text-md sm:text-xl font-bold tracking-tight text-gray-900 dark:text-gray-200">{product.title}</h5>}
                        {loading ? <Skeleton width='100%' height={30} /> : <p className="hidden sm:block mb-3 tex-sm text-gray-700 dark:text-gray-400">{(product.description).slice(0, 150).replace(/(<([^>]+)>)/gi, "")}.....</p>}
                        <div className='flex flex-col sm:flex-row sm:items-center justify-between my-2'>
                            {loading ? <div><Skeleton height={25} /></div> : <div>
                                {product.discount > 0 ? <div className='dark:text-white text-xs flex flex-col'><p>{product.price_discount}<span className='font-semibold'> TMT</span></p>
                                    <p className='line-through text-gray-400'>{product.price}<span className='font-semibold'> TMT</span></p></div> : <p className='dark:text-gray-200'>{product.price}<span className='font-semibold'> TMT</span></p>}
                            </div>}
                            {loading ? <Skeleton width='20%' height={25} /> : <button className="mt-1 py-1 sm:py-2 sm:px-3 text-sm font-medium text-center text-black hover:bg-gray-200 border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-700" onClick={() => { addCartOne(product); notify() }}>sebede gosmak</button>}
                        </div>
                        {loading ? <Skeleton width='100%' height={25} /> : <button onClick={() => openModal({ product })} className="mt:1 sm:mt-5 inline-flex justify-center items-center py-1 sm:py-2 sm:px-3 text-sm border-2 font-medium text-center text-black border-2 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-700">
                            Doly okamak
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                        </button>}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Phones
