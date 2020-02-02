import React, {Component} from 'react'
import logo from '../image/logo.png'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
// import ListItem from '../component/ListItem'
import Item from '../component/Item'
import axios from 'axios'
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            db: [],
            text: ''
        }
    }
    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:3000/document'
        })
        .then(reponsive => {
            this.setState({
                db: reponsive.data
            })
        })
    }

    clickSearch = (event) =>{
       let a = this.state.text
       console.log(a)
       if(a!==''){
       axios({
           method: 'GET',
           url: `http://localhost:3000/document?name=${a}`,
        })
            .then(response => {
                this.setState({
                    db: response.data
                })
       })}
       else if(a===''){
        axios({
            method: 'GET',
            url: 'http://localhost:3000/document'
        })
        .then(reponsive => {
            this.setState({
                db: reponsive.data
            })
        })}
    }
    render(){
        var showList = this.state.db.map(item => ( 
            <Item name={item.name}></Item>
        ));
        return(
            <>
            <div className='home-container'>
                <div className='home-page'>
                <img className='logo-home' src={logo}alt=''></img>
                <div className='home-search'>
                    <TextField
                        className='input-search'
                        id="outlined-helperText"
                        label="Search..."
                        defaultValue=""
                        value={this.state.text}
                        helperText="Find everything..."
                        variant="outlined"
                        onChange={e => this.setState({ text: e.target.value })}/>
                    <SearchIcon className='icon-search' onClick={this.clickSearch}></SearchIcon>
                    </div>
                    <div className='list-item-container'>
                        {showList}
                    </div>
                </div>                        
            </div></>
        )
    }
}

export default Home;