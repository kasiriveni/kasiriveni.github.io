import React,{Component,Fragment} from 'react';
import Header from '../component/header';
import Footer from '../component/footer';

class App extends React.Component{
    render(){
        return(
            <Fragment>
                <Header name="@Srinivas"/>
                <Footer/>
            </Fragment>
        )
    }
}

export default App;