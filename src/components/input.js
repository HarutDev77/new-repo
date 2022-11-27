import { Component } from "react";

export class Input extends Component{

    state = {
        value: "",
        tasks: [],
    }

    handleChange = (e) =>{
        this.setState({
            value: e.target.value,
        });
    }

    handleClick = () => {

        const inputValue = this.state.value.trim();

        if(!inputValue){
            return;
        }

        const tasks = [...this.state.tasks];
        tasks.push(this.state.value);
        this.setState({
            value: '',
            tasks: tasks,
        });
    }
    
    render(){
        const li = this.state.tasks.map((el,index)=>{
            return <li key={index}>{el}</li>
        });
        return(
            <div>
                <input value={this.state.value} onChange={this.handleChange} type="text" />
                <button onClick={this.handleClick}>Click me</button>
                <ol>
                  {li}
                </ol>
            </div>
        );
    }
}