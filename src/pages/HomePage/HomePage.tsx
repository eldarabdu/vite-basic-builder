import { FC } from "react"
import classes from "./styles.module.scss"
import { Welcome } from "@/components/Welcome"

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
	return (
		<div className={classes.container}>
			<Welcome />
		</div>
	)
}

