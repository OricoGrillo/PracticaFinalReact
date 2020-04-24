import React, {useContext} from 'react';
import {Header,Form, Button} from 'semantic-ui-react';
import PeliStore from '../app/stores/peliculaStore'
import IPelicula from '../app/modules/IPelicula';

const pelicula: IPelicula = {id: 0, nombrePelicula:'', descripcion: ''}

const CategoriaNueva = () => {

    const {showNewWindow, agregarPelicula} = useContext(PeliStore);
    

    const storageNamePelicula = (event:any) =>{
        const {name,value} = event.currentTarget;
        pelicula.nombrePelicula = value;
    }

    const storageDescripcionPelicula = (event:any) =>{ 
        const {name,value} = event.currentTarget;
        pelicula.descripcion = value;
    }

    return (
        <div>
            <Form>
                <Header size='large'>Nueva Pelicula</Header>

                <Form.Field>
                    <input onChange={storageNamePelicula} placeholder='Nombre Pelicula' />
                </Form.Field>

                <Form.Field>
                    <input onChange={storageDescripcionPelicula} placeholder='Descripcion Pelicula' />
                </Form.Field>
                
                <Form.Field>
                    <Button floated='right' onClick = {() => showNewWindow(false)}>Cancelar</Button>
                    <Button floated='right' onClick = {() => agregarPelicula(pelicula) } color='green'>Guardar</Button>
                </Form.Field>
                
            </Form>
        </div>
    )
}

export default CategoriaNueva