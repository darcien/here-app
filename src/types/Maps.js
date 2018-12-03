// @flow

export type Region = {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
};

export type LatLng = {
  latitude: number,
  longitude: number,
};

export type Point = {
  x: number,
  y: number,
};

export type Location = {
  latitude: number,
  longitude: number,
  altitude: number,
  timestamp: number, //Milliseconds since Unix epoch
  accuracy: number,
  altitudeAccuracy: number,
  speed: number,
};

export type Marker = {
  id: string,
  coordinate: LatLng,
  title: string,
  description: string,
};
