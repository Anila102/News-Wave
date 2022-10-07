// import React, { Component } from 'react'
// import loading from './loading.gif'
// export default class Loading extends Component {
//     render() {
//         return (
//             <>
//             <div className="text-center">
//                 <img src={loading} alt="loading" />
//             </div>
//             </>
//         )
//     }
// }

// Function based 
import React, { Component } from 'react'
import loading from './loading.gif'
const Loading =()=> {
    
        return (
            <>
            <div className="text-center">
                <img src={loading} alt="loading" />
            </div>
            </>
        )
    
}
export default Loading;