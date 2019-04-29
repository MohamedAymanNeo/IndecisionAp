// App Component (Indecision App)
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
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
        
    }
    
    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
        console.log("hi", optionToRemove)
    }
    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum]
        console.log(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Please Add Option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This Option already Exsits'
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    render() {
    const subtitle = "Put Your Life In The Hands Of your Computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveAll ={this.handleRemoveAll}   
                    handleDeleteOption = {this.handleDeleteOption} 
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
};

// Functional Component => [Header Component]
const Header = ((props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
});
Header.defaultProps = {
    title: "Indecision"
}
        
// Functional Component => [Action Component]
const Action = ((props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >
            What Should I Do?
            </button>
        </div>
    );
});

// Functional Component => [Options Component]
const Options = ((props) => {
    return (
        <div>
        
        <button onClick={props.handleRemoveAll}>Remove All</button>
        {props.options.length == 0 && <p>Please add options To get start</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    )
})

// Functional Component => [Option Component]
const Option = ((props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
            Remove 
            </button>
        </div>
    )
})
        

// State Component => [AddOption Component]

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    onFormSubmit (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.option.value = '';
        }
        
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                    
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />,document.getElementById("app"));