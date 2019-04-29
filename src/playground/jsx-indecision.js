// JSX => JavaScript XML


const app = {
    title: "Indecision App",
    subtitle: "Put Your life in the hands of a computer",
    options: []
}

const user = {
    name: "Mohamed",
    Age: 25,
    Location: " Mansoura"
}


    // Here To check location if its found or not
// function getLocation(location){
//     if(location) return location
//     else return 'Unknown'
// }

    //  here to check p if the location was found or not
// function getLocation(location){
//     if(location) return <p>Location : {location}</p>
// }

        // <p>Name: {user.name ? user.name : 'Anonymous'}</p>
        // {/* {user.Age >=18 && <p>Age: {user.Age} </p>} */}
        // {( user.Age && user.Age >=18)&& <p>Age: {user.Age} </p>}
        // {/* <p>Location: {getLocation(user.Location)}</p> */}
        // {getLocation(user.Location)}




const appRoot = document.getElementById('app');
const emptyArray = () => {
    // app.options.length = 0;
    // or 
    app.options = [];
    renderOurApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    console.log(option)
};


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    e.target.elements.option.value = "";
    // console.log(e,option);
    if(option) {
        app.options.push(option)
    }
    
    renderOurApp();
};


const renderOurApp = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            {app.subtitle && <p>Subtitle: {app.subtitle}</p> }
            {/* <p> {app.options.length >= 0 ? `Here Is Your Options ${app.options}`: 'No Options'} </p> */}
            <p> {app.options.length >= 0 ? `Here are Your Options`: 'No Options'} </p>
            <button disabled={app.options.length ===0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={emptyArray}>Remove</button>
            
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit} >
                <input type="text" name="option" />
                <button>Add Option</button>
                
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};


renderOurApp();