import React, {createContext, useState} from 'react'

export const AlunosContext = createContext();

export const AlunosProvider = ({children}) => {
    const [alunos, setAlunos] = useState([]);

    return (
        <AlunosContext.Provider value={{alunos, setAlunos}}>
            {children}
        </AlunosContext.Provider>
    );
};

