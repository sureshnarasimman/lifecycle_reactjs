import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:0
    }
    this.setNewNumber=this.setNewNumber.bind(this);
  };
  setNewNumber(){
    this.setState({data:this.state.data+1})
  }
  render(){
    return(
      <div>
        <button onClick={this.setNewNumber}>Increment</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    )

  }
}

class Content extends React.Component{
  componentWillMount(){ 
    console.log("component will mount !   ");
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentWillReceiveProps (newProps){
    console.log("component will recevive props ");
  }
  shouldComponentUpdate(newProps,newState) {
    return true;
  }
  componentWillUpdate(newProps,newState) {
    console.log("component will update");
  }
  componentDidUpdate(newProps,newState) {
    console.log("compoenet did update");
  }
  componentWillUnmount() {
    console.log("component will unmount ! ");
  }

  render(){
    return(
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
