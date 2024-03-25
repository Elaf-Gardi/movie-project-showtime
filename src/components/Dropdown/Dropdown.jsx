import { Menu, Transition } from '@headlessui/react'
import DropdownItem from './DropdownItem'
import { FaAngleDown } from 'react-icons/fa'

const Dropdown = ({ title, options, baseUrl }) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-lg font-Roboto font-semibold rounded-lg py-2 inline-flex items-center ">
        {title}
        <FaAngleDown className="ml-2" />
      </Menu.Button>

      <Menu.Items className="rounded-lg text-sm z-10 bg-gray-100 absolute max-h-60 overflow-y-auto scrollbar-hide">
        {options.map((option) => (
          <DropdownItem
            key={option.id}
            option={option.name}
            href={`${baseUrl}${option.name}`}
          />
        ))}
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown
