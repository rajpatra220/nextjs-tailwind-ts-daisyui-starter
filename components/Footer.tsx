import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-4">
        <aside className="flex">
            <p>Made By</p>
            <Link href="https://rajeshpatra.com?ref=next-daisyui-starter" className="link font-semibold" target="_blank" aria-label="Rajesh Patra">
                Rajesh Patra
            </Link>
        </aside>
    </footer>
  );
}
