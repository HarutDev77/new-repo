import { Component } from "react";
import styles from "./css/todo_1.module.css";
import { Container, Button, Form, Col, Row, InputGroup} from 'react-bootstrap';



export class ToDoApp extends Component{

    state = {
        value: "",
        tasks: [],
        show:  false,
    }

    handleChange = (e) =>{
        this.setState({
            value: e.target.value,
        });
    }

    handleClick = () => {

        const inputValue = {value: this.state.value.trim(), key: this.makeid(10),};

        if(!inputValue?.value){
            return;
        }

        const tasks = [...this.state.tasks];
        tasks.push(inputValue);
        this.setState({
            value: '',
            tasks: tasks,
        });

        if(tasks.length > 0){
            this.setState({
                show:  true,
            });
         }
    }

    removeTasks = ({target}) => {
       let key = target.dataset.key;
       let filteredTasks = this.state.tasks.filter(task => task.key !== key);
       
       this.setState({
            tasks: filteredTasks,
       });
    }

    removeAllTasks = () => {
        this.setState({
            tasks: [],
            show:  false,
       });
    }
    
    render(){
        
        const li = this.state.tasks.map((el,index)=>{
            return (
                <div className='row mt-3' key={index}>
                    <div className='d-flex justify-content-between col-6 mx-auto'>
                        <li className={styles.liTasks} >{el.value}</li>
                        <div className={'d-flex'}>
                            <InputGroup.Checkbox/>
                            <Button  onClick={this.removeTasks} variant="danger" data-key={el.key}>Remove Task</Button>
                        </div>
                   
                        
                    </div>
                </div>
                );
        });

        return(
        <Container>
            <Form className={"col-8 offset-2 mt-2"}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col lg="10">
                        <Form.Control value={this.state.value} onChange={this.handleChange} type="text"/>
                    </Col>
                    <Col lg="2">
                        <Button variant="success" onClick={this.handleClick}>Click me</Button>
                    </Col>
                </Form.Group>
            </Form>

            <ol className='mt-3'>
                {li}
                {this.state.show ? <Col className={"col-2 offset-5 mt-2"}><Button onClick={this.removeAllTasks}>Remove All</Button></Col> : null}
            </ol>
        </Container>
        );
    }


    makeid(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
}