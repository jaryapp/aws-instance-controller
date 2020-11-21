import styles from "../styles/Home.module.css";
import mainLayout from "../layout/main";
import InstanceList from "../component/InstanceList";

function Home() {
  return (
    <>
      <InstanceList />
    </>
  );
}

export default mainLayout(Home);
