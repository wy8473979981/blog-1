const {Component} = React;
import {Header,Masterintr,Case,Banner,Motto,Footer} from './Header/Header.js' 

class Container extends Component{
	render(){
		return(<div className="container-fluid" >
			<Header></Header>
			<Masterintr></Masterintr>
			<Case></Case>
			<Banner></Banner>
			<Motto></Motto>
			<Footer></Footer>
			</div>)
	}
}

ReactDOM.render(<Container></Container>,document.body)