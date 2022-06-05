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

render() { 
    return (
        <> 
            <span className={this.getBadgeClasses} >{this.formatCount()}</span>
            <button className='btn-secondary tn-sm'>Incrementing</button>
            {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
        </>
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