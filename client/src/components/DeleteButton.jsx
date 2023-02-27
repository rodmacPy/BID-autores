import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const DeleteButton = ({ id, onSuccess }) =>{
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://127.0.0.1:8000/api/authors/${id}`)
            .then(() => {
                onSuccess();
            })
            .catch(error => console.error(error));
    }

    return (
        <button className='eliminar' onClick={handleDelete}>Eliminar</button>
    );
}