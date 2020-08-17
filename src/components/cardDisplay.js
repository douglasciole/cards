import React, { Component } from 'react';
import queryString from 'query-string';
import MetaTags from 'react-meta-tags';

export default class cardDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: queryString.parse(this.props.location.search)
        };
    }

    render() {
        return (
            <div>
                <MetaTags>
                    <title>{this.state.query.name}</title>
                    <meta property="og:url" content="MyApp" />
                    <meta property="og:type" content="MyApp" />
                    <meta property="og:title" content="MyApp" />
                    <meta property="og:description" content="MyApp" />
                    <meta property="og:image" content="path/to/image.jpg" />
                </MetaTags>
                {this.state.query.name}
            </div>
        )
    }
}
