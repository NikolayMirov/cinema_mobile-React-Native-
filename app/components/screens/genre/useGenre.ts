import { useTypedRoute } from '@/hooks/useTypedRoute'
import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'

export const useGenre = () => {
	const { params } = useTypedRoute<'Genre'>()
	const { isLoading, data: genre } = useQuery(
		['get genre by slug', params.slug],
		() => GenreService.getBySlug(params.slug)
	)

	const genreId = genre?._id || ''

	const { isLoading: isMovieLoading, data: movies } = useQuery(
		['get movies by genre', genreId],
		() => MovieService.getByGenres([genreId]),
		{
			enabled: !!genreId,
		}
	)

	return { isLoading: isLoading || isMovieLoading, movies, genre }
}
