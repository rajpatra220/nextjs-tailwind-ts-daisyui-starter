'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  label: string;
  link?: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: 'Item 1', link: '/adminstarter' },
  { 
    label: 'Item 2', 
    subItems: [
      { label: 'Subitem 1', link: '/adminstarter/item2/subitem1' },
      { label: 'Subitem 2', link: '/adminstarter/item2/subitem2' },
      {
        label: 'Subitem 3',
        subItems: [
          { label: 'Subitem 1', link: '/adminstarter/item2/subitem3/subitem1' },
          { label: 'Subitem 2', link: '/adminstarter/item2/subitem3/subitem2' },
        ],
      },
    ],
  },
  { label: 'Item 3', link: '/adminstarter/item3' },
];

export default function Sidebar() {
  return (
    <>
    <ul className="menu w-full px-4 py-0">
        <li className="menu-title">Menu Title</li>
        {RenderMenuItems(menuItems)}
    </ul>
    </>
  );
}

const RenderMenuItems = (items: MenuItem[]) => {
    const pathname = usePathname();
  return items.map((item, index) => (
    <li key={index}>
      {item.subItems ? (
        <details open>
          <summary>{item.label}</summary>
          <ul>{RenderMenuItems(item.subItems)}</ul>
        </details>
      ) : (
        <Link href={(item.link !== undefined) ? item.link : "#"} className={`menu-link ${pathname === item.link ? 'menu-active' : ''}`}>
          {item.label}
        </Link>
      )}
    </li>
  ));
};
