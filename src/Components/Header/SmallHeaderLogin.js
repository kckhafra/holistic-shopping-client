// import React from 'react';
// import {Link} from 'react-router-dom'



// export default class SmallHeaderLogin extends React.Component{
//     state = {
//         showMenu: false,
//     };

   
    
//     showMenu = (event)=>{
//         event.preventDefault();
        
//         this.setState({ showMenu: true }, () => {
//           document.addEventListener('click', this.closeMenu);
//         });
//       }
      
//       closeMenu = (e)=>{
//         e.preventDefault();
//         this.setState({ showMenu: false }, () => {
//           document.removeEventListener('click', this.closeMenu);
//         });
        
//       }
//     render(){
//         return(
//             <div>
//                  <div className="header_container"></div>
//                 <div className='Nav-dropdown'>
//                 <button 
//                     onClick={this.showMenu}
//                     className="nav-icon"
//                     >
//                     <div className="bar1"></div>
//                     <div className="bar2"></div>
//                     <div className="bar3"></div>
//                 </button>
//                 <header className="header">
//                     <h1 className="title1">
//                     <Link 
//                         className="link_title1"
//                         to="/">Holistic Health</Link>
//                     </h1>
//                     <form 
//                         onSubmit={this.props.onSubmit}
//                         id="header_search">
//                         <input id="header_input" name="search_term"></input>
//                         <input type="submit" className="submit-input" value="Search" ></input>
//                     </form>
//                 </header>
                
//                 {
//                     this.state.showMenu 
//                     ? (
//                         <div><div
//                             className="menu"
//                             ref={(element) => {
//                             this.dropdownMenu = element;
//                             }}
//                         >
                            
//                         </div>
                        
//                         <section className="dropdown-container">
//                         <Link
//                             className="navlinks-dropdown"
//                             to='/register'>
//                             Register {" "}
//                         </Link>
//                         <Link className="navlinks-dropdown"
//                             onClick={this.handleLogoutButton}
//                             to="/login"
//                             >
//                             Login
//                         </Link>
//                         </section>
//                         </div>
//                      ) 
//                      : (
//                          null
//                      )
//                 }
//             </div>
//             </div>
//         )
//     }
// }

