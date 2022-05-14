import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css";
import VoteCardResults from "../../elements/VoteCardResults/VoteCardResults";
import VoteCardMacMiller from "../../elements/VoteCardMacMiller/VoteCardMacMiller";
import VoteCardTylerTheCreator from "../../elements/VoteCardTylerTheCreator/VoteCardTylerTheCreator";
import classes from "./VoteSection.module.css";

const VoteSection = (props) => {
  return (
    <div className={classes.container}>
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <VoteCardResults></VoteCardResults>
        </SwiperSlide>
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
