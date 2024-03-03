import { Field, Heading, Layout, Loader, MovieCatalog } from '@/components/ui'
import { FC } from 'react'
import { View } from 'react-native'
import { ISearchFormData } from './search.interface'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { movies, isLoading, searchTern, control } = useSearch()

	return (
		<Layout isHasPadding>
			<Heading title="Search" />
			<View className="mt-3">
				<Field<ISearchFormData>
					placeholder="Type something..."
					control={control}
					name="searchTerm"
					keyboardType="web-search"
				/>
			</View>
			{!!searchTern ? (
				<View className="mt-3">
					{isLoading ? <Loader /> : <MovieCatalog title="" movies={movies} />}
				</View>
			) : null}
		</Layout>
	)
}

export default Search
