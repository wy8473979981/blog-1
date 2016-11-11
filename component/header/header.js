const {Component} = React;

import './Header.css';
class Header extends Component{
	render(){
		return(<div className="row header">
			<div className="col-lg-5 col-md-5">FM</div>
			<div className="col-lg-7 col-md-7">
			<ul className="nav nav-pills navbar-right">
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
			<div className="intr-box row card-fix">
			<div className="intr-icon-box col-lg-6 col-lg-push-0 col-md-6 col-md-push-6">
			<div className="intr-icon card-fix">
			<div className="img-box card" >
			<img src="https://yun.hainei.org/forum/201606/07/103738mwlmm98ncn7b14pn.jpg" alt="icon"/>
			</div>
			</div>
			</div>
			<div className="intr-info col-lg-6 col-lg-pull-0 col-md-6  col-md-pull-6">
			<small>莫甘娜</small>
			<h2>堕落天使</h2>
			<p>上古堕落之神，堕落天使，堕落女王，碧池女王。有一姐姐为审判天使凯尔，两者做了几百年姐妹打了几万年仗。相信“终极恐惧”的存在，追求堕落自由。</p>
			<button className="btn btn-info">more</button>
			</div>
			<div className="intr-footer col-lg-12 col-md-6"></div>
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
			<div className="case-card card-fix swiper-slide col-lg-3  col-md-5"></div>
			<div className="case-card card-fix swiper-slide col-lg-3  col-lg-offset-1-2 col-md-5 col-md-offset-2"></div>
			<div className="case-card card-fix swiper-slide col-lg-3  col-lg-offset-1-2 col-md-5 col-md-offset-2"></div>
			<div className="case-card card-fix swiper-slide col-lg-3  col-lg-offset-1-2 col-md-5 col-md-offset-2"></div>
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
			grabCursor: true,
			
		})
	}
}


class Banner extends Component{
	render(){
		return(<div className="row banner">
			<div className="col-lg-2 col-md-2 banner-left card-fix"></div>
			<div className="col-lg-6 col-md-6 banner-mid col-lg-offset-1 col-md-offset-1 card-fix"></div>
			<div className="col-lg-2 col-md-2 banner-right col-lg-offset-1 col-md-offset-1 card-fix"></div></div>)
	}
}

class Motto extends Component{
	render(){
		return(<div className="row">
			<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
			<div className="motto row card-fix">
			<div className="col-lg-6 col-md-6"></div>
			<div className="motto-tag col-lg-3 col-md-3 card">
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