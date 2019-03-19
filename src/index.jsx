import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import '../assets/stylesheets/application.scss';


// const test = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

// class Hello extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       clicked: false
//     };
//   }


//   handleClick = () =>{
//     console.log('clicked')

//     this.setState({clicked: !this.state.clicked})
//   }

//   render(){
//     return(
//         <div className={this.state.clicked ? 'clicked' : null}
//         onClick={this.handleClick}>
//         Hello, {this.props.name}
//         </div>
//       );
//   }
// }

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
