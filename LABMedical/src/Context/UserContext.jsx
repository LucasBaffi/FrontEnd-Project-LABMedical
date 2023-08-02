import { createContext, useState, useEffect } from "react";

export const URL_API = 'http://localhost:3000';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [consultas, setConsultas] = useState([])
    const [exames, setExames] = useState([])
    const [search, setSearch] = useState('')
    const [pacientes, setPacientes] = useState([])
    const [filterItens, setFilterItens] = useState(users)

    const handleDelete = (userId) => {
      
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    };

    useEffect(() => {
      const fetchPacientes = async () => {
        try {
          const response = await fetch(`${URL_API}/pacientes`);
          const usuarios = await response.json();
          setPacientes(usuarios);
        } catch (error) {
          console.error('Erro ao buscar os usuários:', error);
        }
      };
  
      fetchPacientes();
    }, []);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${URL_API}/pacientes`);
        const usuarios = await response.json();
        setUsers(usuarios);
      } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  

    useEffect(() => {

        const fecthConsul = async () => {

            try {
                const response = await fetch(`${URL_API}/consultas`);
                const consultas = await response.json();
                setConsultas(consultas);
            } catch (error) {
                console.error('Erro ao buscar os usuários:', error);
            }

        }
        fecthConsul()
    }, []);

    useEffect(() => {

        const fechtExames = async () => {

            try {
                const response = await fetch(`${URL_API}/exames`);
                const consultas = await response.json();
                setExames(consultas);
            } catch (error) {
                console.error('Erro ao buscar os usuários:', error);
            }

        }
        fechtExames()
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
        <UserContext.Provider value={{ users, search, handleChange, filterItens, consultas,exames, handleDelete, pacientes}}>
            {children}
        </UserContext.Provider>
    )
}

