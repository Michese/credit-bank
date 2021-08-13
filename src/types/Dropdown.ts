export type TOption = {
  text: string;
  index?: number;
};

export type TDropdown = {
  selectedIndex: number;
  options: TOption[];
};
