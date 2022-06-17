import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
const schema = yup
  .object()
  .shape({
    username: yup.string().required('name error').min(3, 'minimum 3 simbol'),
    email: yup.string()
      .required('email error')
      .min(5, 'minimum 5 simbol')
      .matches(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'email error'),
    password: yup.string().required('Please enter your password')
  })
  .required();

const Register = () => {
  const navigate = useNavigate()
  const register = (data) => {
    axios.post('http://rbshop.pythonanywhere.com/auth/register', data)
      .then(res => {
        if (res.status === 201) {
          navigate('/login')
        }
      }).catch(err => {
        console.log(err);
      })
  }
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const theme = useSelector(state => state.theme.theme)
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
    <motion.div
      initial='out'
      animate='in'
      variants={pageTransition}
      className={!theme ? 'dark' : ''}>
      <div className='h-screen w-full flex justify-center items-center dark:bg-gray-200'>
        <div className='shadow-xl w-80 mx-3 sm:w-96 sm:mx-0 dark:bg-gray-700 dark:text-gray-200 bg-white rounded-md'>
          <h2 className='p-4 text-center text-xl font-bold'>Hoş geldiňiz!</h2>
          <p className='text-center'>Agza bolmak</p>
          <form onSubmit={handleSubmit(data => register(data))} className='p-6 w-full'>
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
              name='email'
              render={({ field: { onChange, onBlur } }) => (
                <div className='flex flex-col my-4 w-full'>
                  <div>
                    <label className="block dark:text-gray-200 text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Elektron poctanyzy yazyn
                    </label>
                    <input onChange={onChange} onBlur={onBlur} className="dark:bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Elektron pocta" />
                  </div>
                  <p className='text-red-500 text-xs'>{errors.email?.message}</p>
                </div>
              )}
            />
            <Controller
              control={control}
              name='password'
              render={({ field: { onChange, onBlur } }) => (
                <div className='flex flex-col'>
                  <div>
                    <label className="dark:text-gray-200 block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Acar sozunizi yazyn
                    </label>
                    <input onChange={onChange} onBlur={onBlur} className="dark:bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Acar sozi" />
                  </div>
                  <p className='text-red-500 text-xs'>{errors.password?.message}</p>
                </div>
              )}
            />
            <div className='mt-10 w-full flex justify-end'>
              <button
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="dark:bg-gray-200 dark:text-gray-700 inline-block px-6 py-2.5 bg-gray-100 text-black font-medium text-xs leading-tight rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:bg-gray-100 focus:text-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-lg transition duration-150 ease-in-out"
              >Agza bol</button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Register
