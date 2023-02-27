import React from 'react'
import { useNavigate } from 'react-router'

export const FormComponent = ({ onInputChange, name, handleSubmit, text }) => {
    const navigate = useNavigate()
    const handleCancel = () => {
        navigate('/')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Author:
            </label>
            <input
                type='name'
                value={name}
                name='name'
                onChange={onInputChange} />
            <button className='eliminar' onClick={handleCancel}>Cancel</button>
            <button className='editar' type="submit">{text}</button>
        </form>
    )
}
