import React from "react"

const heading = {
    fontSize: '50px' ,
    
    textAlign: "center" ,
   
}
const h2 = {
    fontSize: "20px" ,
    textAlign: 'center' ,
}

const h4 ={
 height: '100%' ,
 width: '100%'
}

function PageNotFound() {
  return (
    <div>
      
        <h1 style={heading}>OOPS!</h1>
        <h2 style={h2}>Error 404: Page Not Found</h2>
        <img src={require('./img/e3.png') } style={h4}  />
        
    </div>
  );
}

export default PageNotFound