import React, {Component} from 'react'
import logo from '../image/logo.png'
import axios from 'axios'
class Information extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            text: []
        }
    }
    componentDidMount(){
        axios({
            method: 'GET',
            url: `http://localhost:3000/document?name=${this.state.name}`
        })
        .then(reponsive => {
            this.setState({
                text: reponsive.data
            })
        })
    }
    render(){
        const {text} = this.state
        console.log(text)
        var x =  text.map((item) => {
            return(
                <pre className='info-item'>{item.text}</pre>
            )
        })
        return(
            <div className='home-container'>
                <div className='home-page'>
                <img className='logo-home' src={logo}alt=''></img>
                <div className='home-search'>
                    <h1 className='title-info'>File Content</h1>
                    {x}
                </div>          
                </div>              
            </div>
        )
    }
}
export default Information;

