import { Component } from "react";

class Count extends Component{
    constructor(){
        super()
        this.state ={
            cnt : 0
        }
    }
    Increment(){
        this.setState({
            cnt:this.state.cnt + 1
        })
    }

    componentDidMount(){
        const getproduct = () => {
            fetch('https://dummyjson.com/products',{
                Method : "GET"
            })
            .then(res => res.json())
            .then((data) => {
               console.log(data);
            })
         
    
        }
        getproduct();
      }
      componentDidUpdate(){
        console.log(`Update : ${this.state.cnt}`); 
      }


    render(){
        
        return(
           <div>
            <h1 >Counter App</h1>
            <h1 >Count :- {this.state.cnt}</h1>
            <button onClick={ () => this.Increment()}>+</button>
          
           </div>
        )
    }
}
export default Count;