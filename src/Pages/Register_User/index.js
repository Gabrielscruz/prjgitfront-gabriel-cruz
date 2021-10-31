import './styles.css';
import Sidebar  from '../../Components/Sidebar';
import   Navbar from '../../Components/Navbar';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import  MaskedInput from 'react-maskedinput'
import { ToastContainer, toast } from 'react-toastify';
import { InsertData , UpdateUser } from '../../Service/LocalStorage'

export default function  Register_User  (users) {

    const DatasetUsers = users.location.state ?? {'id':'','nome':'', 'cpf':'','telefone':'' , 'email':''}

    const [Name,  SetName ]    = useState(DatasetUsers.nome)
    const [Cpf,   SetCpf  ]    = useState(DatasetUsers.cpf)
    const [Tel,   SetTel  ]    = useState(DatasetUsers.telefone)
    const [Email, SetEmail]    = useState(DatasetUsers.email)
    const history = useHistory()


    useEffect(() => {
        if(DatasetUsers.id === ''){
        SetName('')
        SetCpf('')
        SetTel('')
        SetEmail('')
       
        }
    }, [DatasetUsers.id])
    
    async function Cleaningmask(Text) {
        return  Text.replaceAll('.','').replaceAll('-','').replaceAll('_','').replaceAll(')','').replaceAll('(','').replaceAll(' ','')
    }

    async function Registeruser(event) {
        event.preventDefault()
        const Cpf_cleaning = await Cleaningmask(Cpf)
        const Tel_cleaning = await Cleaningmask(Tel)
      
       if(Cpf_cleaning.length < 11) {
        await toast.error("Cpf incorreto");
        return
       } 

       if(Tel_cleaning.length < 10) {
        await toast.error("Telefone incorreto");
        return
       } 
       if(Name.length  === 0) {
        await toast.error("Nome vazio por favor preencher");
        return
       } 
       if(Email.length  === 0) {
        await toast.error("Email vazio por favor preencher");
        return
       } 

        const data = await {
            nome: Name,
            cpf: Cpf_cleaning,
            telefone: Tel_cleaning,
            email: Email
        }

        if(DatasetUsers.id !== ''){
            await UpdateUser({...data, id: DatasetUsers.id})
        }else{
            await InsertData(data)
        }
        
        history.push('/lista')
        
    }


    return (
        <div id="container">
            <Sidebar/>
            <Navbar/>
            <div className="form">
                <h2> {DatasetUsers.id === '' ?'Cadastrar Usuário':'Atualizar Usuário'}</h2>
                <div className='Input'>
                    <span>
                        Nome
                    </span>
                        <input 
                        type="text"      
                        value={Name}
                        min={7}
                        max={100}
                        required
                        onChange={event => SetName(event.target.value)} 
                        />
                </div>

                <div className='Input'>
                    <span>
                        Cpf
                    </span>
                    <MaskedInput
                        type='text'
                        value={Cpf}
                        mask='111.111.111-11'
                        required
                        onChange={event => SetCpf(event.target.value)} 
                    />
                </div>

                <div className='Input'>
                    <span>
                        Telefone
                    </span>
                    <MaskedInput
                        type='tel'
                        value={Tel}
                        mask='(11) 11111-1111'
                        required
                        onChange={event => SetTel(event.target.value)}
                    />
                </div>

                <div className='Input'>
                    <span>
                        Email
                    </span>
                    <input 
                        type='email'
                        value={Email}
                        required
                        onChange={event => SetEmail(event.target.value)}
                    />
                </div>

                <div className='Submit'>
                    <input 
                        type='submit'
                        value={DatasetUsers.id !== ''?'Atualizar':'Cadastrar'}
                        onClick={Registeruser}
                    />
                </div>
            </div>
            <ToastContainer />
       </div>
    )
}
