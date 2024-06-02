'use client';

const Video = () => {
	return (
		<>
			<div>
				<video muted autoPlay loop>
					<source src="/video/test1.mp4" type="video/mp4" />
				</video>
			</div>
		</>
	);
};

export default Video;
