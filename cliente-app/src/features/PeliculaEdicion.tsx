import React, { useContext } from 'react';
import {Header,Form, Button} from 'semantic-ui-react';
import PeliStore from '../app/stores/peliculaStore'
import IPelicula from '../app/modules/IPelicula';
import { observer } from 'mobx-react-lite';

const PeliculaEdicion = () => {

    const {showEditWindow, peliEdit, agregarPelicula} = useContext(PeliStore);

    const EditNombreCategory = (event:any) =>{
        const {name,value} = event.currentTarget;
        peliEdit.nombrePelicula = value;
    }

    const EditDescripcionCategory = (event:any) =>{
        const {name,value} = event.currentTarget;
        peliEdit.descripcion = value;
    }

    return (
        <div>
            <Form>
                <Header size='large'>Edición de categoría</Header>

                <Form.Field>
                    <input onChange={EditNombreCategory} value={peliEdit.nombrePelicula} placeholder='Nombre Pelicula' />
                </Form.Field>

                <Form.Field>
                    <input onChange={EditDescripcionCategory} value={peliEdit.descripcion} placeholder='Descripcion Pelicula' />
                </Form.Field>
                
                <Form.Field>
                    <Button floated='right' onClick = {() => showEditWindow(false, peliEdit)}>Cancelar</Button>
                    <Button floated='right' onClick = {() => agregarPelicula(peliEdit)} color='green'>Guardar</Button>
                </Form.Field>
                
            </Form>

        </div>
    )
}

export default observer(PeliculaEdicion)