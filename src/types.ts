export interface UserNav {
  type: string;
  value: string;
}
export interface NavigationType {
  type: string;
  title: string;
  iconSrc: string;
  subItems?: UserNav[];
}

export type InputProps = {
  type: string;
  label: string;
  value?: string | number;
  name: string;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
  min?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ButtonProps = {
  type?: 'button' | 'reset' | 'submit' | undefined;
  text: string;
  className?: string;
  handleClick?: () => void;
};
export type FormType = {
  type: string;
};

export interface ITrip {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
}

interface ITripType {
  title: string;
  duration: number;
  price: number;
}

export interface IBooking {
  id: string;
  userId: string;
  tripId: string;
  guests: number;
  date: string;
  trip: ITripType;
  totalPrice: number;
  createdAt: string;
}
