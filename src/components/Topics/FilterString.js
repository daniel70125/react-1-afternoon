import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
    
        this.state = {
          names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
          userInput: '',
          filteredNames: []
        };
      }
      updateInput(val){
        this.setState({
            userInput: val
        })
      }
      handleChange(val){
          this.setState({
              userInput: val
          })
      }
      filterNames(userInput) {
        let newFiltered = [];
       for (let i = 0; i < this.state.names.length; i++) {
           if (this.state.names[i].toLowerCase().includes(userInput)) {
               newFiltered.push(this.state.names[i]);
           }
           
       }
       this.setState({filteredNames: newFiltered});
    }
    
    render(){
        console.log(this.state)
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
                <input onChange={(e) => this.updateInput(e.target.value)} className="inputLine"></input>
                <button className="confirmationButton" onClick={(e) => this.filterNames(this.state.userInput) }></button>
                <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
            </div>
        )
    }
}

export default FilterString;