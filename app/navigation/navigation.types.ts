import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Screen404: undefined
	Profile: undefined
	Trending: undefined
	Search: undefined
	Favorites: undefined
	Movie: {
		slug: string
	}
	Genre: {
		slug: string
	}
	Actor: {
		slug: string
	}
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
	Admin: undefined
	ActorEdit: { id: string }
	ActorList: undefined
	GenreEdit: { id: string }
	GenreList: undefined
	MovieEdit: { id: string }
	MovieList: undefined
	UserEdit: { id: string }
	UserList: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
	isAdmin?: boolean
}
