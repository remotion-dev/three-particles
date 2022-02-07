import {Composition} from 'remotion';
import {SpaceDust} from './Scene';

// Remotion Docs:
// https://remotion.dev/docs

// @remotion/three Docs:
// https://remotion.dev/docs/three

// React Three Fiber Docs:
// https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Scene"
				component={SpaceDust}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
