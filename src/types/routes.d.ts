import { ReactNode } from "react"

export interface IRoute {
	path: string
	component: ReactNode
	slug: string
	roles?: string[]
	children?: Omit<IRoute, "children">[]
}
