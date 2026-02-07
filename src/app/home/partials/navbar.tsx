'use client';

import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet } from '@/components/ui/sheet';
import {
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const navVariants = {
  visible: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  hidden: {
    y: '-100%',
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
};
const Navbar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(22,1,49,0)', 'rgba(22,1,49,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      animate={visible ? 'visible' : 'hidden'}
      style={{
        background,
        backdropFilter: backdropBlur,
      }}
      className='fixed top-0 left-1/2 z-50 w-full -translate-x-1/2'
    >
      <div className='flex-between custom-container md:h-21.3 h-20'>
        <Link href='#home'>
          <Image
            src='/company-logos/company-logo.svg'
            alt='logo'
            width={141}
            height={32}
            className='cursor-pointer transition-all duration-300 hover:scale-105'
          />
        </Link>
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-8.5'>
            {navigationData.map((data) => (
              <li key={data.href}>
                <Link
                  href={data.href}
                  className='hover:text-md-extrabold p-2 transition-all duration-300'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          asChild
          className='!hidden transition-all duration-300 lg:!flex'
        >
          <Link href='#contact'>
            <Image
              src='/icons/mail-black.svg'
              alt='mail-logo'
              width={17}
              height={13}
              className='mr-2.5'
            />
            Hire Me
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Icon
              icon='ci:menu-alt-01'
              width={24}
              height={24}
              className='cursor-pointer transition-all duration-300 hover:scale-115 lg:hidden'
            />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle asChild className='text-color-neutral-25 py-6'>
              <Link href='#home'>
                <Image
                  src='/company-logos/company-logo-black.svg'
                  alt='logo-black'
                  width={141}
                  height={32}
                  className='ml-4 cursor-pointer transition-all duration-300 hover:scale-105'
                />
              </Link>
            </SheetTitle>
            <nav className='mt-4'>
              <ul className='flex flex-col gap-4 pl-2'>
                {navigationData.map((data) => (
                  <li key={data.label} className='my-2 py-1'>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className='text-md-regular hover:text-md-extrabold cursor-pointer text-neutral-950 transition-all duration-300'
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              asChild
              variant='secondary'
              className='transition-all duration-300 hover:scale-102'
            >
              <SheetClose asChild>
                <Link href='#contact'>
                  <Image
                    src='/icons/mail-white.svg'
                    alt='mail-logo'
                    width={17}
                    height={13}
                    className='mr-2.5'
                  />
                  Hire Me
                </Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
