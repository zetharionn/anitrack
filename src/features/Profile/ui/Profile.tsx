import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger
} from '@nextui-org/react'
import { authService } from '@shared/api'
import { memo } from 'react'

export const Profile = memo(() => {
	return (
		<Dropdown>
			<DropdownTrigger>
				<Avatar isBordered />
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownItem onClick={() => authService.signOut()}>
					Sign Out
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
})
