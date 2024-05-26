import { CardContent } from '@mui/material'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { deleteProperties } from '../utils/api';
import EditExitingProperties from '../views/EditExitingProperties';

function CardContentItem({ item }) {
    const navigate = useNavigate()
    const user_role = localStorage.getItem('user_role');
    const [is_edit_property, setIsEditProperty] = useState(false);

    const onHandleShowDetails = () => {
        navigate('/property_details', {
            state: item
        });
    }

    const onHandleCaptizedText = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    const onHandleDeleteProprties = async () => {
        try {
            const response = await deleteProperties(item.id);
            if (response.status === 200) {
                window.location.reload()
            }
        } catch (error) {
            console.error();
        }
    }

    return (
        <div>
            <EditExitingProperties 
                item={item}
                openModal={is_edit_property}
                setOpenModal={setIsEditProperty}
            />
            <CardContent className='p-1 m-0 cursor'>
                <div className='d-flex justify-between'>
                    <div className='d-flex' onClick={() => onHandleShowDetails()}>
                        <div>
                            <img src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' height={100} width={120} style={{ borderRadius: 10 }} alt='no_image' />
                        </div>
                        <div className='p-l-10'>
                            <p className='p-0 m-0'>Apartment: {onHandleCaptizedText(item.apartment)}</p>
                            <p className='p-0 m-0'>No Of Bedroom: {item.no_of_bedroom}</p>
                            <p className='p-0 m-0'>Price: {item.price}</p>
                            <p className='p-0 m-0'>{item.description}</p>
                        </div>
                    </div>
                    <div className='d-flex justify-between flex-direction-column'>
                        <div>
                            <p className='p-0 m-0'>{onHandleCaptizedText(item.state)}, {onHandleCaptizedText(item.region)}</p>
                            <p className='p-0 m-0'>{onHandleCaptizedText(item.nearby)}</p>
                        </div>
                        <p className='p-0 m-0'>
                            {user_role === 'seller' ?
                                <div className='d-flex justify-end g-3'>
                                    <FiEdit className='cursor' size={20} onClick={() => setIsEditProperty(true)} color='darkblue' />
                                    <MdDeleteForever className='cursor' onClick={() => onHandleDeleteProprties()} size={25} color='darkblue' />
                                </div>
                                : <div className='d-flex justify-end g-3'>
                                    <FaHeart className='cursor' size={20} />
                                    <FaRegHeart className='cursor' size={20} />
                                </div>}
                        </p>
                    </div>
                </div>
            </CardContent>
        </div>
    )
}

export default CardContentItem