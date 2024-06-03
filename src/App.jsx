import { useEffect, useState } from 'react'
import './App.css'
import DataTable from './components/DataTable'
import axios from 'axios'

function App() {
    const [produtos, setProdutos] = useState({});

    useEffect(()=>{
        const getProdutos = async ()=>{
            const URL_PRODUTOS = 'https://dc-store-api-ka0t.onrender.com/api/produtos'
            try {
                const result = await axios.get(URL_PRODUTOS);
                const produtos = result.data;
                setProdutos(produtos);
            } catch (error) {
                console.error(`Erro na requisição: ${error}`);
            }
        }
        getProdutos();
    },[])

    return (
        <>
            {produtos.length > 0 ? <DataTable data={produtos} /> : null}
        </>
    )
}

export default App
