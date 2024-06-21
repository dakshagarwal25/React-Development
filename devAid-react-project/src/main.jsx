// import React from "react"; //imr is used to import react
// import { createRoot } from "react-dom/client";
// import App from "./App"; //These two will be imported automatically after creating and rendering app
// import "./index.css";

// createRoot(document.getElementById('root')).render(React.createElement('section',{class:'section',id:'section1'},React.createElement('p', null,'this is written without using jsx')));

// createRoot(document.getElementById('root')).render(<section className="section" id="section1"><p>this is written using jsx</p></section>)

// createRoot(document.getElementById('root')).render(
//     <>
//         <section><input type="text" /></section>
//         <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem rerum veritatis necessitatibus distinctio minus reiciendis enim rem, inventore quo quia reprehenderit, sit repellat assumenda?</p></div>
//     </>
// )

import { createRoot } from "react-dom/client";
import App from './App';

createRoot(document.getElementById('root')).render(<App/>)