import { Component } from "react";


function MyName () {

    return(
        <div>
            <h1>Harut Hovhannisyan</h1>
        </div>
    )
}

function WhoIAm () {

    return(
    <div>
        <p>
           I am Harut Hovhannisyan LIVE in Vanadzor,  I am React developer,I LIKE development,i am have a brodher her name is Arman Hovhannisyan he is also a programmer,he works for php and nodejs
        </p>    
    </div> );
}

class Counter extends Component{

    // constructor(props){
    //     super(props);
    // }
    state = {
        value: 0,
    }



    render(){
        return(
            <div>
                Hello from Counter
                <p>The value is {this.props.defaultValue}</p>
                <h3>{this.state.value}</h3>
                <button
                onClick={(event) => {
                    if(this.state.value){
                        this.setState({
                            value : this.state.value - 1
                        });
                    }
                }}
                >
                    Change -
                </button>
                <button
                onClick={(event) => {
                    this.setState({
                        value : this.state.value + 1
                    });
                }}
                >
                    Change +
                </button>
            </div>
        );
    }
}

export default Counter;

// Homework
// 1.Ստեղծել Product անունով class component, որի մեջ դնել Price, Name և Description class component-ները։ 
// Product-ը դնել  App.js-ում և props-ով նրան փոխանցել price, name, description պարամետրերը, որոնք պետք է օգտագործվեն համապատասխանաբար Price, Name և Description կոմպոնենտների մեջ։ Օրինակ՝ <Product name=”banabas” price=”1$” description=”Fresh bananas from Ecuador” />
// Բոլոր կոմպոնենտները պետք է լինեն առանձին մոդուլներում։ state օգտագործելու կարիք չկա։



// Ունենք նախկին տնայինի կոմպոնենտները։ Price կոմպոնենտի մեջ ստանալ props.price-ը, ավելացնել state-ում և ցույց տալ։ Price կոմպոնոնետը պետք է ցույց տա իր state-ում գրանցված price-ի արժեքը, որը սկզբից դոլարով է արտահայտված և նրա կողքին պետք է լինի button՝ “Change the currency” գրությամբ։ button-ի վրա սեղմելուց պետք է վերցնել state-ից price-ը, եթե այն արտահայտված է դոլարով, ապա փոխել այն դրամի (ընդունել 1$ = 500֏) և ցույց տալ այն դրամով արտահայտված։ Հաջորդ սեղմելուց, եթե վերջինս դրամով էր, ձևափոխել դոլարի և այդպես շարունակ։


export{
    MyName,WhoIAm,
}