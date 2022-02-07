import {AbsoluteFill, useVideoConfig} from 'remotion';

import {Dust} from './Dust';
import {ThreeCanvas} from '@remotion/three';

export const SpaceDust = () => {
	const {width, height} = useVideoConfig();
	return (
		<AbsoluteFill style={{backgroundColor: 'black'}}>
			<ThreeCanvas
				width={width}
				height={height}
				camera={{fov: 100, position: [0, 0, 30]}}
			>
				<Dust />
			</ThreeCanvas>
		</AbsoluteFill>
	);
};
