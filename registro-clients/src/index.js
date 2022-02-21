import React, { useEffect, useState } from 'react'
import  ReactDOM from 'react-dom'
import './styles/main.css'
import logo from './styles/estudios_raesk.png'
import { Atleta } from './components/atletas'

const baseURL = 'http://localhost:8000'

const App = () =>{

    const [formVisible, setFormVisible]=useState(false);
    const [nome, setNome]=useState('');
    const [equipe, setEquipe]=useState('');
    const [atletas,setAtletas]=useState([]);
    
    const createAtleta = async (event) => {
      event.preventDefault();
      const new_request= new Request(
        `${baseURL}/registros/`,
        {
            body:JSON.stringify({nome,equipe}),
            headers:{
                'Content-Type':'Application/Json'
            },
            method:'POST'
        }
      );
      const response = await fetch(new_request);
      const data = await response.json();
      if (response.ok){
            console.log(data)
        }
      else{
            console.log("Failed Network Request")
        }
        setNome('')
        setEquipe('')
        setFormVisible(false)
        getAllAtletas()
    }

    const getAllAtletas = async ()=>{
      const response = await fetch(`${baseURL}/registros/`);
      const data = await response.json()
      if (response.ok){
        console.log(data)
        setAtletas(data)
      }
      else{
        console.log('Failed network request')
      }
    }
    useEffect(
      ()=>{
        getAllAtletas()
      },[]
    )

    const deleteItem= async (atletaId)=>{
      console.log(atletaId)
      const response = await fetch(`${baseURL}/registros/${atletaId}/`,{
          method:'DELETE'
      })
      if(response.ok){
          console.log(response.status)
      }
      getAllAtletas()
  }


    return (
      <div>
        <div className='header'>
          <div className='logo'>
          <img src={logo} alt="Estúdios Raesk" width='200px'/>
          </div>
          <div className='registrar'>
            <a className='botao-registrar' href='#' onClick={()=>setFormVisible(true)}>Registrar Atleta</a>
          </div>
        </div>
        {atletas.length > 0?
            (<div className="atletas-list">
                  {
                     atletas.map(
                         (item)=>(
                             <Atleta nome={item.nome} 
                                 equipe={item.equipe} 
                                 onclick={()=>deleteItem(item.id)}
                                 key={item.id}
                             />
                         )
                     )
                 }
             </div>)
             :(
                <div className="atletas-list">
                    <p className="centerText">Sem Registros</p>
                </div>
             )
        
        } 
        <div className='box'>
          <div className={formVisible? 'form':'form-notvisible'}>
            <div className='form-header'>
              <div>
                <p className='form-header-text'>Preencha os campos:</p>
              </div>
              <div>
                <a className='botao-fechar' href='#' onClick={()=>setFormVisible(false)}>X</a>
              </div>  
            </div>
            <form action="">
              <div className='form-group'>
                <label htmlFor='nome'>Nome</label>
                <input type="text" name="nome" id='nome' value ={nome} onChange={(e)=>setNome(e.target.value)} className='form-control' required/>
              </div>
              <div className='form-group'>
                <label htmlFor='equipe'>Equipe</label>
                <input type="text" name="equipe" id='equipe' value ={equipe} onChange={(e)=>setEquipe(e.target.value)} className='form-control' required/>
              </div>
              <div className='form-group'>
                <input type="submit" value='Registrar' onClick={createAtleta} className='botao-form'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));