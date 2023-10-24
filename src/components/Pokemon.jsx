import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Swal from "sweetalert2";

class Pokemon extends Component {
    state = {
        pokemones: []
    }

    //se ejecuta cuando el componente se mostro, es lo mismo que el useEffect
    componentDidMount() {
        //con esta llamada me trae todos
        /*axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000").then((resp) => {
            this.setState({
                pokemones: resp.data.results
            })
        })*/

        //con esta llamada me trae los 151 primeros
        /*axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151").then((resp) => {
            this.setState({
                pokemones: resp.data.results
            })
        })*/


        //me trae solo los 20 primeros
        axios.get("https://pokeapi.co/api/v2/pokemon").then((resp) => {
            this.setState({
                pokemones: resp.data.results
            })
        })
    }

    render() {
        return (
            
            <div>
                <h3 className="text-center bg-success text-light">Pokemon Api</h3>
                <div className="row">
                    {
                        this.state.pokemones.map((pokemon, index) => (
                            <div key={index} className="col-3 mb-3">
                                <Card titulo={pokemon.name}
                                        imagen={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
                                        onInfo={(parametro)=>{
                                            Swal.fire(`Info del pokemon", "Aca se muestra la info del pokemon " + <strong>${parametro}</strong>`)
                                        }}
                                />
                                {/*<div className="card w-100 h-100 shadow">
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt={pokemon.name} className="card-imd-top" />
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            {pokemon.name}
                                        </h3>
                                        <div className="card-test text-center">
                                            <h4>{ }</h4>
                                            <h5>{ }</h5>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                        ))
                    }
                </div>
            </div>);
    }
}


export default Pokemon;