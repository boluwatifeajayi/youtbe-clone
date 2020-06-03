import React, { Component } from 'react'



export class SearchBar extends Component {
    state = {
        searchTerm : '',
    }

    handleChange = (event) => 
        this.setState({searchTerm: event.target.value});

        handleSubmit = (event) => {
            const {searchTerm} = this.state;
            const { onFormSubmit } = this.props;

            onFormSubmit(searchTerm);

            event.preventDefault();
        }
    

    render() {
        return (
            <div>
                <div style={{padding: '25px'}}>
                    <form onSubmit={this.handleSubmit}>
                        <input label="Search..." onChange={this.handleChange} className="searcher" placeholder="Search Watcher..."/>
                        <input type="submit" value="Search" onChange={this.handleChange} className="search-btn"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar
