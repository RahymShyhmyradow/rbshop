import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BiTrash } from "react-icons/bi";
import { addCart, delItemToCart, emptyCart } from '../Features/cartSlice';
import cartEmpty from '../img/empty-cart.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { TiTimes } from "react-icons/ti";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion'
const schema = yup
    .object()
    .shape({
        username: yup.string().required('name error').min(3, 'minimum 3 simbol'),
        phone: yup.string()
            .required('phone error')
            .min(8, 'minimum 8 simbol')
            .max(8, 'maximum 8 simbol'),
        address: yup.string().required('Please enter your password')
            .min(3, 'minimum 3 simbol'),
        // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
    })
    .required();
const Cart = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const logged = useSelector((state) => state.auth.logged)
    useEffect(() => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        axios.get('http://rbshop.pythonanywhere.com/auth/secret', config)
            .then(res => {
                console.log(res);
            }).catch(err => {
                navigate('/login')
                console.log(err);
            })
    }, [])
    if (!logged) {
        navigate('/login')
    }

    const cartProducts = useSelector(state => state.cart.cartProducts)
    const dispatch = useDispatch()
    let total = 0
    {
        cartProducts &&
            cartProducts.map(e => {
                total = total + e.product.price * e.quantity
            })
    }
    const [showOrder, setShowOrder] = useState(false)
    const handleOrder = () => {
        setShowOrder(true)
    }
    const theme = useSelector(state => state.theme.theme)
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const order = {}
    const orderA = []
    const ordered = (data) => {
        cartProducts.map(e => {
            orderA.push({ "product": e.product.id, nmb: e.quantity })
        })
        order["name"] = data.username
        order["phone"] = data.phone
        order["address"] = data.address
        order["items"] = orderA
        axios.post('http://rbshop.pythonanywhere.com/orders', order)
            .then(res => {
                if (res.status === 201) {
                    dispatch(emptyCart())
                    setShowOrder(false)
                }
            }).catch(err => {
                console.log(err);
            })
    }
    const notify = () => toast.warn('Sebetden haryt ayryldy!!!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const notifyOrder = () => toast.success('Sargyt kabul edildi ...', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const pageTransition = {
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: '-100%'
        }
    }
    return (
        <div
            className={!theme ? 'dark' : ''}>
            <ToastContainer />
            <div className='dark:bg-gray-200 w-full relative'>
                {
                    cartProducts.length === 0 && <div className='w-full h-screen flex flex-col items-center justify-center'>
                        <img src={cartEmpty} alt='cart-empty' className='w-3/5 sm:w-2/5' />
                        <p className='text-2xl'>Sebedinizde haryt yok...</p>
                        <Link to='/' className='p-3 bg-amber-500 text-white rounded-lg mt-2'>Bas sahypa gec</Link>
                    </div>
                }
                <div className='container mx-auto flex flex-col md:flex-row pt-20 sm:pt-36  pb-16 p-1'>
                    <div className='md:w-3/4 w-full'>
                        {cartProducts && cartProducts.map((product, i) => (
                            <div key={i} className="container my-2 mx-auto w-full h-36 sm:h-auto flex bg-white rounded-lg border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className='p-5 flex sm:flex-row flex-col items-center h-full justify-between sm:items-start sm:justify-start w-2/4 sm:w-3/4'>
                                    <img className="sm:p-2 object-contain h-16 w-20 rounded-t-lg md:h-36 md:w-48 md:rounded-none md:rounded-l-lg" src={product.product.image} alt={product.product.image} />
                                    <div className="sm:p-1 sm:h-full flex flex-col justify-between leading-normal">
                                        <h5 className="text-md md:text sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">{product.product.title}</h5>
                                        <p className="hidden sm:block leading-5 font-normal text-gray-700 dark:text-gray-400 text-sm sm:text-md">{product.product.description.slice(0, 300).replace(/(<([^>]+)>)/gi, "")}</p>
                                    </div>
                                </div>
                                <div className='w-2/4 sm:w-1/4 flex flex-col justify-between p-5'>
                                    <p className='dark:text-gray-400'>{product.product.price} TMT</p>
                                    <div className='flex justify-between'>
                                        <div className='flex justify-between items-center border-2 text-black  rounded-lg h-5 w-20 text-white px-2 sm:px-3'>
                                            <p className='text-sm dark:text-white sm:text-lg cursor-pointer' onClick={() => dispatch(addCart({ quantity: product.quantity > 1 && product.quantity - 1, product: { id: product.product.id, title: product.product.title, image: product.product.image, description: product.product.description, price: product.product.price } }))}>-</p>
                                            {product.quantity == 0 ? <p className='text-sm dark:text-white'>0</p> : <p className='text-sm dark:text-white'>{product.quantity}</p>}
                                            <p className='text-sm cursor-pointer dark:text-white' onClick={() => dispatch(addCart({ quantity: product.quantity + 1, product: { id: product.product.id, title: product.product.title, image: product.product.image, description: product.product.description, price: product.product.price } }))}>+</p>
                                        </div>
                                        <BiTrash onClick={() => { dispatch(delItemToCart(product.product.id)); notify() }} className='cursor-pointer text-xl dark:text-white text-black' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {cartProducts.length > 0 &&
                        <div className='md:w-1/4 h-44 w-full border-2 shadow-md md:ml-3 mt-2 md:mb-0'>
                            <div className='p-3 w-full bg-white rounded dark:text-white dark:bg-gray-900'>
                                <p className='w-full rounded-md px-3 p-1 text-lg'>Jemi bahasy: {total}</p>
                                <p className='mb-5 w-full rounded-md px-3 p-1 text-lg mt-2'>Bahasy: {total}</p>
                                <p className='w-full rounded-md text-center p-1 bg-green-500 text-lg text-white mt-2 cursor-pointer' onClick={() => handleOrder(cartProducts)}>Sargyt etmek</p>
                            </div>
                        </div>
                    }
                </div>
                {showOrder && <div className=''>
                    <div className="bg-gray-600 bg-opacity-50 flex justify-center items-center fixed top-0 right-0 left-0 z-50 w-full h-full inset-0 h-modal">
                        <div className="relative p-3 w-full max-w-2xl md:h-auto">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 dark:text-white">
                                <div className="flex justify-between items-start p-1 sm:p-4 rounded-t border-b dark:border-gray-600">
                                    <button type="button" className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                        <TiTimes onClick={() => setShowOrder(false)} className='text-xl' />
                                    </button>
                                </div>
                                <h1 className='text-center mt-5 text-2xl font-bold'>Sargyt etmek</h1>
                                <div className="p-3 sm:p-6 flex sm:flex-row flex-col">
                                    <form onSubmit={handleSubmit(data => ordered(data))} className='p-3 sm:p-6 w-full'>
                                        <Controller
                                            control={control}
                                            name='username'
                                            render={({ field: { onChange, onBlur } }) => (
                                                <div className='flex flex-col w-full'>
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="username">
                                                            Adynyzy yazyn
                                                        </label>
                                                        <input onChange={onChange} onBlur={onBlur} className="dark:bg-gray-200 hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Adynyz" />
                                                    </div>
                                                    <p className='text-red-500 text-xs'>{errors.username?.message}</p>
                                                </div>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='phone'
                                            render={({ field: { onChange, onBlur } }) => (
                                                <div className='flex flex-col my-4 w-full'>
                                                    <div>
                                                        <label className="block dark:text-gray-200 text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                                            Telefon belginizi yazyn
                                                        </label>
                                                        <input onChange={onChange} onBlur={onBlur} className="dark:bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="+993 XX XXXXXX" />
                                                    </div>
                                                    <p className='text-red-500 text-xs'>{errors.phone?.message}</p>
                                                </div>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name='address'
                                            render={({ field: { onChange, onBlur } }) => (
                                                <div className='flex flex-col'>
                                                    <div>
                                                        <label className="dark:text-gray-200 block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                                            Salgynyzy yazyn
                                                        </label>
                                                        <textarea rows='4' onChange={onChange} onBlur={onBlur} className="dark:bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="textarea" placeholder="Salgynyz" />
                                                    </div>
                                                    <p className='text-red-500 text-xs'>{errors.address?.message}</p>
                                                </div>
                                            )}
                                        />
                                        <div className='mt-5 w-full flex justify-end'>
                                            <button
                                                onClick={() => notifyOrder()}
                                                type="submit"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                                className="dark:bg-gray-200 dark:text-gray-700 inline-block px-6 py-2.5 bg-gray-100 text-black font-medium text-xs leading-tight rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:bg-gray-100 focus:text-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-lg transition duration-150 ease-in-out"
                                            >Sargamak</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Cart
