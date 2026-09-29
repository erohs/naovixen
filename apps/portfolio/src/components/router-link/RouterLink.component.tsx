import { createLink } from '@tanstack/react-router';
import { Link } from '@naovixen/components';

/** The site's Link with the router's typed `to`, preloading and client-side navigation. */
export const RouterLink = createLink(Link);
