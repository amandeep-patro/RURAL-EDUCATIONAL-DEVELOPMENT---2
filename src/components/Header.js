import React from 'react';
import SearchBar from "../components/SearchBar";
import NavigationItem from '../components/NavigationItem';

const navigationItems = [
  { label: 'HOME', active: false },
  { label: 'ASSESSMENT', active: true },
  { label: 'ATTENDANCE', active: false },
  { label: 'OTHERS', active: false }
];

const Header = () => {
  return (
    <header className="flex overflow-hidden flex-col bg-white px-8 py-2.5 w-full font-bold leading-none text-center max-md:px-5 max-md:max-w-full">
      <div className="flex justify-between items-center">
        <div className="flex text-3xl text-indigo-900">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eefe4f269b31cd71ad2e4e7cf901b20be193a3399a171c75dd7f4009f7418005?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="Balnirman Logo" className="object-contain shrink-0 aspect-[1.29] w-[72px]" />
          <span className="self-start mt-3.5 border-black">BALNIRMAN</span>
        </div>
        
        <nav className="flex flex-wrap gap-9 items-start my-auto text-base whitespace-nowrap text-blue-950">
          {navigationItems.map((item, index) => (
            <NavigationItem key={index} label={item.label} active={item.active} />
          ))}
        </nav>

        <button className="text-xl">Login/Sign up</button>
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;