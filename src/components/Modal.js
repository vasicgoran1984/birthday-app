import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/cart/modal/modalSlice';

function Modal() {

    const dispatch = useDispatch();

  return (
    <aside className='modal-container'>
        <div className='modal'>
        <h4>remove all items from your shoppin cart?</h4>
        <div className='btn-container'>
            <button 
                type='button' 
                onClick={() => {
                    dispatch(clearCart())
                    dispatch(closeModal())
                }} 
                className='btn confirm-btn'
            >
                confirm
            </button>
            <button 
                type='button' 
                className='btn clear-btn'
                onClick={() => 
                    dispatch(closeModal())
                }
            >
                cancel
            </button>
        </div>
        </div>
    </aside>
  )
}

export default Modal