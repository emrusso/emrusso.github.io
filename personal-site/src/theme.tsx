export interface Theme {
  backgroundColor: string;
  color: string;
  highlightColor: string;
  icon: string;
  iconColor: string;
}

export const LightTheme: Theme = {
  backgroundColor: '#ffffff',
  color: '#0a747e',
  highlightColor: '#FFF275',
  icon: 'add',
  iconColor: '#FF8C42'
  //moonstone - #0FA3B1
};

export const LightGardenTheme: Theme = {
  // backgroundColor: '#BFEDC1',
  backgroundColor: '#ECF7ED',
  color: '#86608E',
  highlightColor: '#F9F5E3',
  icon: 'filter_vintage',
  iconColor: '#FF8C42'
};

export const DarkTheme: Theme = {
  backgroundColor: '#2B303A',
  // color: '#BAC1B8',
  color: '#E6E9E6',
  highlightColor: '#c0321f',
  icon: 'add',
  iconColor: '#C38B8B',
};

export const DarkGardenTheme: Theme = {
  backgroundColor: '#06593f',
  color: '#BAC1B8',
  highlightColor: '#562C2C',
  icon: 'park',
  iconColor: '#C38B8B',
}
