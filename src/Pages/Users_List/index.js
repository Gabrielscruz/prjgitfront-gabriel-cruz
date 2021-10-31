import './styles.css'
import React, { useState, useEffect } from 'react'
import { SelectData, DeleteUser } from '../../Service/LocalStorage'
import Sidebar  from '../../Components/Sidebar';
import Navbar from '../../Components/Navbar'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


export default function  Users_List()  {
const [Users , setUsers] = useState([])
const [Id, SetId] =useState([])
const history = useHistory();

useEffect(() => {
    let data = SelectData()?? []
    setUsers(data)
}, [Id])


const UserDelete = (id) => {
    SetId(id)
    toast.success("Usuario deletado");
    DeleteUser(id)
}

const UserUpdate = (user) => {
     history.push('/',user)
}

    return (
        <div id="container">
        <Sidebar/>
        <Navbar/>
                    <div className='Table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Cpf</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th>Deletar</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Users[0] === undefined ? 
                        <tr key={0} className='is_not_user'>
                            <td colSpan={6}>Nenhum usuário cadastrado</td>
                        </tr>:<></> }
                        {Users.map((User) => {
                        return (
                                <tr key={User.id}>
                                    <td>{User.nome}</td>
                                    <td>{User.cpf}</td>
                                    <td>{User.telefone}</td>
                                    <td>{User.email}</td>
                                    <td   onClick={() => UserDelete(User.id)} className='Delete'><i className="fas fa-user-slash"></i></td>
                                    <td   onClick={() => UserUpdate(User)}className='update'><i className="fas fa-user-edit"></i></td>
                                </tr>
                                )
                        })}
                      
                        

                               
             
                        
                        </tbody>
                    </table>

                </div>
                <ToastContainer />
            </div>
       
    )
}

