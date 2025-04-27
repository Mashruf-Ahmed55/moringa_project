'use client';
import { footerLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { FaLinkedin, FaSquareFacebook, FaSquareTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router';

export default function Footer() {
  const pathName = useLocation();
  return (
    <div className="w-full bg-emerald-950 h-auto py-16">
      <div className="w-full md:max-w-7xl mx-auto flex md:items-center justify-between md:px-0 px-4 md:flex-row flex-col items-start md:gap-y-0 gap-y-7">
        <div className="flex flex-col items-start gap-y-5">
          {footerLinks.map((link, index) => (
            <Link
              to={link?.url!}
              key={index}
              className={cn(
                pathName.pathname === link?.url && 'underline',
                'text-white text-sm hover:underline'
              )}
            >
              {link?.title}
            </Link>
          ))}
        </div>
        <div className=" flex flex-col gap-y-3">
          <h1 className="uppercase tracking-[7px] text-xl text-white font-semibold">
            Contact Us
          </h1>
          <div className="flex flex-col gap-y-2 text-gray-400 text-sm">
            <p>Support Phone Number : +880 123 456 7890</p>
            <p>Support Email Address : contact.help@gmail.com</p>
            <p>Support Address : 123 Main Street, City, Country</p>
          </div>
          <div className="flex items-center gap-x-5 mt-5 text-2xl text-white transition-all duration-300 ease-in-out">
            <Link to={'/'} className="hover:text-green-600 hover:scale-110">
              <FaSquareFacebook />
            </Link>
            <Link to={'/'} className="hover:text-green-600 hover:scale-110">
              <RiInstagramFill />
            </Link>
            <Link to={'/'} className="hover:text-green-600 hover:scale-110">
              <FaLinkedin />
            </Link>
            <Link to={'/'} className="hover:text-green-600 hover:scale-110">
              <FaSquareTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
