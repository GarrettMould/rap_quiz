import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import VoteCardMacMiller from "../../elements/VoteCardMacMiller/VoteCardMacMiller";
import VoteCardTylerTheCreator from "../../elements/VoteCardTylerTheCreator/VoteCardTylerTheCreator";
import classes from "./VoteSection.module.css";

const VoteSection = (props) => {
  return (
    <div className={classes.container}>
      <Swiper>
        <SwiperSlide>
          <VoteCardMacMiller></VoteCardMacMiller>
        </SwiperSlide>
        <SwiperSlide>
          <VoteCardTylerTheCreator></VoteCardTylerTheCreator>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default VoteSection;
