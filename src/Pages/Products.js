import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Paginate from '../Components/Paginate'
import Slider from "react-slick";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';
import Product from '../Components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../Features/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ModalImage from 'react-modal-image'
import { motion } from 'framer-motion';
const Products = () => {
  const [data, setData] = useState([])
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState(0)
  const [showProduct, setShowProduct] = useState(false)
  const [productItem, setProductItem] = useState([])
  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState([])
  const dispatch = useDispatch()
  const handlePageClick = (data) => {
    setPageCount(data.selected)
    setLoading(true)
  }
  const Filter = (e) => {
    setFilter(e)
  }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`http://rbshop.pythonanywhere.com/api/?page=${pageCount + 1}&filter=${filter}`)
        setData(response);
        setSearchData(response.results)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();

  }, [pageCount, filter]);
  var settings = {
    dots: false,
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const cartProducts = useSelector(state => state.cart.cartProducts)
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
  const addCartOne = (product) => {
    const existItem = cartProducts.find(x => x.product.id === product.id)
    // localStorage.setItem('products', JSON.stringify(product))
    if (existItem) {
      dispatch(addCart({ quantity: existItem.quantity, product }))
    } else {
      dispatch(addCart({ quantity: 1, product }))
    }
  }
  const theme = useSelector(state => state.theme.theme)
  useEffect(() => {
    var filterData = data.results ? data.results.filter(item => item.title.toLowerCase().includes(search.toLowerCase())) : setSearchData(data.results)
    setSearchData(filterData)
  }, [search])

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
        delay: i * 0.2
      }
    }),
    hidden: { opacity: 0 }
  }
  return (
    <div
      // initial='out'
      // animate='in'
      // variants={pageTransition}
      className={!theme ? 'dark' : ''}>
      <ToastContainer position="bottom-left" autoClose={3000} />
      <div className='dark:bg-gray-200 pt-20 sm:pt-36'>
        <Product showProduct={showProduct} closeModal={closeModal} product={productItem} quantity={quantity} setQuantity={setQuantity} />
        <div className='block sm:hidden my-3 '>
          <form className='px-3 py-2'>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300 bg-white">Gozle</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" id="default-search" className="block items-center py-2 p-1 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Kompyuterler, Telefonlar, Sagatlar..." />
              {/* <button type="submit" className="text-white absolute right-1.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
            </div>
          </form>
          <Slider {...settings} className='w-11/12 mx-auto' >
            <div className='text-center cursor-pointer' onClick={() => Filter(0)}><p className={filter === 0 ? "text-blue-400 border border-slate-300 dark:border-white rounded-lg" : 'border border-slate-300 dark:border-white rounded-lg'}>Hemmesi</p></div>
            <div className='text-center cursor-pointer' onClick={() => Filter(1)}><p className={filter === 1 ? "text-blue-400 border border-slate-300 dark:border-white rounded-lg" : 'border border-slate-300 dark:border-white rounded-lg'}>Kompyuterler</p></div>
            <div className='text-center cursor-pointer' onClick={() => Filter(2)}><p className={filter === 2 ? "text-blue-400 border border-slate-300 dark:border-white rounded-lg" : 'border border-slate-300 dark:border-white rounded-lg'}>Telefonlar</p></div>
            <div className='text-center cursor-pointer' onClick={() => Filter(3)}><p className={filter === 3 ? "text-blue-400 border border-slate-300 dark:border-white rounded-lg" : 'border border-slate-300 dark:border-white rounded-lg'}>Sagatlar</p></div>
          </Slider>
        </div>
        <div className='container mx-auto sm:flex'>
          <div className='hidden sm:block w-2/5 h-full'>
            <form className='md:w-44 lg:w-96 mb-4'>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300 bg-white">Gozle</label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" id="default-search" className="block items-center py-2 p-1 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Kompyuterler, Telefonlar, Sagatlar..." />
                {/* <button type="submit" className="text-white absolute right-1.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
              </div>
            </form>
            <div className="md:w-44 lg:w-96 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <button aria-current="true" type="button" className="w-full px-4 py-2 text-xl font-medium text-left dark:text-white text-black border-b border-gray-200 rounded-t-lg focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                Filtrle
              </button>
              <button onClick={() => Filter(0)} type="button" className={filter === 0 ? "text-green-500 w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-amber-600 focus:outline-none focus:text-amber-6000 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white" : "w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"}>
                Hemmesi
              </button>
              <button onClick={() => Filter(1)} type="button" className={filter === 1 ? "text-green-500 w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-amber-600 focus:outline-none focus:text-amber-6000 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white" : "w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"}>
                Kompyuterler
              </button>
              <button onClick={() => Filter(2)} type="button" className={filter === 2 ? "text-green-500 w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-amber-600 focus:outline-none focus:text-amber-6000 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white" : "w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"}>
                Telefonlar
              </button>
              <button onClick={() => Filter(3)} type="button" className={filter === 3 ? "text-green-500 w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-amber-600 focus:outline-none focus:text-amber-6000 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white" : "w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"}>
                Sagatlar
              </button>
            </div>

          </div>
          <div className='px-2 sm:px-0 w-full grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {searchData && searchData.map((product, index) => (
              <motion.div
                custom={index}
                variants={listVariants}
                initial='hidden'
                animate='visible'
                key={index} className="p-2 py-4 sm:p-5 flex flex-col justify-between max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className='relative bg-white'>
                  {loading ? <Skeleton width='100%' height={100} /> : <ModalImage small={product.image} large={product.image} showDownload={true} showRotate={true} showZoom={true} className='rounded-t-lg w-full object-contain h-36 sm:h-48' />}
                  {/* {loading ? <Skeleton width='100%' height={100} /> : <img className="rounded-t-lg w-full object-contain h-36 sm:h-48" src={product.image} alt="" />} */}
                  {product.discount > 0 && <p className='w-10 h-10 text-sm p-0.5 flex justify-center items-center absolute top-0 right-0 rounded-full bg-green-500 text-white font-bold dark:bg-green-500 dark:text-gray-200'>-{product.discount}%</p>}
                </div>
                {loading ? <Skeleton width='30%' height={25} /> : <h5 className="sm:mb-2 h-10 text-md sm:text-xl font-bold tracking-tight text-gray-900 dark:text-gray-200">{product.title}</h5>}
                {loading ? <Skeleton width='100%' height={30} /> : <p className="h-20 hidden sm:block mb-3 tex-sm text-gray-700 dark:text-gray-400">{(product.description).slice(0, 100).replace(/(<([^>]+)>)/gi, "")}.....</p>}
                <div className='flex flex-col sm:flex-row sm:items-center justify-between my-2'>
                  {loading ? <div><Skeleton height={25} /></div> : <div>
                    {product.discount > 0 ? <div className='dark:text-white text-xs flex flex-col'><p>{product.price_discount}<span className='font-semibold'> TMT</span></p>
                      <p className='line-through text-gray-400'>{product.price}<span className='font-semibold'> TMT</span></p></div> : <p className='dark:text-gray-200 text-sm'>{product.price}<span className='font-semibold'> TMT</span></p>}
                  </div>}
                  {loading ? <Skeleton width='20%' height={25} /> : <button className="mt-1 py-1 sm:py-2 sm:px-3 text-sm font-medium text-center border-2 text-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-700" onClick={() => { addCartOne(product); notify() }}>Sebede gosmak</button>}
                </div>
                {loading ? <Skeleton width='100%' height={25} /> : <button onClick={() => openModal({ product })} className="mt:1 sm:mt-5 inline-flex justify-center items-center py-1 sm:py-2 sm:px-3 text-sm font-medium text-center text-white border-2 text-black hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-700">
                  Doly okamak
                  <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                </button>}
              </motion.div>
            ))
            }
          </div>
        </div>
        <div className='flex justify-center py-20'>
          <Paginate dataPage={data.count / 12} handlePageClick={handlePageClick} />
        </div>
      </div >
    </div>
  )
}

export default Products
