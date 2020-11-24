import mainLayout from '../layout/main';
import InstanceList from '../component/InstanceList';

function Home() {
  return (
    <>
      <InstanceList />
    </>
  );
}

export default mainLayout({ Page: Home, Title: '인스턴스' });
