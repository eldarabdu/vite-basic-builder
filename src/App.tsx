import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import theme from "./configs/style.config"
import { routerConfig } from "./configs/routes"
import { Suspense } from "react"
import { Layout } from "./components/Layout"

const App = () => {
	return (
		<MantineProvider theme={theme}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</MantineProvider>
	)
}

const AppRoutes = () => {
	const location = useLocation()

	return (
		<Routes location={location} key={location.pathname}>
			<Route element={<Layout />}>
				{routerConfig.routes.map(route => (
					<Route
						key={route.slug}
						path={route.path}
						element={<Suspense>{route.component}</Suspense>}
					>
						{route.children?.map(child => (
							<Route
								key={child.slug}
								path={child.path}
								element={<Suspense>{child.component}</Suspense>}
							/>
						))}
					</Route>
				))}
			</Route>
		</Routes>
	)
}

export default App

