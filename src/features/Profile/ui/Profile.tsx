import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger
} from '@nextui-org/react'

export const Profile = () => {
	return (
		<Dropdown>
			<DropdownTrigger>
				<Avatar isBordered />
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownItem>Log Out</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
