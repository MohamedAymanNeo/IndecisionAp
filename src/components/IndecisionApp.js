import  React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';



// App Component (Indecision App)
class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
        console.log("hi", optionToRemove)
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum]
        this.setState(() => ({
            selectedOption: option
        }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This Option already Exsits'
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            
            if (options) {
                this.setState(() => ({options}))
            }
        } catch(e) {

        }
    };
    componentDidUpdate(prevState, prevProps) {
        // THis Check For Prevent update until nothing change in the array
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
        
    };
    render() {
    const subtitle = "Put Your Life In The Hands Of your Computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick = {this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleRemoveAll ={this.handleRemoveAll}   
                            handleDeleteOption = {this.handleDeleteOption} 
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption= {this.state.selectedOption}
                    handleClearSelectedOption= {this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;