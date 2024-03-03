import { useDebounce } from '@/hooks/useDebounce'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { ISearchFormData } from './search.interface'

export const useSearchForm = () => {
	const { control, watch } = useForm<ISearchFormData>({
		mode: 'onChange',
	})

	const searchTern = watch('searchTerm')
	const debouncedSearch = useDebounce(searchTern, 500)

	return useMemo(() => ({ debouncedSearch, searchTern, control }), [searchTern])
}