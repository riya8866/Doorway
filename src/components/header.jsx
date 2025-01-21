import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


const Header = () => {
  return (

    <>
    <nav className="py-4 justify-between flex items-center">
    <Link>
    <img src="/logo.png" className="h-19 ml-4"/>
    </Link>

   

    <header className='mr-5'>                                  {/* login in header */}
      <SignedOut>
      <Button variant="outline">Login</Button>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </nav>
    

    </>
  )
};

export default Header;
