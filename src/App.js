import React, { Component } from 'react';
import Program from './Program'



class App extends React.Component {
  render() {
    return (
        
        
        <div>
          <center>
          <h1 className = "prog" style = {{backgroundColor : "blue", 
                                          color : "white",
                                          display : "flex",
                                          justifyContent: "flex-start",
                                          height : "40px"
                                          }}>
                                    The WebSite</h1>
          </center>
        <Program
        title = "Houssem "  
        content= "24 Ans Est Toujour Celibataire" 
        /> 

        
        </div>
    );
  }
}
export default App;
