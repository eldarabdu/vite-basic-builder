import { FC } from "react"
import classes from "./styles.module.scss"
import { getAppVersion, formatVersion } from "@/utils/version"
import LinkIcon from "@/assets/icons/link-icone.svg?react"

interface WelcomeProps {}

export const Welcome: FC<WelcomeProps> = () => {
	const version = formatVersion(getAppVersion())

	return (
		<div className={classes.welcomeOverlay}>
			<div className={classes.welcomeModal}>
				<h1 className={classes.title}>Welcome</h1>
				<p className={classes.subtitle}>Your new Vite + React project is ready</p>
				<p className={classes.message}>{version}</p>
				<a
					href="https://github.com/eldarabdu/vite-basic-builder.git"
					target="_blank"
					rel="noopener noreferrer"
					className={classes.githubLink}
				>
					<span>View on GitHub</span>
					<LinkIcon className={classes.linkIcon} />
				</a>
			</div>
		</div>
	)
}

