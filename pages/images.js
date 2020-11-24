import mainLayout from '../layout/main';
import ImageList from '../component/ImageList';

function Home() {
  return (
    <>
      <ImageList />
    </>
  );
}

export default mainLayout({ Page: Home, Title: '이미지' });
