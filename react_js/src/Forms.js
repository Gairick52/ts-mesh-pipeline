import React from "react"
class Forms extends React.Component{
    constructor()
    {
        super()
        this.state={
            user:null,
            password:null

        }
    }
    submit(){
        console.warn("this is a state",this.state)
    }
    render(){
        return(
            <div>
                <h1>
                    Form Handling
                </h1>
                <input type="text" name="user"  onClick={(e)=>{this.setState({user:e.target.value})}}/>
                <br></br>
                <input type="password" name="password"  onClick={(e)=>{this.setState({password:e.target.value})}}/>
                <br></br>
                <button onClick={()=>{this.submit()}}>Submit</button>
            </div>
        )
    }
}
export default Forms;