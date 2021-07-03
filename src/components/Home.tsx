import React, { Component } from 'react';

class Home extends Component {
    state = {
        value: 'home'
    }

    render() {
        const { value } = this.state
        return (
            <div>
                <h1 className="flex mx-auto my-auto">{value}</h1>
            </div>
        )
    }
}

export default Home;