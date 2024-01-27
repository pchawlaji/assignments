import axios from 'axios'
import { atom, selector } from "recoil"

export const networkAtom = atom({
    key: 'networkAtom',
    default: selector({
        key: 'networkSelector',
        get: async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            return res.data
        }
    })
})