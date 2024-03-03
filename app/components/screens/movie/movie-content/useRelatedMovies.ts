import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'

export const useRelatedMovies = (genreIds: string[], currentMovieId: string) =>
	useQuery(
		['get related movies by genres', genreIds],
		() => MovieService.getByGenres(genreIds),
		{
			enabled: !!genreIds,
			select: (data) =>
				data.filter((m) => m._id !== currentMovieId).slice(0, 5),
		}
	)