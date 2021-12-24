import { decrement2, increment2 } from "./actions";
import { DECREMENT_2, INCREMENT_2 } from "../types";


describe('Action --- Test calculator', ()=>{
    it('should add', ()=>{
        const add = increment2(50)
        expect(add).toEqual({
            type: INCREMENT_2,
            payload: 50
        })
    })

    it('should subtract', () => {
        const subtract  = decrement2(25)
        expect(subtract).toEqual({
            type: DECREMENT_2,
            payload: 25
        })
    })
})