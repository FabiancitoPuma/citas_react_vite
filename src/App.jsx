import { Header } from "./components/Header"
import {Formulario} from './components/Formulario'
import { ListadoPacientes } from "./components/ListadoPacientes"
import { useState ,useEffect} from "react"

//padre
export function App() {
// LOCALSTORAGE NO PUEDES GUARDAR ARREGLOS , SOLAMENTE PUEDES GUARDAR STRINGS  
  const [pacientes,setPacientes]=useState(JSON.parse(localStorage.getItem('pacientes')) ?? []); //ESTOS SON HOKSSS
  // eslint-disable-next-line no-unused-vars
  const [paciente,setPaciente]=useState({});

  useEffect(()=>{
    const obtenerLS=()=>{
      const pacientesLS= JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  },[]);//CUANDO LE PASÓ UN ARREGLO [] VACIO ,SOLO SE EJECUTARÁ 1 VEZ 

  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = id=>{
    const pacientesActualizados= pacientes.filter(paciente => paciente.id !==id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
    {/* El header es el hijo */}
      <Header
        
      />
      <div className="className"></div>
      
      <div className="mt-12 md:flex">
         <Formulario
         pacientes={pacientes}//ESTOS SON PROPS
        setPacientes={setPacientes}
        paciente ={paciente}
        setPaciente={setPaciente}
       /> 
       
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}
