import BioPage from "./renderpage/biography";
import Initializer from "./components/initializer";

export default function StatusRoute() {
  return (
    <>
      <Initializer tabName="status" />
      <BioPage />
    </>
  );
}