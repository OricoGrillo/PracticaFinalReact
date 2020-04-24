import {observable,action} from 'mobx';
import {createContext} from 'react';
import IPelicula from '../modules/IPelicula';
import Api from '../../api/api';

class PeliculaStore{

    @observable peliculasArray:IPelicula[] = []
    @observable obtuvoPeliculas:boolean = false;
    @observable mostrarEdicion:boolean = false;
    @observable mostrarNueva:boolean = false;
    @observable peliEdit:IPelicula = {id:0, nombrePelicula:'', descripcion:''};
    @observable seFiltroPelicula:boolean = false;
    @observable peliculasFiltroArray:IPelicula[] = []

    @action loadPeliculas = () =>{
        Api.Peliculas.list()
        .then((peliculasFromApi) =>{ 
            this.peliculasArray = peliculasFromApi;
            this.obtuvoPeliculas = true;
            alert('siempre entra a este método loadPeliculas()')
        });
    }

    @action showEditWindow = (showEdit:boolean, pelicula: IPelicula) =>{
        this.mostrarEdicion = showEdit;
        this.peliEdit = pelicula;
    }

    @action showNewWindow = (showNew:boolean) =>{
        this.mostrarNueva = showNew;
    }

    @action agregarPelicula = (pelicula: IPelicula) => {

        let peliculasTemp = this.peliculasArray 
        
        if(pelicula.id === 0){
            Api.Peliculas.create(pelicula)
            .then((peliculaAgregada) =>{
                peliculasTemp.push(peliculaAgregada);
                this.mostrarNueva = false;
                alert("Pelicula " + peliculaAgregada.nombrePelicula + " Registrada");
            });
        }
        else {            
            Api.Peliculas.update(pelicula)
            .then(() => {
                this.mostrarEdicion = false;
                alert("Pelicula Actualizada");
            })

        }    
    }

    @action deletePelicula = (idCategoria:number) =>{
        Api.Peliculas.eliminar(idCategoria)
            .then(() =>{
                alert("Pelicula Eliminada");
            });
    }

    @action peliculasFiltradas = (peliculasFiltradas:IPelicula[]) =>{
        this.peliculasArray = peliculasFiltradas;
        //alert(peliculasFiltradas[0].descripcion)
    }

}

// Al crear una instancia de la clase CategoriaStore dentro del createContext() se expone el Store para que cualquier otra componente pueda usar sus valores.
export default createContext(new PeliculaStore())