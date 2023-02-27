import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AgregarAutor from '../pages/AgregarAutor'
import { DetallesAutores } from '../pages/DetallesAutores'
import EditarAutor from '../pages/EditarAutor'
import { MostrarAutores } from '../pages/MostrarAutores'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MostrarAutores />,
    },
    {
        path: '/new',
        element: <AgregarAutor />,
    },
    {
        path: '/:id',
        element: <DetallesAutores />,
    },
    {
        path: '/edit/:id',
        element: <EditarAutor />,
    },
])
