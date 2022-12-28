import React from 'react';
import './style.css'
class Spinner extends React.Component
{
    constructor(props){
        super(props);
        console.log(this.props)
        this.state = { show:false }
    }
    
    render(){
        let { IsLoading } = this.props;

        if(IsLoading)
        return (<div className='loader-overlay'>
            <span className='fa fa-spin fa-spinner spinner'></span>
        </div>)
        else
        return (<div className='loader-overlay hide'>
            <span className='fa fa-spin fa-spinner spinner '></span>
        </div>)
    }
}

export default Spinner