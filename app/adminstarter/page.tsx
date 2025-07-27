import Image from "next/image";
import Link from "next/link";
import nextjslogo from "@/public/nextjs.svg";
import daisyuilogo from "@/public/daisyUI.svg";
import twcsslogo from "@/public/tailwindcss.svg";
import tslogo from "@/public/typescript.svg";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10 items-center justify-center m-auto p-5">
      <div className="flex flex-wrap items-center justify-center gap-15 p-5 drop-shadow-xl drop-shadow-black/20">
        <Image src={nextjslogo} width={80} height={80} alt="Next JS" />
        <Image src={twcsslogo} width={80} height={80} alt="Tailwind CSS" />
        <Image src={tslogo} width={80} height={80} alt="TypeScript" />
        <Image src={daisyuilogo} width={80} height={80} alt="daisyUI" />
      </div>
      <div className="bg-base-200 p-8 rounded-xl shadow-lg border-1 border-base-content/10">
          <h1 className="text-3xl font-bold text-center">Next.js + Tailwind CSS + TypeScript + daisyUI</h1>
          <div className="divider"></div>
          <h2 className="text-2xl font-bold"># Admin Starter</h2>
          <div className="flex justify-center my-5">
            <p className="text-sm">
              This is a starter for building admin panels using <b>Next.js</b>, <b>Tailwind CSS</b> and <b>TypeScript</b> with <b>daisyUI</b>.<br/>
              It is pre-configured with a theme switcher to toggle between the default <a href="https://daisyui.com/docs/themes/#list-of-themes" className="link font-bold">themes</a> provided by daisyUI.<br/><br/>
              This version includes a <b>Sidebar</b>, <b>Navbar</b>, and <b>Footer</b> components to enhance the layout and navigation of your application.
              <br/>You can easily customize the components to fit your admin panel needs.<br/><br/>
            </p>
          </div>
          <div>
            <ul className="list bg-base-100 rounded-box shadow-md border-1 border-base-content/10">
              <li className="p-4 pb-2 text-xs opacity-80 tracking-wide">Check out the different layouts for more features.</li>
              
              <li className="list-row">
                <div className="text-4xl font-thin opacity-50 tabular-nums">01</div>
                <div className="list-col-grow">
                  <div className="font-bold"><Link href="/" className="hover:underline">Starter</Link></div>
                  <div className="text-xs font-semibold opacity-60">A perfect base for your application</div>
                </div>
                <div id="starter-btn" aria-label="Starter" className="btn btn-square btn-ghost">
                  <Link href="/" aria-label="Starter"><svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                    <path d="M10 16H7C4.79086 16 3 14.2091 3 12V12C3 9.79086 4.79086 8 7 8H10"/>
                    <path d="M16 12H8"/>
                    <path d="M14 16H17C19.2091 16 21 14.2091 21 12V12C21 9.79086 19.2091 8 17 8H14"/>
                    </g>
                    </svg>
                  </Link>
                </div>
              </li>
              
              <li className="list-row">
                <div className="text-4xl font-thin opacity-50 tabular-nums">02</div>
                <div className="list-col-grow">
                  <div className="font-bold"><Link href="/starterplus" className="hover:underline">Starter Plus</Link></div>
                  <div className="text-xs font-semibold opacity-60">Includes Navbar, Footer and Theme Switcher</div>
                </div>
                <div id="starter-plus-btn" aria-label="Starter Plus" className="btn btn-square btn-ghost">
                  <Link href="/starterplus" aria-label="Starter Plus"><svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                    <path d="M10 16H7C4.79086 16 3 14.2091 3 12V12C3 9.79086 4.79086 8 7 8H10"/>
                    <path d="M16 12H8"/>
                    <path d="M14 16H17C19.2091 16 21 14.2091 21 12V12C21 9.79086 19.2091 8 17 8H14"/>
                    </g>
                    </svg>
                  </Link>
                </div>
              </li>
              
              <li className="list-row">
                <div className="text-4xl font-thin opacity-50 tabular-nums">03</div>
                <div className="list-col-grow">
                  <div className="font-bold flex items-center"><Link href="/adminstarter" className="hover:underline">Admin Starter</Link>
                  <span className="ms-2 badge badge-xs badge-primary">Current</span></div>
                  <div className="text-xs font-semibold opacity-60">Includes Sidebar, Navbar, Footer and Theme Switcher</div>
                </div>
                <div id="admin-starter-btn" aria-label="Admin Starter" className="btn btn-square btn-ghost">
                  <Link href="/adminstarter" aria-label="Admin Starter"><svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                    <path d="M10 16H7C4.79086 16 3 14.2091 3 12V12C3 9.79086 4.79086 8 7 8H10"/>
                    <path d="M16 12H8"/>
                    <path d="M14 16H17C19.2091 16 21 14.2091 21 12V12C21 9.79086 19.2091 8 17 8H14"/>
                    </g>
                    </svg>
                  </Link>
                </div>
              </li>
              
            </ul>
          </div>
          <div className="flex justify-around mt-5">
            <div className="btn btn-sm btn-primary font-bold">
              <Link href="https://github.com/rajpatra220/nextjs-tailwind-ts-daisyui-starter" target="_blank" className="flex gap-2 items-center" aria-label="Source Code">
                <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_229_292)">
                  <path d="M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65882 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8392C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z" fill="currentColor"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_229_292">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                Source Code
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}
