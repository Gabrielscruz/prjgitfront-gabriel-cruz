

const  InsertData = (data) => {
    // cria chave do id currenttime concatena  numero aleatorio
    const  id = new Date().getTime();
    // colocamos id junto com os do usuario 
    const newUser = {id: id, ...data}
    // varificamos todos usuarios e transfomamos string em json 
    let user = JSON.parse(localStorage.getItem('users'))
    // se nao tiver usuario inserimos novo no lugar como lista
    if (user === null){user = [newUser]}
    // se tive adicionamos ele ao json 
    if( user !== null){user.push(newUser)}

    localStorage.setItem('users', JSON.stringify(user))
}

const SelectData = () =>{
    // puxa os dados do localStorage em formato json
    const data = JSON.parse(localStorage.getItem('users'))
    return data
}

const DeleteUser = (id) => {
    let users = JSON.parse(localStorage.getItem('users'))
    //filtra todos usuarios diferentes do delete
    let data =  users.filter(user => parseInt(user.id) !== parseInt(id))
    //insere os dados localstorage em formato de string
    localStorage.setItem('users', JSON.stringify(data)) 
}

const UpdateUser = (user) => {
    // puxa todos os usuarioss
    let users = JSON.parse(localStorage.getItem('users'))
    // procura o indece pelo id
    let index = users.findIndex(userindex => parseInt(userindex.id) === parseInt(user.id))
    // substitui os dados do indece
    users[index] = user
    //insere os dados localstorage em formato de string
    localStorage.setItem('users', JSON.stringify(users)) 
}

export { InsertData , SelectData , DeleteUser, UpdateUser}