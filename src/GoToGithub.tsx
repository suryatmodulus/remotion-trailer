import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import github from './github.png';

const Container = styled.div`
	background-color: white;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	width: 1300px;
`;

export const GoToGithub: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const scale = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	return (
		<Container>
			<Img
				style={{
					transform: `scale(${scale})`,
				}}
				src={github}
			/>
		</Container>
	);
};
