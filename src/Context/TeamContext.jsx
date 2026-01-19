import {createContext, useState} from 'react'

export const TeamContext = createContext()

export const TeamProvider = ({children}) =>{
  const[teamDetails, setTeamDetails] = useState({
    name:'',
    teamPic:'',
    position:'',
    about:''
  })
  return (
    <TeamContext.Provider value={{teamDetails, setTeamDetails}}>
      {children}
    </TeamContext.Provider>
)
}