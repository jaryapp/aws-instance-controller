import Head from 'next/head';
import Menu from '../component/Menu';

const mainLayout = ({ Page, Title }) => {
  const style = {
    background: '#fafafa',
  };

  const title = {
    paddingTop: '30px',
    marginLeft: '40px',
  };

  return () => (
    <div>
      <Head>
        <title>AWS Controller</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu></Menu>
      <h1 style={title}>{Title}</h1>
      <Page stlye={style} />
    </div>
  );
};

export default mainLayout;
