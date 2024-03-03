import {
	AdminHeader,
	AdminNavigation,
	AdminTable,
	Layout,
} from '@/components/ui'
import { FC } from 'react'
import { useGenres } from './useGenres'

const GenreList: FC = () => {
	const { control, data, isLoading, deleteAsync, createAsync } = useGenres()

	return (
		<Layout isHasPadding>
			<AdminNavigation title="Genres" />
			<AdminHeader control={control} onPress={createAsync} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Name', 'Slug']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default GenreList
