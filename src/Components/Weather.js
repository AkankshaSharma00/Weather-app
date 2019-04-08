import React,{Component} from "react"

class Weather extends Component{
    render(){
        return(
            <div>
                { this.props.city && this.props.country && <p><b>Location :</b> {this.props.city}, {this.props.country}</p>}
                { this.props.temperature && <p><b>Temperature :</b> {this.props.temperature} C</p>}
                { this.props.humidity && <p><b>Humidity :</b> {this.props.humidity}</p>}
                { this.props.description && <p><b>Description :</b> {this.props.description}</p>}
                { this.props.wind && <p><b>Wind Speed :</b> {this.props.wind} m/s</p>}
                { this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

export default Weather