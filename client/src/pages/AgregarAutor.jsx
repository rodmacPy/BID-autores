import axios from 'axios';
import { useForm } from '../hooks/useForm';
import { FormComponent } from '../components/FormComponent';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


function AgregarAutor() {
    const navigate = useNavigate()
    const { formState, onInputChange, onResetForm, name} = useForm({
        name: ''
    })

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/authors/', formState)
            .then(response => navigate('/'))
            .catch(error => alert(error.response.data.message));
        onResetForm();
    }
 const handleCancel = () =>{
        navigate('/')
    }
    return (
        <>
            <div className='container'>
                <h1>Favorite Authors</h1>
                <Link to='/'>Home</Link>
                <p>Add a new author:</p>
                <FormComponent handleSubmit={handleSubmit} onInputChange={onInputChange} name={name} text={'Agregar'}/>
            </div>
        </>
    );
}

export default AgregarAutor
