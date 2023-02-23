import { createContext, useContext, useEffect } from "react";
import axios from 'axios'

export const AppContext = createContext()

const API = 'https://api.pujakaitem.com/api/products'

export const AppProvider = ({ children }) => {

    const GetProducts = async (url) => {
        const res = await axios.get(url)
        // console.log(res)
        const product = await res.data
        console.log(product)
    }

    useEffect(() => {
        GetProducts(API)
    }, [])

    return <AppContext.Provider value={{ myName: 'vinod Thapa' }}>
        {children}
    </AppContext.Provider>

}

export const useProductContext = () => {
    return useContext(AppContext)
}