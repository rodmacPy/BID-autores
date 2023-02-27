import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DeleteButton } from '../components/DeleteButton';
import '../tabla.css'

export const MostrarAutores = () => {
    const [products, setProducts] = useState(null)

    const getProduct = () => {
        axios.get('http://127.0.0.1:8000/api/authors')
            .then(response => setProducts(response.data.autores))
            .catch(error => console.error(error));
    }
    useEffect(() => {
        getProduct()
    }, [])


    return (
        <div className='products'>
            <h1>Favorite Authors</h1>
            <Link to='/new'>Add an author</Link>
            <p>We have quotes by:</p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map(product => (
                        <tr  key={product._id}>
                            <td>
                                <Link to={'/' + product._id}>{product.name}</Link>
                            </td>
                            <td>
                                <Link className='editar' key={product._id} to={'/edit/' + product._id} >Editar</Link>
                                <DeleteButton id={product._id} onSuccess={getProduct} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
