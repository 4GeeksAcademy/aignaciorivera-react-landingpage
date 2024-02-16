import React from "react";


let Cards = (props) =>{

   return<> 
  <div className="col-12 col-md-6 col-xl-3 mb-5 pb-5 mt-3">
   <div class="card ">
      <img src={props.src} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>

</>
}
export default Cards; 