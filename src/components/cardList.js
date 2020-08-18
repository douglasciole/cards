import React, { Component } from 'react'
import Card from './card'
import cardsData from '../data';

export default class CardList extends Component {
    render() {
        return (
            <div>
                <div className="title">Cards</div>
                
                

                <div className="cards-container">
                    
                    {Object.keys(cardsData).map((key, index) => <Card refer={key} label={cardsData[key].title} image={cardsData[key].image} />)}
                    
                </div>
            </div>
        )
    }
}
