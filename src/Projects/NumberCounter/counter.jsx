import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

renderTags() {
    if (this.state.tags === 0) return <p>there are no tags</p>;
            return <ul>
            {this.state.tags.map((tag)=> <li key={tag}>{tag}</li> )}
            </ul>

}

// constructor() {
//     super()
// this.handleIncriment = this.handleIncriment.bind(this)
// }

handleIncriment = () => {
this.setState({count: this.state.count + 1})
}

handleDecriment = () => {
    this.setState({count: this.state.count - 1})
    }


render() { 
    return (
<div>
<span className={this.getBadgeClasses}>{this.formatCount()}</span>
            <button onClick={this.handleIncriment} className='btn-secondary tn-sm'>Incrementing</button>
            <button onClick={this.handleDecriment} className='btn-secondary tn-sm'>Decriment</button>
            {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
</div>

        );
    }

    getBadgeClasses() {
        let classes = 'badge border 4px m-2 text-';
        classes += this.state.count === 0 ? "warning" : 'primary';
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;