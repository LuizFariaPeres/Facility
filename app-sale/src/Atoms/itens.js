import {atom} from 'recoil'

export const Items = atom({
    key:'taskItems',
    default: []
})