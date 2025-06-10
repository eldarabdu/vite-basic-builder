import { FC } from "react"
import classes from "./styles.module.scss"

interface INightSkyProps {
	stars?: number
}

export const NightSky: FC<INightSkyProps> = ({ stars = 150 }) => {
	return (
		<div
			className={classes.nightSky}
			style={{ "--stars-count": stars <= 200 ? stars : 200 } as React.CSSProperties}
		>
			<div className={classes.stars}>
				{Array.from({ length: stars <= 200 ? stars : 200 }).map((_, i) => (
					<div
						key={i}
						className={classes.star}
						style={{
							top: `${Math.random() * 100}vh`,
							left: `${Math.random() * 100}vw`,
						}}
					/>
				))}
			</div>
		</div>
	)
}

