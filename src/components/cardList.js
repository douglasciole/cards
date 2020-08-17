import React, { Component } from 'react'
import Card from './card'

export default class cardList extends Component {
    render() {
        return (
            <div>
                <div className="title">Cards</div>
                <div className="cards-container">
                    <Card refer="sp" label="Saint Patrick's" image="/images/sp.jpg" />
                    <Card refer="xmas" label="Christmas" image="/images/xmas.png" />
                    <Card refer="mday" label="Mother's Day" image="/images/mday.jpg" />
                </div>

                <div className="cards-container">
                    <Card refer="sp" label="Saint Patrick's" image="/images/sp.jpg" />
                    <Card refer="xmas" label="Christmas" image="/images/xmas.png" />
                    <Card refer="mday" label="Mother's Day" image="/images/mday.jpg" />
                </div>

                <div className="cards-container">
                    <Card refer="sp" label="Saint Patrick's" image="/images/sp.jpg" />
                    <Card refer="xmas" label="Christmas" image="/images/xmas.png" />
                    <Card refer="mday" label="Mother's Day" image="/images/mday.jpg" />
                </div>
            </div>
        )
    }
}
