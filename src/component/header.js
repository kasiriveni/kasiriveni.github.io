import React,{Component,Fragment} from 'react';
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
               <h1>{this.props.name}</h1>
            </Fragment>
        )
    }
}
export default Header;