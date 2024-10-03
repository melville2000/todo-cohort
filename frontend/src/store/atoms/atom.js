import axios from "axios";
import { atom, selector } from "recoil";


export const todosAtom = atom({
    key: "todosAtom",
    default: selector({
        key: "todoAtomSelector",
        get: async () => {
            const res = await axios.get("http://localhost:3000/todos")
            return res.data
        }
    })
})

