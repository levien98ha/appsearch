import React, {Component} from 'react'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { Link } from 'react-router-dom';
class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            // id: this.props.id,
            name: this.props.name,
            path: '/'+this.props.name
        }
    }
    render(){
        return(    
            <div className='item-container'>      
                <div className='show-item'>
                <Link to={this.state.path}> <InsertDriveFileIcon className='icon-item'></InsertDriveFileIcon>
                    <div className='name-file'>{this.state.name}</div>
                    </Link>
                </div>  
            </div>
            
        )
    }
}

export default Item;