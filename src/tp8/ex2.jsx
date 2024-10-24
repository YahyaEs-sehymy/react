// import React, { useState } from 'react'
//  export default function Validator(){ 
//     const [password,setPassword]=useState('') 
//     return( 
//     <div>
//          <div> 
//             <label>Entrer votre password:</label> 
//             <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
//              </div>
//               {password.length<4?"Password doit avoir au moins t 4 caractères":""} 
//               </div> 
//               )
//              }



import React, { useState } from 'react'
 export default class Validator extends React.Component{
     constructor (){
         super(); this.state={password:''}
         } 
         render(){ 
            return( 
            <div> 
                <div> 
                    <label>Entrer votre password:</label>
                     <input type="password" value={this.state.password} onChange={(event)=> this.setState({password:event.target.value})} />
                      </div>
                       {this.state.password.length<4?"Password doit avoir au moins t 4 caractères":""}
                        </div>
                         ) 
                        } 
                    }