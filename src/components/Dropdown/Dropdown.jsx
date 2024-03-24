import { Menu, Transition } from '@headlessui/react'
import DropdownItem from './DropdownItem'
import { FaAngleDown } from 'react-icons/fa'

const Dropdown = ({ title, options, baseUrl }) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-sm sm:text-lg focus:outline-none focus:ring-blue-300 font-normal rounded-lg py-2 text-center inline-flex items-center ">
        {title}
        <FaAngleDown className="ml-2" />
      </Menu.Button>

      <Menu.Items className="rounded-lg text-sm z-10 bg-gray-100 absolute">
        {options.map((option) => (
          <DropdownItem
            key={option}
            option={option}
            href={`${baseUrl}${option.toLowerCase().replace(' ', '_')}`}
          />
        ))}
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown
