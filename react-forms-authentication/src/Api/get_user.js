import axios from "axios";

const getUser = async()=>{
//obtener usuario
 const url = "http://localhost:3000/User";
    try {
    // Hace la petición al backend
    const result = await axios.get(url);

    // Verifica el éxito de la petición
    if (result.status === 200) {
        console.log(result.data)
      return result.data;
    }
   } catch (error) {
      console.error("No hubo conexión al backend");
      return null;
   }
}
// getUser();
export default getUser();