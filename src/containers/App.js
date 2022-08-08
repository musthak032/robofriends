import React,{Component} from "react";
import CardList from "../components/CardList";
// import {robot} from './robot';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css'
class App extends Component {
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:""
        };
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")  
        .then(response => response.json())
        .then(users =>this.setState({robots:users}));
        
    }
    onsearchchange=(event)=>{
       this.setState({searchfield: event.target.value});

        // const filterrobots=this.state.robots.filter((robot)=>{
        //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // });
         // console.log("filter"+ event.target.value);
    }
    render(){
             const filterrobots=this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            });
             if (this.state.robots.length===0) {
                return <h1>Loading...</h1>
             }
             else
             {
                        return(
                                <div className='tc'>
                                    <h1 className ="f1">robo friends</h1>
                                    <Searchbox searchchange={this.onsearchchange} />
                                    <Scroll>
                                         <CardList robot={filterrobots}/>
                                    </Scroll>
                                   

                                </div>
                              
                            );
             }
   
 }

}
export default App;
// props never change  it only get information to display the page  props is one of the property of state
// state is use update information acoordingly state mean simple mean desription of application and state 