import { Component } from "react";


class Price extends Component{
    constructor(props){
         super(props);

         this.state = {
            value: props.price
         };

         this.currency = props.currency || 395;

     }

     handleClick =()=>{
      if(this.state.value.slice(this.state.value.length-1) === "$"){
        this.setState({
            value: +this.state.value.slice(0,this.state.value.length-1) * this.currency + '֏',
      });
     } else{
        const price = this.state.value;

        this.setState({
            value: +price.slice(0, price.length-1) / this.currency + '$',
      }) 
    }
    }

    render(){
        return(
            <div>
                <span>{this.state.value}</span>
                <button onClick={this.handleClick}>Change the currency</button>
            </div>
         
        );
    }
}

export{
    Price,
}