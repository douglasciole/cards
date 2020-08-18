import React, { Component } from 'react';
import queryString from 'query-string';
import MetaTags from 'react-meta-tags';
import cardsData from '../data';

export default class cardDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: queryString.parse(props.location.search)
        };
    }

    render() {
        const getExternalDir = () => {
            var getUrl = window.location;
            var baseUrl = getUrl .protocol + "//" + getUrl.host;
            return baseUrl;
        }

        const getFullDir = () => {
            var getUrl = window.location;
            var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
            return baseUrl;
        }

        return (
            <div>
                <MetaTags>
                    <title>{cardsData[this.state.query.refer].title}</title>
                    <meta property="og:url" content={"https://douglasciole.github.io/cards/display?refer=" + this.state.query.refer} />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content={cardsData[this.state.query.refer].title} />
                    <meta property="og:description" content={cardsData[this.state.query.refer].message} />
                    <meta property="og:image" content={"https://douglasciole.github.io" + cardsData[this.state.query.refer].image} />
                </MetaTags>
            </div>
        )
    }
}
