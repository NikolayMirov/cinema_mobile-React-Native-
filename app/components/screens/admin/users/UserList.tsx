import { AdminNavigation, AdminTable, Layout } from '@/components/ui'
import { AdminHeader } from '@/components/ui/'
import { FC } from 'react'
import { useUsers } from './useUsers'

const UserList: FC = () => {
	const { control, data, isLoading, deleteAsync } = useUsers()

	return (
		<Layout isHasPadding>
			<AdminNavigation title="Users" />
			<AdminHeader control={control} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Email', 'Date register']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default UserList
