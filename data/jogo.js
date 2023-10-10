'use client'
import axios from 'axios';

const Personagem = async () => {

    const URL_API = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true ';
    try{
        const resposta = await axios.get(URL_API);
        return resposta.data
    } catch (error){
    throw error;
}
}
export default Personagem;