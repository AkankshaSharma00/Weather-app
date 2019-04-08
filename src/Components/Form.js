import React,{Component} from "react"

class Form extends Component{
    render() {
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" placeholder="City" name="city" onChange={this.handleChange} />
                <br />
                <input type="text" placeholder="Country" name="country" />
                <br />
                <button>Show Weather</button>
            </form>  
        );
    }    
}

export default Form