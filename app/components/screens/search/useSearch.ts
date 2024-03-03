import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'
import { useSearchForm } from './useSearchForm'

export const useSearch = () => {
	const { searchTern, debouncedSearch, control } = useSearchForm()

	const { data: movies, isLoading } = useQuery(
		['search movies', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			enabled: !!debouncedSearch,
		}
	)
	return { movies, isLoading, searchTern, control }
}
