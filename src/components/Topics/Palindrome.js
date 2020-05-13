import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();

        this.state={
            userInput: "",
            palindrome: ""
        }
    }

    updateUser(val){
        this.setState({
            userInput: val
        })
    }
    isPalindrome(userInput) {
        let backwards = userInput.split("").reverse().join("");

        for (let i = 0; i < userInput.length; i++) {
            for (let ii = 0; ii < backwards.length; ii++) {
            if (userInput[i] === backwards[i]){
                this.setState({
                    palindrome: "true"
                })
            } else {
                this.setState({
                    palindrome: "false"
                })
            }
            }
        }
    }
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.updateUser(e.target.value)}/>
                <button className="confirmationButton" onClick={(e) => this.isPalindrome(this.state.userInput)}></button>
                <span className="resultsBox">  Palindrome: { this.state.palindrome } </span>
            </div>
        )
    }
}

export default Palindrome;