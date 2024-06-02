import Header from '@/app/_components/layouts/Header';
import Template from './(route)/main/page';
import Notification from '@/app/_components/layouts/Notification';

const Home = () => {
	return (
		<>
			<Header />
			<Notification />
			<Template />
		</>
	);
};

export default Home;
