'use client';
import * as X from '@/app/_styles/main';
import SearchIcon from '@mui/icons-material/Search';

const Template = () => {
	const templateArr = [
		{
			image: 'ex1.png',
			title: 'STANDARD',
			description: `
				단순 퍼블리싱 페이지
				크로스 브라우징, 서버 업로드, 슬라이더/스크롤 구현
				페이지당 최대 세로 2500px 
			`,
		},
		{
			image: 'ex2.png',
			title: 'DELUXE',
			description: `
				STANDARD + 반응형
				검색 엔진 최적화 SEO 적용
				애니메이션, 인터렉션 구현
				페이지당 최대 세로 2500px 
			`,
		},
		{
			image: 'ex3.png',
			title: 'PREMIUM',
			description: `
				STANDARD + DELUXE + 고도화 기능
				페이지당 최대 세로 2500px 
			`,
		},
	];
	return (
		<X.Container id="template">
			{templateArr.map((data, index) => (
				<X.Box key={index}>
					<div>
						<span>{data.title}</span>
					</div>
					<X.ImgContainer
						imagepath={data.image}
						className="image"
					></X.ImgContainer>
					<X.Middle className="middle">
						<X.Text className="text">Show Template</X.Text>
					</X.Middle>
					<X.Description className="description">
						{data.description}
					</X.Description>
				</X.Box>
			))}
		</X.Container>
	);
};

export default Template;
