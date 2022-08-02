import Link from 'next/Link';
import React from 'react';

export const Nav = () => (
  <div className='flex gap-2'>
    <NavLink href='/'>Index</NavLink>
    <NavLink href='/html'>HTML</NavLink>
    <NavLink href='/css'>CSS</NavLink>
    <NavLink href='/js'>JavaScript</NavLink>
    <NavLink href='/forms'>Form Input</NavLink>
  </div>
);

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: JSX.Element | string;
}) => (
  <Link href={href}>
    <a className='rounded-md border bg-sky-800 px-2 py-1 shadow-lg hover:bg-sky-700'>
      {children}
    </a>
  </Link>
);
