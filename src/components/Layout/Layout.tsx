import { FC } from "react"
import classes from "./styles.module.scss"
import { Outlet } from "react-router-dom"
import { NightSky } from "@/components/NightSky"

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({}) => {
	return (
		<div className={classes.layout}>
			<NightSky stars={60} />
			<Outlet />
		</div>
	)
}

