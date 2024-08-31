export interface Journal {
  id: string;
  day: string;
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  place: string;
  address: string;
  start_time: string;
  end_time: string;
  dance_type: string;
  description: string;
  duration: string;
  keys: string;
}

export interface EditService {
  id: string;
  name: string;
  place: string;
  address: string;
  start_time: string;
  end_time: string;
  dance_type: string;
  duration: string;
  keys: string;
}

export interface Provider {
  clientId: string;
  clientSecret: string;
}

export interface User {
  name: string;
  email: string;
  image: string;
}

export interface Ticket {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  finalprice: number;
  offer: boolean;
}

export interface News {
  id: string;
  event_name: String;
  tagClass: string;
  description: string;
  place: string;
  dressCode: string;
  price: string;
  imageName: string;
}
