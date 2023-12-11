import { createContext, useCallback, useContext, useEffect, useState } from "react"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = createContext()

const AppProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('d');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = useCallback(async () => {
        setLoading(false);
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                const newDrinks = drinks.map((item) => {
                    const { 
                        idDrink, 
                        strDrink, 
                        strDrinkThumb, 
                        strAlcoholic, 
                        strGlass
                    } = item

                    return { 
                        id:idDrink, 
                        name:strDrink, 
                        image: strDrinkThumb, 
                        info: strAlcoholic, 
                        glass:strGlass 
                    }
                    
                })
                setCocktails(newDrinks);
            } else {
                setCocktails([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm])

    useEffect(() => {
        fetchDrinks();
    }, [searchTerm, fetchDrinks])

    return <AppContext.Provider 
        value={{
            loading,
            cocktails,
            setCocktails,
            setSearchTerm,
        }}
        >
        {children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }