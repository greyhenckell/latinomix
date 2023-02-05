export interface Journal {
  id: string;
  day: string;
  detailservice: json[];
  services: string;
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
}
