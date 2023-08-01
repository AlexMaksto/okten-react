import React from 'react';

class Car extends React.Component {
    constructor(car) {
        super(car);
        this.state = {
            car
        }
    }
    render() {
        return (
            <div>
                <div>id: {this.state.car.car.id}</div>
                <div>brand: {this.state.car.car.brand}</div>
                <div>price: {this.state.car.car.price}</div>
                <div>year: {this.state.car.car.year}</div>
                <br/>
            </div>
        );
    }
}

export default Car;