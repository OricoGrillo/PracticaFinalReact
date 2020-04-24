import React, {useEffect,useContext} from 'react'
import { Header, Form, Button, Table } from 'semantic-ui-react'
import PeliStore from '../app/stores/peliculaStore'
import {observer} from 'mobx-react-lite'
import IPelicula from '../app/modules/IPelicula';

const PeliculasList = () => { 

    const {loadPeliculas, peliculasArray, showNewWindow, showEditWindow, deletePelicula} = useContext(PeliStore)

    // El useEffect hace que en cuanto se mande llamar este componente se ejecute lo que este debtro de el.
    useEffect (() => {
        loadPeliculas()
    })

    return (
        <div>
            <Header size='large'>Peliculas Disponibles</Header>

            <Form>
                <Form.Field>
                    <label>Buscar</label>
                    
                </Form.Field>

                <Form.Field>
                    <Button onClick = {() => showNewWindow(true)} primary floated="right" >Nueva Pelicula</Button>
                </Form.Field>

            </Form>

            <Table stackable>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Pelicula</Table.HeaderCell>
                    <Table.HeaderCell>Descripcion</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Acciones</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {
                    peliculasArray.map((pelicula:IPelicula) => (
                        <Table.Row>
                            <Table.Cell>{pelicula.nombrePelicula}</Table.Cell>
                            <Table.Cell>{pelicula.descripcion}</Table.Cell>
                            <Table.Cell textAlign='right'>
                                <Button onClick = {() => showEditWindow(true, pelicula)} color='red'>Editar</Button>
                                <Button onClick = {() => deletePelicula(pelicula.id)} color='green'>Eliminar</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }

                </Table.Body>
            </Table>

        </div>
    )
}

export default observer(PeliculasList)