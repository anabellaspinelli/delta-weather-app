export interface WeatherResponse {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  days: WeatherDay[];
}

export interface WeatherDay {
  tempmax: number;
  tempmin: number;
  temp: number;
  hours: WeatherHour;
}

export type WeatherHour = { temp: number }[];
