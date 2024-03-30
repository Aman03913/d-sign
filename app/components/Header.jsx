import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
export default function Header() {
  return (
    <Navbar className='py-4 sticky transition-colors duration-200 ease-in-out bg-[#f8f9fa] text-gray-700 text-3xl '>
      <NavbarBrand>
        <Link href="/" className='font-bold text-inherit'>BLOCK-PEN</Link>
      </NavbarBrand>

      <NavbarContent justify='end'>
        <NavbarItem>
          <Link href='/contact'>Contact us</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color='secondary'
            href='/login'
            variant='flat'
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
