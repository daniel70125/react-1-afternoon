import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            unFilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],

            userInput: "",
            filteredArray: []
        }
    }

    updateInput(val){
        this.setState({userInput: val})
    }

    filterObj(val){
        let filtered = [];
        for (let i = 0; i < this.state.unFilteredArray.length; i++){
            if (this.state.unFilteredArray[i].hasOwnProperty(val))
            filtered.push(this.state.unFilteredArray[i]);
        }
        this.setState({filteredArray: filtered});
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={(e) => this.updateInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={(e) => this.filterObj(this.state.userInput)}></button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObject;