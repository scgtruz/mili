export interface County {
  name: string;
  state: string;
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export interface Location {
  state: string;
  county: string;
  zipCode?: string;
}