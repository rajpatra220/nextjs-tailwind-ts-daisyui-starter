'use client';
import Link from 'next/link';
import AdminNavbar from '@/components/AdminNavbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function Drawer({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="drawer lg:drawer-open mx-auto">
      <input id="my-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center min-h-screen">
        <AdminNavbar />
        {children}
        <Footer />
      </div>
      <div className="drawer-side z-40 lg:z-0 border-r-2 border-base-content/10">
        <label htmlFor="my-sidebar" aria-label="close sidebar" className="drawer-overlay" />
        <aside className="bg-base-100 min-h-screen w-70">
          <div className="bg-base-100/90 navbar sticky top-0 z-20 items-center gap-2 px-4 py-0 backdrop-blur flex justify-center w-full">
            <Link href="/adminstarter" className="font-medium flex items-center gap-4">
              <span className="text-nowrap">Admin Starter</span>
            </Link>
          </div>
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
