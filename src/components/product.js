import { Component } from "react";
import {Name} from "./nameProduct";
import {Price} from "./priceProduct";
import {Description} from "./productDiscription";
import {Buy} from "./productButtonBuy";
import {IconFruit} from "./iconFruit";


class Product extends Component{

    render(){
        return(
            <div>
                <Price price={this.props.price} currency={this.props.currency} />
                <Name name={this.props.name} />
                <Description description={this.props.description}/>
                <IconFruit icon = {this.props.icon}/>
                <Buy />
            </div>
           
           
        );
    }
}

export{
    Product,
}