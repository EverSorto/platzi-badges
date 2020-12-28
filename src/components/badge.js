import React from 'react'
import confLogo from '../images/pan.png'

 class Badge extends React.Component{
     render(){
         return (
             <div>
                 <div>
                     <img src={confLogo} alt="Logo de la conferencia"/>
                 </div>
                 <div>
                     <img src="" alt="avatar" />
                     <h1> Ever<br/> Sorto</h1>
                 </div>
                 <div>
                     <p>FullStack developer</p>
                     <p>#Panaderia Sorto</p>
                     <p>especialista en seguridad informatica</p>
                 </div>
             </div>
         )
     }
 }

 export default Badge;