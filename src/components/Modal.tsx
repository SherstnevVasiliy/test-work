import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../store/actions/action'
import { IInitial } from './interface'
import './modal.css'
import Button from './ui/button'

const Modal = () => {
    const dispatch = useDispatch()
    const isModal = useSelector((state: IInitial) => state.isModal)
    const dataModal = useSelector((state: IInitial) => state.dataModal)

    const closeModalHandler = () => {
        dispatch(openModal(false, dataModal))
    }
    

    return (
        <div className={isModal? "modal" : "modal hide"} onClick={closeModalHandler}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="close-btn-wrap">
                    <Button title="✖️" className="close-modal-btn" onPress={closeModalHandler}/>
                </div>
                <div className="price-text modal-title">
                    {dataModal.title}
                </div>
                <div className="modal-content-wrap">
                    <div className="modal-image">
                        <img alt="" src={dataModal.image}/>
                    </div>
                    <div className="modal-description-wrap">
                        <div className="modal-category">
                            Категория: {dataModal.category}
                        </div>
                        <div className="modal-description-title">Описание:</div>
                        <div className="price-text modal-description">
                            {dataModal.description}
                        </div>
                        <div className="price-text modal-price">
                            Цена: {dataModal.price}$
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal