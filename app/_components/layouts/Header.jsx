'use client';
import * as X from '@/app/_styles/components/header';
import { useRouter } from 'next/navigation';

const Header = () => {
	const router = useRouter();

	const handleTemplateClick = () => {
		const templateElement = document.getElementById('template');
		if (templateElement) {
			templateElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<X.Container>
				<X.Description>
					<p>Mubro Design Template Page</p>
					<p>Trendy & Mordern</p>
					<p>Production of professional Web pages</p>
				</X.Description>
				<X.SecondDescription>
					<p>Mubro</p>
					<p onClick={handleTemplateClick}>Template</p>
					<p>Contact Us</p>
				</X.SecondDescription>
			</X.Container>
		</>
	);
};

export default Header;
