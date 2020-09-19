import React from 'react'
import Navigation from './Navigation';
// function Header(props) {
//     return (
//         <div>
//             <h1>Hello  {props.name} to our world</h1>
//         </div>
//     )
// }
  class Header extends React.Component{
      render(){
            return (
            <header className="border-b  p-3 flex justify-between items-center">
               <span className="font-bold">
                     App Name 
                </span> 
                <Navigation /> 
            </header>
            )
      }
  }

export default Header
