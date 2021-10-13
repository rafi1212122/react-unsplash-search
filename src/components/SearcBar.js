import React from "react";

class SearchBar extends React.Component{
    state = {term:''}

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render(){
        return(
            <div className="ui segment">
                <form autocomplete="off" onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="search-input">{this.props.label}</label>
                        <input type="text" value={this.state.term} id="search-input" onChange={(e) => this.setState({term: e.target.value})}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar