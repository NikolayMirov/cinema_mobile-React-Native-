import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { TypeMaterialIconNames } from '@/shared/types/icon.types'

export interface INavItem {
	icon: TypeMaterialIconNames
	title: string
	routeName: keyof TypeRootStackParamList
}
