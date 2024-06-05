import { SocialMedias } from "./socialMedias";
import { TitleContainer } from "./titleContainer";

export function MainContainer() {
  return (
    <div className="md:flex-row flex justify-center items-center gap-4 md:gap-8 container">
      <SocialMedias />
      <TitleContainer />
    </div>
  )
}