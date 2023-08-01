import React from "react";
import Car from "./Car/Car";

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    carsURL = 'http://owu.linkpc.net/carsAPI/v1/cars';

    getCars() {
        fetch(this.carsURL)
            .then(res => res.json())
            .then(cars => this.setState({cars}))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.getCars();
    }

    render() {
        return (
            <div>
                {this.state.cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        )
    }

}

export {
    Cars
}