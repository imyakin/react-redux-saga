import {Card} from "./Card";
import renderer from 'react-test-renderer'

describe('>>>Card snapshot', ()=>{

    it('capturing snapshot', ()=>{
        const renderedCard = renderer.create(<Card/>).toJSON()
        expect(renderedCard).toMatchSnapshot()
    })
})