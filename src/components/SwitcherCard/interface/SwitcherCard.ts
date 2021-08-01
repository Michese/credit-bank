import ISwitcherCard from "@/components/SwitcherCard/interface/ISwitcherCard"

export default class SwitcherCard implements ISwitcherCard {
  constructor(name: string, label: string, id: string, isCheck: boolean) {
    this.name = name
    this.label = label
    this.id = id
    this.isCheck = isCheck
  }

  name: string
  label: string
  id: string
  isCheck: boolean
}
