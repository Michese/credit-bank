import IOption from "@/components/Dropdown/interface/IOption"

export default class Option implements IOption {
    constructor(text:string) {
        this.text = text
    }

    setIndex(index: number): IOption {
        this.index = index
        return this
    }

    index?: number
    text: string
}