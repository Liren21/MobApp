import {makeAutoObservable} from 'mobx'


interface IPageStore {
    header: boolean
    link: string

}

class PageStore implements IPageStore {
    header = false
    link = ''

    constructor() {
        makeAutoObservable(this)
    }

    setLink(val:string){
        this.link = val
    }

}

export default new PageStore()
