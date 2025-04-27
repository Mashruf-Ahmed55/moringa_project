'use client';
import cartBtn from '@/assets/cartBtn.json';
import notFoundProduct from '@/assets/notFoundProduct.json';
import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { Loader2Icon, Menu } from 'lucide-react';

import React, { lazy, Suspense, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { TbShoppingBag } from 'react-icons/tb';
import { Link, useLocation } from 'react-router';
import { TypeAnimation } from 'react-type-animation';
import { Button } from './ui/button';
import { Command, CommandInput, CommandList } from './ui/command';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const Lottie = lazy(() => import('lottie-react'));
export default function Header() {
  return (
    <div className="w-full sticky top-0 z-50 backdrop-blur-2xl border-b border-gray-200">
      <div className="bg-black text-white h-10 w-full flex items-center justify-center">
        <AnnounsmentBer />
      </div>
      <div className="w-full bg-white">
        <div className="w-full md:max-w-7xl mx-auto py-4 px-4 md:px-0">
          <div className="w-full flex items-center justify-between">
            <div className="md:hidden">
              <NavMenu component={<Menu />} />
            </div>
            {/* Logo */}
            <div className="flex items-center justify-center md:gap-x-14">
              <div>
                <Link to="/" className="">
                  <img
                    className="md:w-64 md:h-16 h-14 w-52"
                    src="/logo.png"
                    alt="logo"
                    height={200}
                    width={250}
                  />
                </Link>
              </div>
              {/* NavLinks */}
              <div className="hidden md:flex items-center justify-center gap-10">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className='after:content-[""] after:absolute after:w-0 after:h-[1.5px] after:bg-black hover:after:w-full after:duration-600 relative'
                  >
                    <p className="text-black text-base font-medium">
                      {link.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            {/* NavIcons */}
            <div className="flex items-center justify-center gap-x-5 md:gap-10">
              <SearchDialog component={<IoSearchOutline />} />
              <CartMenu component={<TbShoppingBag />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnnounsmentBer() {
  return (
    <TypeAnimation
      sequence={[
        '60-DAY 100% MONEYBACK GUARANTEE',
        1000,
        'Free shipping On all orders over $50+',
        1000,
      ]}
      wrapper="h1"
      speed={20}
      style={{
        fontSize: '13px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
      }}
      repeat={Infinity}
    />
  );
}

function CartMenu({ component }: { component: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="text-[26px] md:text-3xl cursor-pointer">
        {component}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <Suspense fallback={<Loader2Icon className="animate-spin" />}>
            <Lottie
              animationData={notFoundProduct}
              style={{
                width: '300px',
                height: '300px',
                fontWeight: 'bold',
              }}
              loop={true}
            />
          </Suspense>
          <p className="text-gray-500 text-sm">No items in your cart.</p>
          <Link to="/products-all">
            <Button onClick={() => setOpen(false)}>
              <span>Continue Shopping</span>
              <Suspense fallback={<Loader2Icon className="animate-spin" />}>
                <Lottie
                  animationData={cartBtn}
                  style={{
                    width: '30px',
                    height: '30px',
                    fontWeight: 'bold',
                  }}
                  loop={true}
                />
              </Suspense>
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function SearchDialog({ component }: { component: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger className="text-[26px] md:text-3xl cursor-pointer">
        {component}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Find Products</DialogTitle>
        </DialogHeader>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList></CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function NavMenu({ component }: { component: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathName = useLocation();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="text-4xl cursor-pointer">
        {component}
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>My Links</SheetTitle>
        </SheetHeader>
        <div className="flex md:items-center justify-center md:gap-x-10 flex-col md:flex-row md:px-0">
          {navLinks.map((link, index) => (
            <Link
              onClick={() => setOpen(false)}
              key={index}
              to={link.href}
              className={cn(
                pathName.pathname === link.href && 'bg-gray-200',
                'py-3 px-6 hover:bg-gray-200 transition-colors'
              )}
            >
              <p className="text-black text-base font-medium">{link.name}</p>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
