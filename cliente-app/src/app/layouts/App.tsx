import React from 'react'
import {Menu, Header, Form, Button} from 'semantic-ui-react';
import Peliculas from '../../features/Peliculas'

class App extends React.Component{

    render(){

        return (

            <div>
                <Menu inverted>

                    <Menu.Item>
                        <img src="/rollo-de-pelicula.png" alt="logo" style={{marginRight: '10px'}}></img>
                        Peliculas
                    </Menu.Item>

                </Menu>

                <Peliculas></Peliculas>
            </div>
                
            
        )
    }
}

export default App