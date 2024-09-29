import { useAuthStore } from '@entities/user'
import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger
} from '@nextui-org/react'
import { memo } from 'react'

export const Profile = memo(() => {
	const signOut = useAuthStore(state => state.signOut)

	return (
		<Dropdown>
			<DropdownTrigger>
				<Avatar isBordered />
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownItem onClick={signOut}>Sign Out</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
})
