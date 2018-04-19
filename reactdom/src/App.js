import React, { Component } from 'react';
 class App extends Component{
   render(){
     const boss = '李云龙';
     return (
       <div>
         <h2>独立团，团长{boss}</h2>
         <一营 老大="张大彪"></一营>
       </div>
     )
   }
 }

 class 一营 extends Component{
   constructor(props){
     super(props)
     this.state = {
       solders:['胡子','柱子','王根生']
     }
   }
   render(){
     return (
       <div>
         <h2>一营营长，{this.props.老大}</h2>
         <ul>
           {
             this.state.solders.map(v=>{
               return <li>{v}</li>
             })
           }
         </ul>
       </div>
     )
   }
 }
 export default  App
