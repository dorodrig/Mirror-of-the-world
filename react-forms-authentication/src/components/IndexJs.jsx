import ImageSlider from "./ImageSlider";
import ImageUploader from "./ImageUploader";

//import { useContext } from "react";
const IndexJs = ()=>{
    return (
          <>
          <main>
          <h1>Mirror of the world</h1>
          </main>
          
            <header className="header_index">
               <nav>
                <ul>
                    <li>Naturaleza</li>
                    <li>Explora el universo</li>
                    <li>La vista del humano</li>
                    <li>Registrate</li>
                    <li>Ingresa</li>
                </ul>
               </nav>
            </header>            
           <p> 
           Mirror of the World es una comunidad interactiva creada para transmitir, a través de imágenes y fotografías, los sentimientos y maravillas que podemos observar en el mundo, el universo y la naturaleza. Nuestra misión es construir una comunidad dinámica e inclusiva que invite a los usuarios a embarcarse en una aventura digital, capturando momentos especiales y compartiéndolos con otros. Queremos inspirar creatividad y ser una fuente de inspiración para el resto del mundo.
           </p>  
           <div className="container_primary">                              
             <ImageSlider/>
            <div className="container_primary_2">
                <ImageUploader/>
            <ul className="lista">
            <li>Registrate</li>
            <li>Ingresa</li>
            </ul>
             </div>  
            </div>  
                             
          </>
    );
      
}
export default IndexJs;