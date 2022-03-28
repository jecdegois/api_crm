import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import Spinner from "../components/Spinner"
const VerCliente = () => {
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(false)
    const {id} = useParams();
    
    useEffect(() => {
        
        setCargando(!cargando);
   
      const obtenerClienteAPI = async() => {
        try {
            const url = `http://localhost:4000/clientes/${id}`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setCliente(resultado)
        } catch (error) {
            console.log(error)
        }
        setCargando(false);
      }
        obtenerClienteAPI()
    }, [])
    

  return (
      
      <div>
          {cargando ? <Spinner/> : (
              Object.keys(cliente).length === 0 ? <p>No Hay Resultados :(</p> : (
              <>
                <h1 className='font-black text-4xl text-blue-900'>Ver Cliente ID: {cliente.id} </h1>
                <p className='mt-3 '>Informacion de el cliente</p>
                {cliente.nombre && (
                 <p className="text-4xl text-gray-600">
                    <span className=" text-gray-800 uppercase font-bold ">Cliente: </span> 
                   {cliente.nombre}
                  </p>
                )}
                {cliente.email && (
                 <p className="text-4xl text-gray-600">
                    <span className=" text-gray-800 uppercase font-bold ">Cliente: </span> 
                   {cliente.email}
                  </p>
                )}
                
                   {cliente.telefono && (
                 <p className="text-2xl mt-4  text-gray-600">
                  <span className=" text-gray-800 uppercase font-bold ">Telefono: </span> 
                      {cliente.telefono}
                 </p>
                   ) }
                   {cliente.empresa && (
                 <p className="text-2xl mt-4  text-gray-600">
                  <span className=" text-gray-800 uppercase font-bold ">Telefono: </span> 
                      {cliente.empresa}
                 </p>
                   ) }
          
                   {cliente.notas && (
                    <p className="text-2xl mt-4  text-gray-600">
                        <span className=" text-gray-800 uppercase font-bold ">Notas: </span> 
                         {cliente.notas}
                   </p>
                )}
                </>
          ))}
      

      </div>

  )
}

export default VerCliente