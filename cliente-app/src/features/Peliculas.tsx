import React,{useState,useEffect, useContext} from 'react';
import PeliStore from '../app/stores/peliculaStore';
import {observer} from 'mobx-react-lite';
import PeliculaEdicion from './PeliculaEdicion';
import PeliculaNueva from './PeliculaNueva';
import PeliculasList from './PeliculasList'; 


const Peliculas = () => {

    const {mostrarEdicion, mostrarNueva, peliculasArray, peliculasFiltradas} = useContext(PeliStore)

    const filtrarPelicula = (event:any) =>{
        const {name,value} = event.currentTarget;
        const filter2 = peliculasArray.filter(item => item.nombrePelicula.toLowerCase().includes(value.toLowerCase()));
        peliculasFiltradas(filter2)
    }

    if(mostrarEdicion === true)
    {
        return(
        
            <PeliculaEdicion></PeliculaEdicion>
        )
    }

    if(mostrarNueva === true)
    {
        return(
        
            <PeliculaNueva></PeliculaNueva>
        )
    }

    return (
        <React.Fragment>
            <input onChange={filtrarPelicula} placeholder='Buscar por nombre' />
            <PeliculasList></PeliculasList>            
        </React.Fragment>        
    )

}

export default observer(Peliculas)