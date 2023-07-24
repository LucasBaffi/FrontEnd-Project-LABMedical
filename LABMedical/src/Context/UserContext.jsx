import { createContext, useState, useEffect } from "react";

export const URL_API = 'http://localhost:3000';



export const UserContext = createContext()


export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('')
    const [filterItens, setFilterItens] = useState(users)


    useEffect(() => {

        const fecthUsers = async () => {

            try {
                const response = await fetch(`${URL_API}/pacientes`);
                const usuarios = await response.json();
                setUsers(usuarios);
            } catch (error) {
                console.error('Erro ao buscar os usuários:', error);
            }

        }
        fecthUsers()
    }, []);

   

    useEffect(() => {
        const result = users.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
         item.number.includes(search) ||
          item.email.toLowerCase().includes(search.toLowerCase())
        );
        setFilterItens(result);
      }, [search, users]);
      
     

    const handleChange = (e) => {
        setSearch(e.target.value);
        

    }

    return (
        <UserContext.Provider value={{ users, search, handleChange, filterItens }}>
            {children}
        </UserContext.Provider>
    )
}