import { CardContent } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

function CardContentItem({ item }) {
    const navigate = useNavigate()
    const user_role = localStorage.getItem('user_role');

    const onHandleShowDetails = () => {
        navigate('/property_details', {
            state: item
        });
    }

    return (
        <div>
            <CardContent className='p-1 m-0 cursor' onClick={() => onHandleShowDetails()}>
                <div className='d-flex justify-between'>
                    <div className='d-flex'>
                        <div>
                            <img src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' height={100} width={120} style={{ borderRadius: 10 }} />
                        </div>
                        <div className='p-l-10'>
                            <p className='p-0 m-0'>{item.title}</p>
                            <p className='p-0 m-0'>State</p>
                            <p className='p-0 m-0'>State</p>
                        </div>
                    </div>
                    <div className='d-flex justify-between flex-direction-column'>
                        <div>
                            <p className='p-0 m-0'>vcbv</p>
                            <p className='p-0 m-0'>Ritesh</p>
                        </div>
                        <p className='p-0 m-0'>
                            {user_role !== 'seller' ?
                                <div>
                                    <FiEdit className='cursor' size={20} />
                                    <MdDeleteForever className='cursor' size={20} />
                                </div>
                                : <div>
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