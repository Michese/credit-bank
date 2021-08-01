export default interface IOption {
    text: string
    index?: number

    setIndex(index: number): IOption
}