                        // 1
// export default function TextField(props){
//     return(
//         <>
//             <label> {props.inputlabel} </label><br/>
//             <input name={props.inputlabel} type='text' /><br/>
//             <div>{props.children}</div>
//         </>
//     )
// }

                        // 2
// export default function TextField({children,inputlabel,inputName}){
//     return(
//         <>
//             <label> {inputlabel} </label><br/>
//             <input name={inputName} type='text'/><br/>
//             <div>{children}</div>
//         </>
//     )
// }

import { Component } from "react"
export default class TextField extends Component{
render(){
    return(
                <>
                    <label> {this.props.inputlabel} </label><br/>
                    <input name={this.props.inputName} type='text'/><br/>
                    <div>{this.props.children}</div>
                </>
            )}}

