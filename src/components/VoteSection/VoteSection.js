import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css";
import Media from "react-media";
import VoteCardHomePage from "../../elements/VoteCardHomePage/VoteCardHomePage";
import VoteCardResults from "../../elements/VoteCardResults/VoteCardResults";
import VoteCardMacMiller from "../../elements/VoteCardMacMiller/VoteCardMacMiller";
import VoteCardTylerTheCreator from "../../elements/VoteCardTylerTheCreator/VoteCardTylerTheCreator";
import VoteCardKendrickLamar from "../../elements/VoteCardKendrickLamar/VoteCardKendrickLamar";
import classes from "./VoteSection.module.css";

const VoteSection = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <div className={classes.containerMobile}>
            <Swiper pagination={true} modules={[Pagination]}>
              <SwiperSlide>
                <VoteCardHomePage></VoteCardHomePage>
              </SwiperSlide>
              <SwiperSlide>
                <VoteCardMacMiller></VoteCardMacMiller>
              </SwiperSlide>
              <SwiperSlide>
                <VoteCardTylerTheCreator></VoteCardTylerTheCreator>
              </SwiperSlide>
              <SwiperSlide>
                <VoteCardKendrickLamar></VoteCardKendrickLamar>
              </SwiperSlide>
              <SwiperSlide>
                <VoteCardResults></VoteCardResults>
              </SwiperSlide>
            </Swiper>
          </div>
        ) : (
          <div className={classes.containerDesktop}>
            <Swiper pagination={true} modules={[Pagination]}>
              <SwiperSlide>
                <VoteCardHomePage></VoteCardHomePage>
              </SwiperSlide>
              <SwiperSlide>
                <VoteCardMacMiller></VoteCardMacMiller>
              </SwiperSlide>
              <SwiperSlide>
                <VoteCardTylerTheCreator></VoteCardTylerTheCreator>
              </SwiperSlide>
              <SwiperSlide>
                <VoteCardKendrickLamar></VoteCardKendrickLamar>
              </SwiperSlide>
              <SwiperSlide>
                <VoteCardResults></VoteCardResults>
              </SwiperSlide>
            </Swiper>
          </div>
        )
      }
    </Media>
  );
};

export default VoteSection;
