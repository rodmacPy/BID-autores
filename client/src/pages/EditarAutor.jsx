import axios from 'axios';
import { useForm } from '../hooks/useForm';
import { Outlet, useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { FormComponent } from '../components/FormComponent';
import { Link } from 'react-router-dom';


function EditarAutor() {
    const { id } = useParams();
    const navigate = useNavigate()
    const { formState, setFormState, onInputChange, onResetForm, name } = useForm({
        name: ''
    })
    const getProduct = () => {
        axios.get('http://127.0.0.1:8000/api/authors/' + id)
            .then(response => setFormState({name: response.data.autor.name}))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getProduct()
    }, [])

    function handleSubmit(event) {
        event.preventDefault();

        axios.put('http://127.0.0.1:8000/api/authors/' + id, formState)
            .then(response => {
                navigate('/');
            })
            .catch(error => alert(error.response.data.message));
    }

    return (
        <>
            <div className='container'>
                <h1>Favorite Authors</h1>
                <Link to='/'>Home</Link>
                <p>Edit this author</p>
                <FormComponent handleSubmit={handleSubmit} onInputChange={onInputChange} name={name} text={'Editar'} />
            </div>
        </>
    );
}

export default EditarAutor
