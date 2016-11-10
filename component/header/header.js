const {Component} = React;

import './Header.css';
class Header extends Component{
	render(){
		return(<div className="row">
			<div className="col-lg-5">name</div>
			<div className="col-lg-7">
			<ul className="nav navbar-nav navbar-right">
			<li className="active"><a href="">Home</a></li>
			<li><a href="">About</a></li>
			<li><a href="">Blog</a></li>
			<li><a href="">Contact</a></li>
			</ul>
			</div>
			</div>)
	}
}

class Masterintr extends Component{
	render(){
		return(<div className="row">
			<div className="col-lg-10 col-lg-offset-1 col-md-12">
			<div className="intr-box row">
			<div className="intr-icon-box col-lg-6">
			<div className="intr-icon"></div>
			</div>
			<div className="intr-info col-lg-6">
			<small>career path</small>
			<h2>职业</h2>
			<p>介绍介绍介绍介绍介绍介绍介绍介绍</p>
			<button className="btn btn-info">more</button>
			</div>
			<div className="intr-footer col-lg-12"></div>
			</div>
			</div>
			</div>
			)
	}

}

class Case extends Component{
	render(){
		return(<div className="case row">
			<div className="col-lg-10 col-lg-offset-1 col-md-12">
			<div className="case-swiper row">
			<div className="swiper-wrapper">
			<div className="card swiper-slide col-lg-3  col-md-5"></div>
			<div className="card swiper-slide col-lg-3  col-lg-offset-1-2 col-md-5 col-md-offset-2"></div>
			<div className="card swiper-slide col-lg-3  col-lg-offset-1-2 col-md-5 col-md-offset-2"></div>
			<div className="card swiper-slide col-lg-3  col-lg-offset-1-2 col-md-5 col-md-offset-2"></div>
			</div>
			<div className="swiper-scrollbar"></div>
			</div>
			</div>
			</div>)
	}
	componentDidMount(){
		const mySwiper = new Swiper('.case-swiper',{
			scrollbar: '.swiper-scrollbar',
			scrollbarHide: true,
			slidesPerView: 'auto',
			grabCursor: true
			
		})
	}
}


class Banner extends Component{
	render(){
		return(<div className="row banner">
			<div className="col-lg-2 banner-left"></div>
			<div className="col-lg-6 banner-mid col-lg-offset-1"></div>
			<div className="col-lg-2 banner-right col-lg-offset-1"></div></div>)
	}
}

class Motto extends Component{
	render(){
		return(<div className="row">
			<div className="col-lg-10 col-lg-offset-1">
			<div className="motto row">
			<div className="col-lg-6"></div>
			<div className="motto-tag col-lg-3">
			</div>
			</div>
			</div>
			</div>
			)
	}
}

class Footer extends Component{
	render(){
		return(<div className="row footer">
			<div className="col-lg-10 col-lg-offset-1">
			<div className="copyright">
			<h4>
			maskface</h4>
			<p>xxxxxx</p></div></div></div>)
	}
}
export {Header,Masterintr,Case,Banner,Motto,Footer};