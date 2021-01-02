import React from 'react';
import "./Animation.css";
import Desc from "../../Assets/desc.png";

// import Gif from "../../Assets/1.gif";
// import Background from "../../Assets/b1.jpg";

  class Test extends React.Component {
    state = {
        text: <p>Hello my name is Otgonbaatar. 17 year old a student at Olonlog EXE highschool in Mongolia. I study computer science and technology. I'm learning web developement to create lots of beautiful websites in the future. Thank you for paying attention.</p>
      }
      
      onClickButton1 = () => {
        this.setState({
          text: <p>Hello my name is Otgonbaatar. 17 year old a student at Olonlog EXE highschool in Mongolia. I study computer science and technology. I'm learning web developement to create lots of beautiful websites in the future. Thank you for paying attention.</p>
      });
    }
  
    onClickButton2 = () => {
      this.setState({
        text: <ul>
          <h1 className="uppercase font-bold opacity-60">Programming:</h1>
          <li>HTML, CSS, JS</li>
          <li>C++</li>
          <li>React JS</li>
          <li>Godot gaming engine</li>
          <li>Python</li>
          <h1 className="uppercase font-bold opacity-60">Graphic design:</h1>
          <li>Adobe Photoshop</li>
          <li>Adobe illustrator</li>
          <li>Adobe Premiere Pro</li>
          <li>Adobe XD</li>
          <li>Adobe After effect</li>
          <li>Adobe Indesign</li>
        </ul>
      });
    }
    
    onClickButton3 = () => {
      this.setState({
        text: <div className="flex gap-4">
          <button>
            <a href="https://www.facebook.com/otgnbtru/" className="fab fa-facebook fa-2x"></a>
          </button>
          <button>
            <i className="fab fa-instagram fa-2x"></i>
          </button>
          <button>
            <i className="fab fa-twitter fa-2x"></i>
          </button>
        </div>
      });
    }
  
    render() {
  
      return (
        <div className="flex flex-col items-center mt-32">
          <h1 className="uppercase text-xl text-white font-mono my-12">My Portfolio</h1>
          <div className="w-screen h-screen flex justify-evenly items-center -mt-56">
              <div className="w-96 text-white">
                  <div className="h-full">
                      <div className="flex flex-row gap-4 my-2 font-mono">
                          <button className="hover:opacity-40 border-b floating1 transition duration-500 my-4" onClick={this.onClickButton1}>
                              --> ABOUT ME
                          </button>
                          <button className="hover:opacity-40 border-b floating2 transition duration-500 my-4" onClick={this.onClickButton2}>
                              --> WHAT I CAN DO
                          </button>
                          <button className="hover:opacity-40 border-b floating3 transition duration-500 my-4" onClick={this.onClickButton3}>
                              --> CONTACT ME
                          </button>
                      </div>
                      <h1 className="font-mono">{this.state.text}</h1>
                  </div>
              </div>

              <div className="w-96  slideInRight animated floating">
                  <img src={Desc} alt=""/>
              </div>
                  {/* <img src={Gif} alt=""/> */}

              
          </div>
        </div>
      );
    }
  }
  

export default function Animation() {
    return (
        <div className="-my-16">
            {/* <img className="" src={Background} /> */}
            <Test tovchNer="Knock Knock" />

        </div>
    )
}