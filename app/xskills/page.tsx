import SkillsPage from "../renderpage/skills";
import Initializer from "../components/initializer";

export default function SkillsRoute() {
  return (
    <>
      <Initializer tabName="skills" />
      <SkillsPage />
    </>
  );
}