'use client';
import { Logo } from "@/icons/Logo";
import { SearchIcon } from "@/icons/Search";

export const HeroSection1 = () => {


    return (
        <header className="bg-black">
            <div className="flex justify-between px-12 py-4">
                <div>
                    <Logo />
                </div>
                <div>
                    <ul className="flex items-center gap-4">
                        <li>Home</li>
                        <li>Features</li>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li><SearchIcon /></li>
                    </ul>
                </div>
                <div className="flex gap-4 items-center">
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </header>
    )

}