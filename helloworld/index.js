// var element = React.createElement("div", null, "Hello World")
// var element = (
//     <div>
//         <h1>Hello World</h1>
//         <p>hhhhh</p>
//     </div>
// );

// ReactDOM.render(element, document.getElementById("app"))
// function tick() {
//     var timer = new Date().toLocaleString()
//     var Clock = (
//     <div>
//         <h1>Clock</h1>
//         <p>Timer: {timer}</p>
//     </div>
//     );
//     ReactDOM.render(Clock, document.getElementById("app"))
// }
// setInterval(tick, 1000)


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: new Date().toLocaleString()
        };
        setInterval(this.tick, 1000)
    }

    tick = () => {
        this.setState({
            timer: new Date().toLocaleString()
        })
        // this.state.timer = 
        // console.log(this.state.timer)
    }

    render() {
        
        // console.log("call render", this.state.timer)
        return (
            <div>
                <h1>Clock</h1>
                <p>Timer: {this.state.timer}</p>
            </div>
        );
    }
}
ReactDOM.render(<Clock />, document.getElementById("app"))