import Auth from '@/components/screens/auth/Auth'
import { useAuth } from '@/hooks/useAuth'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import { TypeRootStackParamList } from './navigation.types'
import { routes, userRoutes } from './user.routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigation: FC = () => {
	const { user } = useAuth()
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#090909',
				},
			}}
		>
			{user ? (
				user.isAdmin ? (
					routes.map(
						(route) => <Stack.Screen key={route.name} {...route} />
						// user.isAdmin || !route.isAdmin ? (
						// 	<Stack.Screen key={route.name} {...route} />
						// ) : (
						// 	<Stack.Screen
						// 		key="Screen404"
						// 		name="Screen404"
						// 		component={Screen404}
						// 	/>
						// )
					)
				) : (
					userRoutes.map((route) => (
						<Stack.Screen key={route.name} {...route} />
					))
				)
			) : (
				<Stack.Screen key="Auth" name="Auth" component={Auth} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigation
