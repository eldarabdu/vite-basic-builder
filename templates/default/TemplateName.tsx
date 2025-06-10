import { FC } from "react"
import classes from "./styles.module.scss"

interface TemplateNameProps {}

export const TemplateName: FC<TemplateNameProps> = ({}) => {
	return <div className={classes.container}>TemplateName</div>
}
