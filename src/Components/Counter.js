import React from 'react'

const Counter = ({quantity, setQuantity}) => {
    const decrement=()=>{
        setQuantity(quantity-1)
    }
    const increment=()=>{
        setQuantity(quantity+1)
    }
    return (
        <div>
            <div className='flex justify-between items-center bg-blue-700 rounded-lg h-5 w-16 sm:w-20 text-white px-1 sm:px-3'>
                <p className='text-lg cursor-pointer' onClick={()=>decrement()}>-</p>
                <p className='text-sm'>{quantity}</p>
                <p className='cursor-pointer' onClick={()=>increment()}>+</p>
            </div>
        </div>
    )
}

export default Counter
