import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: 0
        }
    }

    componentDidMount() {
        document.addEventListener(copy, () => {
            this.props.dispatch({
                type: "ADD_ITEM"
            })
        })
    }

    render() {
        return(
            <div>
                Items: {this.props.items}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.item
    }
}

export default connect(mapStateToProps)(App)