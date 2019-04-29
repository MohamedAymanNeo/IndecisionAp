class Visible extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick= {this.handleToggle}>
                    {this.state.visibility ? "Hide Details" : "Show Details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey Iam The Details</p>
                    </div>
                )}
            </div>
        )
    }
}



ReactDOM.render(<Visible /> , document.getElementById('app'))