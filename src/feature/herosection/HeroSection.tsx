'use client';
import { Logo } from '@/icons/Logo';
import { SearchIcon } from '@/icons/Search';

export const HeroSection1 = () => {
  return (
    <header className="w-full h-screen overflow-y-hidden  bg-gradient-to-tr from-[#FFB36A] via-[#FB155F] to-[#BA1EF7]">
      <nav>
        <div className="flex  items-center justify-between px-12 py-4">
          <div>
            <Logo />
          </div>
          <div>
            <ul className="flex items-center gap-10 font-bold text-white text-base">
              <li>Home</li>
              <li>Features</li>
              <li>Blog</li>
              <li>Shop</li>
              <li>
                <SearchIcon />
              </li>
            </ul>
          </div>
          <div className="flex gap-10 items-center text-white font-bold">
            <button>Sign In</button>
            <button className="rounded-[50px] px-3 py-2 border border-black flex justify-center items-center">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <section className="max-w-[800px] mx-auto text-center text-white flex flex-col gap-4 mt-[48px] pb-[250px]">
        <h1 className="text-[50px] font-bold leading-[2.8rem]">
          {'Build your Landing Page in minutes with 1minFigma'}
        </h1>
        <p className="text-sm font-normal">
          {
            "We've done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process."
          }
        </p>
        <div className="flex gap-4 items-center justify-center">
          <button className="bg-black h-[48px] px-3 py-2 text-white rounded-[50px]">
            Get Started
          </button>
          <button className="text-white">Learn More</button>
        </div>
      </section>
      <section className="relative bg-black w-full h-[400px]">
        <div className="absolute -top-[10rem] left-1/2 -translate-x-1/2">
          <img src="/Macbook.png" alt="macbook" />
        </div>
      </section>
    </header>
  );
};
