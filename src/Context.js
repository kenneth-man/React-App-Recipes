import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => { 
    const [tempData, setTempData] = useState([]);
    const [itemContainerData, setItemContainerData] = useState([]);
    const [dataIds, setDataIds] = useState([]);
    const [dataIdsCounter, setDataIdsCounter] = useState(0);
    const [searchType, setSearchType] = useState('');
    const [searchText, setSearchText] = useState('');
    const [searchDiet, setSearchDiet] = useState(false);
    const [infoData, setInfoData] = useState(undefined);
    const key = '0f792fae3e0b4a21bbe01ca76b4e6141';

    const fetchSearchIDs = async (type, text) => {
        try {
            let response; 

            searchDiet ?
            response = await fetch(`https://api.spoonacular.com/${type}/complexSearch?query=${text}&diet=${searchDiet}&apiKey=${key}`) :
            (
                type === 'recipes' ?
                response = await fetch(`https://api.spoonacular.com/${type}/complexSearch?query=${text}&apiKey=${key}`) :
                response = await fetch(`https://api.spoonacular.com/food/${type}/search?query=${text}&apiKey=${key}`)
            )
            
            const data = await response.json();

            setDataIds(type === 'products' ? data.products.map(curr => curr.id) : 
                ( 
                    type === 'menuItems' ? 
                    data.menuItems.map(curr => curr.id):
                    data.results.map(curr => curr.id)
                )
            );
        } catch(error){
            console.log('error:', error);
        }
    }

    const fetchSearchData = async (type, id) => {
        try {
            let response;

            type === 'recipes' ?
            response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`) :
            (
                type === 'ingredients' ?
                response = await fetch(`https://api.spoonacular.com/food/${type}/${id}/information?amount=1&apiKey=${key}`) :
                response = await fetch(`https://api.spoonacular.com/food/${type}/${id}?apiKey=${key}`)
            )

            const data = await response.json();
        
            setTempData([...tempData, data]);
        } catch(error){
            console.log('error:', error);
        }
    }

    useEffect(() => {
        if(searchType && searchText) fetchSearchIDs(searchType, searchText);
    }, [searchType, searchText])

    useEffect(() => {
        if(dataIds.length > 0) fetchSearchData(searchType, dataIds[dataIdsCounter]); 
    }, [dataIds])

    //must use a 'counter' and fetch every iteration because api only gives detailed info per id in a single call; instead of e.g. an array of objects
    useEffect(() => {
        if(tempData.length > 0) setDataIdsCounter(dataIdsCounter => dataIdsCounter + 1);
    }, [tempData])

    useEffect(() => {
        if(dataIdsCounter !== 0 && dataIdsCounter < dataIds.length){
            fetchSearchData(searchType, dataIds[dataIdsCounter]);
        } else if(dataIdsCounter === dataIds.length){
            setItemContainerData(tempData);  
        }
    }, [dataIdsCounter])

    useEffect(() => {
        if(itemContainerData.length > 0){
            setTempData([]);
            setDataIdsCounter(0);
            setSearchText('');
        } 
    }, [itemContainerData])

    return (
        <Context.Provider value={{tempData, itemContainerData, searchType, searchText, searchDiet, key, infoData,
                                setSearchType, setSearchText, setSearchDiet, setItemContainerData, setInfoData}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;