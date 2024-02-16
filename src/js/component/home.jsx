import React from "react";

//include images into your bundle

import  NavBar  from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import Cards from "./Cards.jsx"
import arabia from "../../img/arabia.jpg"
import celebracion from "../../img/celebracion.jpg"
import realmadrid from "../../img/real-madrid.jpg"
import Footer from "./Footer.jsx";
//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column"> 

		<NavBar/>
		<Hero/>
		
		<div className="container d-flex mt-3 " >
			<div className="row">
			<Cards src="https://elcomercio.pe/resizer/0LF2-TdQZ3GhO4qatUxen3QdGeM=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GVEWXY6EKBH7XEWFUFHFAUA5PA.jpg"/>
			<Cards src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/10/06/10/Cristiano-Ronaldo.jpg?width=1200&height=1200&fit=crop"/>
			<Cards src="https://i.guim.co.uk/img/media/063f7dc9de6f28e814a2e029d34aa7326102ba92/632_0_1779_1068/master/1779.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a24f70710d1caa3039c0c75612c7a7b1"/>
			<Cards src={realmadrid}/>
			
			</div>
		</div>
		
			<div className="container-fluid">
			<Footer/>
			</div>
					
		</div>

		
	);
};

export default Home;
