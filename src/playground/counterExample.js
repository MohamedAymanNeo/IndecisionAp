class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        }
    }


    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10)
            if(!isNaN(count)) {
                this.setState(() => ({count}))
            }
        } catch(e) {

        }
    };

    componentDidUpdate(prevState,prevProps) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }

    };
    handleAddOne() {
        this.setState((prevState) => ({count: prevState.count +1}));
    };
    handleMinusOne() {
        this.setState((prevState) => ({count: prevState.count -1}));
    };
    handleReset() {
        this.setState(() => ({ count: 0 }));
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />,document.getElementById('app'));




// let count = 0;
// const add = () => {
//     count++
//     renderCounterApp();
// };
// const minus = () => {
//     count--
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0
//     renderCounterApp();
// };
// const appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={add}>+1</button>
//             <button onClick={minus}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }
// renderCounterApp();