import { forbiddenRoutes } from '../../constants';

export const isForbiddenRoutes = (pathname: string) => {
  return forbiddenRoutes.includes(pathname);
};
