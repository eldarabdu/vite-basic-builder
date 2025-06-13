import packageJson from "@/../package.json"

export const getAppVersion = (): string => {
	return packageJson.version
}

export const formatVersion = (version: string): string => {
	return `v${version}`
}
