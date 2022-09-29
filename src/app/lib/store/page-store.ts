import {makeAutoObservable} from 'mobx'


interface IPageStore {
    header: boolean
}

class PageStore implements IPageStore {
    header = false

    constructor() {
        makeAutoObservable(this)
    }

    setHeader(val:boolean){
        this.header = val
        console.log(val)
    }

}

export default new PageStore()
