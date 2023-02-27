import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { DeleteButton } from '../components/DeleteButton';



export const DetallesAutores = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [products, setProducts] = useState(null)

    const getProduct = () => {
        axios.get('http://127.0.0.1:8000/api/authors/' + id)
            .then(response => setProducts(response.data.autor))
            .catch(error => console.error(error));
    }
    useEffect(() => {
        getProduct()
    }, [])

    const handleCancel = () =>{
        navigate('/')
    }
    return (
        <div>
            <h3>Detalles del Producto</h3>
            {products &&
                <>
                    <h3>{products.title}</h3>
                    <p>{products.price}</p>
                    <p>{products.description}</p>
                    <button onClick={handleCancel}>Cancel</button>
                    <DeleteButton id={products._id} onSuccess={() => navigate('/')} />
                </>
            }
        </div>
    )
}
