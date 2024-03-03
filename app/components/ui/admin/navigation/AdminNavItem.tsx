import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import { MaterialIcons } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { Pressable, Text } from 'react-native'
import { INavItem } from './admin-navigation.interface'

const AdminNavItem: FC<{ item: INavItem }> = ({
	item: { routeName, title, icon },
}) => {
	const { navigate } = useTypedNavigation()
	const { name } = useTypedRoute()

	return (
		<Pressable
			// @ts-ignore
			onPress={() => navigate(routeName)}
			className="flex-row items-center mb-1"
		>
			<MaterialIcons
				name={icon}
				size={18}
				color={name === routeName ? '#d73033' : '#666'}
			/>
			<Text
				className={cn('text-xl text-[#d1d1d1] ml-2', {
					'text-[#d73033] font-medium': name === routeName,
				})}
			>
				{title}
			</Text>
		</Pressable>
	)
}

export default AdminNavItem
