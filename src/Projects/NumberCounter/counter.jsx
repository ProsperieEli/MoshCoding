import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0
    }
    render() { 

        const classes = "badge m-2";
        // classes += (this.state.count === 0) ? "text-warmomh"
        return (
            <> 
            <span className='badge border 4px m-2 text-warning' >{this.formatCount()}</span>
            <button className='btn-secondary tn-sm'>Incrementing</button>
        </>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;