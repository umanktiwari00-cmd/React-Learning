import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'


import App from './App.jsx'


function MyApp() {
    return (
        <div>
            <h1>Custom App !! </h1>
        </div>
    )
}

// why <a> method is working but ReactElement is not working as in react official the structure of
// this not as ment to be as react official like in tree structure format format but another
// Element object is as meant it is .. as we have checked in our customise react


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// So the new one as intended to be react format 

const anotherUser2 = "chai aur code"
const ReactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: "_blank", },
    'Click me to visit Google',
    anotherUser2

)

// const anotherElement = React.createElement(        
//     <a href="https://google.com" target="_blank">Visit Google</a>,
//     'click we not to open Fuking Engine',
//     anotherUser2
// )

createRoot(document.getElementById('root'))
    .render(

    // <App/>
        ReactElement

    )














