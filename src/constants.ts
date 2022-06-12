import userIcon from './assets/user.svg';
import bookingIcon from './assets/briefcase.svg';

export const Routes = {
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  bookings: '/bookings',
  tripDetails: '/trip/:tripId',
};

export const forbiddenRoutes = [Routes.signIn, Routes.signUp];

export const navigationList = [
  {
    type: 'link',
    title: 'Bookings',
    iconSrc: `${bookingIcon}`,
  },
  {
    type: 'node',
    title: 'Profile',
    iconSrc: `${userIcon}`,
    subItems: [
      { type: 'text', value: 'John Doe' },
      { type: 'button', value: 'Sign Out' },
    ],
  },
];
