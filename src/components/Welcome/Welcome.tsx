import { FC } from "react"
import classes from "./styles.module.scss"
import ArrowLeftIcon from "@/assets/icons/arrow-left-icon.svg?react"

interface WelcomeProps {}

export const Welcome: FC<WelcomeProps> = () => {
	return (
		<div className={classes.welcomeOverlay}>
			<div className={classes.welcomeModal}>
				<h1 className={classes.title}>Hello</h1>
				<p className={classes.subtitle}>I am a basic Vite builder</p>
				<p className={classes.message}>Start creating!</p>
				<a
					href="https://github.com/eldarabdu/vite-basic-builder.git"
					target="_blank"
					rel="noopener noreferrer"
					className={classes.githubLink}
				>
					GitHub Repository <ArrowLeftIcon className={classes.linkIcon} />
				</a>
			</div>
		</div>
	)
}

