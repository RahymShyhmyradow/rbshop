import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion'
const schema = yup
  .object()
  .shape({
    username: yup.string().required('name error').min(3, 'minimum 3 simbol'),
    gmail: yup.string()
      .required('gmail error')
      .min(5, 'minimum 5 simbol')
      .matches(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'gmail error'),
    message: yup.string().required('Please enter your messages')
      .min(3, 'minimum 3 simbol'),
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
  })
  .required();
const Contacts = () => {
  const notify = () => toast.success('Send messages...', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const sendMessage = (data) => {
    notify()
    axios.post('http://rbshop.pythonanywhere.com/contact', data)
      .then(res => {
        if (res.status === 201) {
          window.location.reload()
        }
      }).catch(err => {
        console.log(err);
      })
  }
  const pageTransition = {
    in: {
      opacity: 1,
      y: '0%'
    },
    out: {
      opacity: 0,
      y: '10%'
    }
  }
  const transition={
    type:"spring",
    stiffness:20
  }
  return (
    <motion.div
      initial='out'
      animate='in'
      variants={pageTransition}
      transition={transition}
      className='h-screen sm:mb-0 mb-28'>
      <ToastContainer />
      <div className='h-full w-full container mx-auto'>
        <div className='h-full w-full flex flex-col sm:flex-row items-center justify-center w-full'>
          <img className='sm:w-1/2 sm:h-1/2 w-96 mt-80 sm:mt-0' src='https://cdn.dribbble.com/users/2169437/screenshots/5879867/a2.png' />
          <div className='w-full flex flex-col px-5 pb-10 sm:pb-0 sm:w-1/3'>
            <h2 className='font-bold text-center sm:text-left text-2xl mb-5'>Habarlasmak</h2>
            <form onSubmit={handleSubmit(data => sendMessage(data))} className='w-full sm:mb-0 mb-20'>
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
                name='gmail'
                render={({ field: { onChange, onBlur } }) => (
                  <div className='flex flex-col my-4 w-full'>
                    <div>
                      <label className="block dark:text-gray-200 text-gray-700 text-sm font-bold mb-2" htmlFor="gmail">
                        Elektron salgyňyzy yazyn
                      </label>
                      <input onChange={onChange} onBlur={onBlur} className="dark:bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gmail" type="email" placeholder="E-mail address" />
                    </div>
                    <p className='text-red-500 text-xs'>{errors.gmail?.message}</p>
                  </div>
                )}
              />
              <Controller
                control={control}
                name='message'
                render={({ field: { onChange, onBlur } }) => (
                  <div className='flex flex-col'>
                    <div>
                      <label className="dark:text-gray-200 block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                        Hatynyz
                      </label>
                      <textarea rows='4' onChange={onChange} onBlur={onBlur} className="dark:bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="textarea" placeholder="Hatynyz" />
                    </div>
                    <p className='text-red-500 text-xs'>{errors.message?.message}</p>
                  </div>
                )}
              />
              <div className='mt-5 w-full flex justify-end'>
                <button
                  // onClick={() => notify()}
                  type="submit"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="dark:bg-gray-200 dark:text-gray-700 inline-block px-6 py-2.5 bg-gray-100 text-black font-medium text-xs leading-tight rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:bg-gray-100 focus:text-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-lg transition duration-150 ease-in-out"
                >Ugratmak</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Contacts
