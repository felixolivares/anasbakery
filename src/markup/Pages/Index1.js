import React, {Component} from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import OurPartners from './../Element/OurPartners';
import Slider from './../Element/Slider';
import Accord from './../Element/Accord';
	
//Images	
var img1 = require('./../../images/background/bg5.jpg');
var serblog1 = require('./../../images/our-services/macarrones.png');
var serblog2 = require('./../../images/our-services/naked-cake.png');
var serblog3 = require('./../../images/our-services/hp-cake.png');
var serblog4 = require('./../../images/our-services/snow-white-cake.png');
var img2 = require('./../../images/background/bg1.jpg');
var img3 = require('./../../images/background/bg5.jpg');
var img4 = require('./../../images/background/bg4.jpg');


const blogNews = [
	{
		image: require('./../../images/blog/grid/pic1.jpg'),
		title: 'Understand The Background Of Bakery Now.',
	},
	{
		image: require('./../../images/blog/grid/pic2.jpg'),
		title: 'Seven Reliable Sources To Learn About Bakery.',
	},
	{
		image: require('./../../images/blog/grid/pic3.jpg'),
		title: 'Ten Places That You Can Find Bakery.',
	},
]


class Index1 extends Component{
	render(){
		return(
			<>
				<Header />
			
				<div className="page-content bg-white">
					<div className="content-block">
						<Slider />
						<div className="section-full content-inner-3" style={{backgroundImage:"url(" + img1 + ")",  backgroundSize:"100%" }}>
							<div className="container">
								<div className="row service-area1">
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog1 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Macarrones</h2>
												<p>Decoraciones especiales</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/shop-product-details')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog3 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Fondant</h2>
												<p>Diferentes tipos de materiales</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/shop-product-details')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog2 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Pasteles</h2>
												<p>Diseños personalizados</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/shop-product-details')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog4 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Temáticos</h2>
												<p>Para todas las ocaciones</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<Link to={('/shop-product-details')} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head mb-0 text-center">
											<div className="icon-bx icon-bx-xl">
												<img src={require('./../../images/cake1.jpg')} alt="" />
											</div>
											<h3 className="text-primary">Esto es una fiesta y tu estas invitado!</h3>
											<p className="main-text">Encuentranos como <strong>Ana's Bakery Tepic</strong> en todas nuestras redes sociales para que puedas estar atento a nuestras promociones y productos inovadores.</p>
											<p>Creamos pasteles y productos personalizados, pregunta por nuestros precios.</p>
										</div>
									</div>
								</div>
							</div>
						</div>					
						<div className="section-full content-inner service-area2 bg-img-fix bg-line-top bg-line-bottom" style={{backgroundImage: "url(" + img4 + ")",  backgroundSize: "cover" }}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<h2 className="text-white">Que ofrecemos para ti?</h2>
											<p className="text-bold">Tenemos una amplia variedad de productos que tenemos para ofrecerte, acercate a nosotros, contactanos y cotiza sin compromiso ese bonito pastel que te gustaria presumir para tu siguiente evento.</p>
											<div className="dlab-separator style1 bg-primary"></div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-4 m-b30">
										<img src={require('./../../images/about/pic1.jpg')} className="img-cover radius-sm" alt="" />
									</div>
									<div className="col-lg-8">
										<div className="row p-l30">
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx"> 
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon1.png')} alt="" /></Link>  
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Pasteles</h5>
														<p>Personaliza tu diseño</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon2.png')} alt="" /></Link>
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Galletas</h5>
														<p>Florales y decoradas</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon3.png')} alt="" /></Link> 
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Cupcakes</h5>
														<p>Ricos sabores</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon5.png')} alt="" /></Link> 
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Eventos especiales</h5>
														<p>Pregunta por nuestros paquetes</p>
													</div>
												</div>
											</div>
											{/* <div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon5.png')} alt="" /></Link> 
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Pumpkin Cupcakes</h5>
														<p>Lorem Ipsum is dummy</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon5.png')} alt="" /></Link> 
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Cake Services</h5>
														<p>Lorem Ipsum is dummy</p>
													</div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="section-full content-inner bg-gray" style={{backgroundImage:"url(" + img2 + ")",  backgroundSize:"100%"}}>
							<div className="container">
								<div className="row faq-area1">
									<div className="col-lg-6 m-b30">
										<div className="m-r20">
											<div className="section-head text-left">
												<h2>Sale And Delivery Points</h2>
												<p className="text-bold">Where to buy our high quality Cake</p>
												<div className="dlab-separator style1 bg-primary"></div>
											</div>
											<div className="clearfix">
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
												<p className="text">First and foremost I am a chef, whether behind the stove at one of my Northern California restaurants or for the past 15 years in front of the Lorem Ipsum is simply <strong>Bakery</strong> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
												<Link to={'/faq'} className="btn btn-md btnhover shadow m-t30"><i className="fa fa-angle-right m-r10"></i>Get Started</Link>
											</div>
										</div>
									</div>
									<div className="col-lg-6 m-b30">
										<Accord />
									</div>
								</div>
							</div>
						</div> */}
						<div className="section-full content-inner bg-white">
							<div className="container-fluid">
								<div className="row">
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic1.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">pastel dietetico</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic2.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">red velvet</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic3.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">pastel de bodas</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white m-md-b0 m-sm-b0">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic2.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">fondant</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-white" style={{backgroundImage:"url(" + img3 + ")", backgroundSize:"100%" }}>
							<div className="container content-inner">
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<div className="icon-bx icon-bx-xl">
												<img src={require('./../../images/cake1.jpg')} alt="" />
											</div>
											<h3>Somos un equipo de profesionales</h3>
											<p>Nuestros mas de 500 clientes nos avalan</p>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={8} /></span>
												<small>+</small>
											</div>
											<span className="counter-text">Años de experiencia</span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={1200} /></span>
												<small>+</small>
											</div>
											<span className="counter-text">Followers</span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={500} /></span>
												<small>+</small>
											</div>
											<span className="counter-text">Clientes contentos</span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={3000} /></span>
												<small>+</small>
											</div>
											<span className="counter-text">Pasteles y postres</span>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row m-lr0 about-area1">
									<div className="col-lg-6 p-lr0">
										<img className="img-cover" src={require('./../../images/about/pic3.jpg')} alt="" />
									</div>
									<div className="col-lg-6 p-lr0 d-flex align-items-center text-center">
										<div className="about-bx">
											<div className="section-head text-center text-white">
												<h4 className="text-white">Limited Time Offer</h4>
												<p>Wedding Cake Sale !</p>
												<div className="icon-bx">
													<img src={require('./../../images/icons/service-icon/icon2.png')} alt="" />
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
											<Link to={'about-1'} className="btn-secondry white btnhover btn-md"><i className="fa fa-cart"></i>GET NOW</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row client-area1 p-t80">
									<OurPartners  />
								</div>
							</div>
							<div className="container content-inner">
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<div className="icon-bx icon-bx-xl">
												<img src={require('./../../images/cake1.jpg')} alt="" />
											</div>
											<h3>From The Blog</h3>
											<p>Latest news and updates</p>
										</div>
									</div>
								</div>
								<div className="row">
									{blogNews.map((item,index) =>(
									
										<div className="col-lg-4 col-md-6" key={index}>
											<div className="blog-post blog-grid blog-rounded" >
												<div className="dlab-post-media dlab-img-effect"> 
													<Link to={'/blog-single-sidebar'}><img src={item.image} alt="" /></Link> 
												</div>
												<div className="dlab-info p-a25">
													<div className="dlab-post-title">
														<h4 className="post-title"><Link to={'/blog-single-sidebar'}>{item.title}</Link></h4>
													</div>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-folder">
																<i className="fa fa-folder-open-o"></i> 
																<Link to={''}>Cake</Link>,  
																<Link to={''}> Biscuits</Link> 
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									))}
									
								</div>
							</div>
						</div>
					</div>		
				</div>
				<Footer />
			</>	
		)
	}
} 

export default Index1;