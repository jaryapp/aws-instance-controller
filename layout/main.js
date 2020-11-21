import Head from "next/head";
import Menu from "../component/Menu";

const mainLayout = (Page) => {
  const style = {
    background: "#fafafa",
  };

  return () => (
    <div>
      <Head>
        <title>AWS Controller</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu></Menu>
      <Page stlye={style} />
    </div>
  );
};

export default mainLayout;
