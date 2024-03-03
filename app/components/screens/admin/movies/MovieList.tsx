import {
	AdminHeader,
	AdminNavigation,
	AdminTable,
	Layout,
} from '@/components/ui'
import { FC } from 'react'
import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const { control, data, isLoading, deleteAsync, createAsync } = useMovies()

	return (
		<Layout isHasPadding>
			<AdminNavigation title="Movies" />
			<AdminHeader control={control} onPress={createAsync} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Title', 'Main genre', 'Rating']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default MovieList
