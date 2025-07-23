'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const themes = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
    'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween',
    'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy',
    'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn',
    'business', 'acid', 'lemonade', 'night', 'coffee', 'winter',
    'dim', 'nord', 'sunset', 'caramellatte', 'abyss', 'silk',
  ];

  /* const themes = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 
    'corporate', 'synthwave', 'retro', 'valentine', 'halloween', 
    'forest', 'fantasy', 'luxury', 'dracula', 'autumn', 'lemonade', 
    'night', 'winter', 'dim', 'sunset', 'caramellatte', 'abyss',
  ]; */

  if (!mounted) return null;

  return (
    <div className="dropdown dropdown-end block">
      {/* Trigger button */}
      <div
        tabIndex={0}
        role="button"
        className="btn group btn-sm gap-1.5 px-1.5 btn-ghost"
      >
        <svg
          className="size-6 fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_229_156)">
            <path
              d="M12 2C17.522 2 22 5.978 22 10.889C21.9992 12.3622 21.4136 13.7748 20.3717 14.8165C19.3299 15.8581 17.9172 16.4435 16.444 16.444H14.478C13.556 16.444 12.811 17.189 12.811 18.111C12.811 18.533 12.978 18.922 13.233 19.211C13.5 19.511 13.667 19.9 13.667 20.333C13.667 21.256 12.9 22 12 22C6.478 22 2 17.522 2 12C2 6.478 6.478 2 12 2ZM7.5 12C7.89782 12 8.27936 11.842 8.56066 11.5607C8.84196 11.2794 9 10.8978 9 10.5C9 10.1022 8.84196 9.72064 8.56066 9.43934C8.27936 9.15804 7.89782 9 7.5 9C7.10218 9 6.72064 9.15804 6.43934 9.43934C6.15804 9.72064 6 10.1022 6 10.5C6 10.8978 6.15804 11.2794 6.43934 11.5607C6.72064 11.842 7.10218 12 7.5 12ZM16.5 12C16.8978 12 17.2794 11.842 17.5607 11.5607C17.842 11.2794 18 10.8978 18 10.5C18 10.1022 17.842 9.72064 17.5607 9.43934C17.2794 9.15804 16.8978 9 16.5 9C16.1022 9 15.7206 9.15804 15.4393 9.43934C15.158 9.72064 15 10.1022 15 10.5C15 10.8978 15.158 11.2794 15.4393 11.5607C15.7206 11.842 16.1022 12 16.5 12ZM12 9C12.3978 9 12.7794 8.84196 13.0607 8.56066C13.342 8.27936 13.5 7.89782 13.5 7.5C13.5 7.10218 13.342 6.72064 13.0607 6.43934C12.7794 6.15804 12.3978 6 12 6C11.6022 6 11.2206 6.15804 10.9393 6.43934C10.658 6.72064 10.5 7.10218 10.5 7.5C10.5 7.89782 10.658 8.27936 10.9393 8.56066C11.2206 8.84196 11.6022 9 12 9Z"
              
            />
          </g>
          <defs>
            <clipPath id="clip0_229_156">
              <rect className="size-6" fill="none" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="12px"
          height="12px"
          className="mt-px hidden size-2 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>

      {/* Dropdown theme list */}
      <div
        tabIndex={0}
        className="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[30.5rem] max-h-[calc(100vh-8.6rem)] overflow-y-auto overflow-x-hidden border border-white/5 shadow-2xl outline-1 outline-black/5 mt-11"
      >
        <ul className="menu w-56">
          <li className="menu-title text-xs">Theme</li>
          {themes.map((t) => (
            <li key={t}>
              <button className="gap-3 px-2" onClick={() => setTheme(t)}>
                <div className="w-32 truncate capitalize">{t}</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-3 w-3 shrink-0 transition-opacity duration-200 ${
                    theme === t ? "visible" : "invisible"
                  }`}
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
