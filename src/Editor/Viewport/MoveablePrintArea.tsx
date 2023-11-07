import React from "react";
import { ElementInfo } from "./Viewport";


export default class MoveablePrintArea extends React.PureComponent<{
	printAreas: ElementInfo[],
}> {
	render() {
		const { printAreas } = this.props;
		return (
			<React.Fragment>
				{
					printAreas.length > 0 &&
					<svg width="0" height="0">
						<defs>
								<clipPath id="printAreas">
									{
										printAreas.map((p) => {
											let { top, left, width, height, transform } = p.frame as any
											top = parseInt(top) + 1
											left = parseInt(left) + 1
											width = parseInt(width)+2
											height = parseInt(height)+2

											const topLeft = `${left},${top}`;
											const topRight = `${left + width},${top}`;
											const bottomRight = `${left + width},${top + height}`;
											const bottomLeft = `${left}, ${top + height}`

											if (transform) {
												transform = Object.entries(transform)
													.map(([key, value]) => `${key}(${value})`)
												transform = transform.join(" ")
											}

											return (
												<polygon
													points={`${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`}
													style={{
														transform,
														transformOrigin: `${left + (width/2)}px ${top + (height/2)}px`
													}}
												/>
											)
										})
									}
							</clipPath>
						</defs>
					</svg>
				}
			</React.Fragment>
		)
	}
}