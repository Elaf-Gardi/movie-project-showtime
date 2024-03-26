import Link from 'next/link'
import { Menu } from '@headlessui/react'

const DropdownItem = ({ option, href, toggleMenu }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          onClick={toggleMenu}
          href={href}
          className={`block px-4 py-2 hover:bg-gray-200 rounded-lg   text-black  ${
            active ? 'bg-gray-200  ' : ''
          }`}
        >
          {option}
        </Link>
      )}
    </Menu.Item>
  )
}

export default DropdownItem
