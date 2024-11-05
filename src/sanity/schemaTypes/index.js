import { companyLogo } from "./components/companyLogo";
import { heroSection } from "./components/heroSection";
import { mainSection } from "./components/mainSection";
import { missionSection } from "./components/missionSection";
import { testimonialSection } from "./components/testimonialSection";
import { formType } from "./home/formType";
import { pageType } from "./pageType";
import { promotionType } from "./home/promotionType";
import { textWithIllustrationType } from "./home/textWithIllustrationType";
import { videoType } from "./home/videoType";
import { testimonialType } from "./testimonialTypes";

export const schema = {
  types: [ pageType,
    heroSection,
    textWithIllustrationType,
    companyLogo,
    missionSection,
    mainSection,
    formType,
    videoType,testimonialType,testimonialSection],
}
