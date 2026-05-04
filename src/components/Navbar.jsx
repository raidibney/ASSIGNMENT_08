"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/5 bg-blue-100 backdrop-blur-xl px-4">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo Section */}
        <div className="flex gap-2.5 items-center group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-all" />
            <Image
              src={"/logo.png"}
              alt="logo"
              loading="eager"
              width={32}
              height={32}
              className="relative object-contain h-8 w-8 transition-transform duration-500 group-hover:rotate-[10deg]"
            />
          </div>
          <h3 className="font-bold text-xl tracking-tighter bg-gradient-to-br from-black to-gray-400 bg-clip-text text-transparent">
            Skillsphere
          </h3>
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium uppercase tracking-widest text-black">
          <li>
            <Link href={"/"} className="hover:text-red-700 transition-colors">Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"} className="hover:text-red-700 transition-colors">All Courses</Link>
          </li>
          <li>
            <Link href={"/profile"} className="hover:text-red-700 transition-colors">Profile</Link>
          </li>
        </ul>

        {/* Right Action Section */}
        <div className="flex items-center gap-5">
          {!user && (
            <ul className="flex items-center text-sm font-medium gap-5">
              <li>
                <Link href={"/sign-up"} className="text-green-800-400 hover:text-green-400 transition-colors">
                  SignUp
                </Link>
              </li>
              <li>
                <Link 
                  href={"/signin"} 
                  className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition-transform active:scale-95"
                >
                  SignIn
                </Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex items-center gap-4 animate-in fade-in zoom-in duration-300">
              <div className="flex items-center gap-3 bg-white/5 p-1 pr-3 rounded-full border border-white/10">
                <Avatar
                  src={user?.image || undefined}
                  name={user?.name?.charAt(0).toUpperCase()}
                  className="w-8 h-8 text-[14px] font-bold bg-gradient-to-tr from-primary to-blue-500 text-red-600"
                  isBordered
                  color="primary"
                />
                <span className="text-sm font-medium text-black hidden sm:inline-block">
                  {user?.name?.split(" ")[0]}
                </span>
              </div>
              
              <Button 
               
                variant="flat"
                size="sm"
                className="font-bold rounded-full px-5 hover:after:opacity-100 ring-offset-black transition-all bg-red-600"
                onClick={handleSignOut}
              >
                Signout
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;