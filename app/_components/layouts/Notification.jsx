'use client';
import * as X from '@/app/_styles/components/notification';

const Notification = () => {
	return (
		<>
			<X.Container>
				<X.Arrow></X.Arrow>
				<X.Title>Mubro Notification Download</X.Title>
				{/* <X.Title>
					Mubro는 현업 개발자로서 고객친화적인 웹페이지와 성능 최적화된
					웹페이지를 위한 퍼블리싱을 진행하고있습니다.
				</X.Title>
				<X.Title>
					<p>React(Next), Vue(Nuxt) 로 제작됩니다.</p>
					<p>HTML, CSS3, JS 로도 제작 가능합니다.</p>
					<p>페이지 디자인 파일은 꼭 전달 주셔야 합니다.</p>
					<p>Mubro는 디자인까지 작업을 진행해드리고 있지않습니다.</p>
					<p>모션 난이도와 작업 양에 따라서 비용이 추가될 수 있습니다.</p>
					<p>
						프로젝트 퀄리티를 위해 한번에 최대 두개 프로젝트만 진행하고
						있습니다.
					</p>
				</X.Title> */}
			</X.Container>
		</>
	);
};

export default Notification;
