import album_kanye_west_graduation from "../Images/album_kanye_west_graduation.jpg";
import album_kanye_west_lateregistration from "../Images/album_kanye_west_lateregistration.jpg";
import album_kanye_west_ye from "../Images/album_kanye_west_ye.jpg";
import album_kanye_west_mybeautifuldarktwistedfantasy from "../Images/album_kanye_west_mybeautifuldarktwistedfantasy.jpg";
import album_kanye_west_collegedropout from "../Images/album_kanye_west_collegedropout.jpg";
import album_kanye_west_thelifeofpablo from "../Images/album_kanye_west_thelifeofpablo.jpg";
import album_kanye_west_808sandheartbreak from "../Images/album_kanye_west_808sandheartbreak.jpg";
import album_kanye_west_cruelsummer from "../Images/album_kanye_west_cruelsummer.jpg";
import album_kanye_west_watchthethrone from "../Images/album_kanye_west_watchthethrone.jpg";
import album_kanye_west_donda from "../Images/album_kanye_west_donda.jpg";
import album_kanye_west_yeezus from "../Images/album_kanye_west_yeezus.jpg";
import album_kanye_west_jesusisking from "../Images/album_kanye_west_jesusisking.jpg";
import album_kanye_west_kidsseeghosts from "../Images/album_kanye_west_kidsseeghosts.jpg";

import KanyeWestBound2 from "../Audio/Kanye_West_Bound_2.mp3";
import KanyeWestIWonder from "../Audio/Kanye_West_I_Wonder.mp3";
import KanyeWestDevilInANewDress from "../Audio/Devil_in_a_New_Dress.mp3";
import KanyeWestLostInTheWorld from "../Audio/Lost_In_The_World.mp3";
import KanyeWestFeedback from "../Audio/Feedback.mp3";
import KanyeWestNewDay from "../Audio/New_Day.mp3";
import KanyeWestCold from "../Audio/Cold.mp3";
import KanyeWestClosedOnSunday from "../Audio/Closed_on_Sunday.mp3";
import KanyeWestViolentCrimes from "../Audio/Violent_Crimes.mp3";
import KanyeWestNoChildLeftBehind from "../Audio/No_Child_Left_Behind.mp3";
import KanyeWestFamilyBusiness from "../Audio/Family_Business.mp3";
import KanyeWestRunaway from "../Audio/Runaway.mp3";

export const catalog_kanye_west = [
  album_kanye_west_collegedropout,
  album_kanye_west_lateregistration,
  album_kanye_west_graduation,
  album_kanye_west_808sandheartbreak,
  album_kanye_west_mybeautifuldarktwistedfantasy,
  album_kanye_west_watchthethrone,
  album_kanye_west_yeezus,
  album_kanye_west_thelifeofpablo,
  album_kanye_west_ye,
  album_kanye_west_kidsseeghosts,
  album_kanye_west_jesusisking,
  album_kanye_west_donda,
];

export const audioSources = [
  KanyeWestRunaway,
  KanyeWestFamilyBusiness,
  KanyeWestViolentCrimes,
  KanyeWestDevilInANewDress,
  KanyeWestNoChildLeftBehind,
  KanyeWestLostInTheWorld,
  KanyeWestClosedOnSunday,
  KanyeWestFeedback,
  KanyeWestNewDay,
  KanyeWestCold,
];

export const questions = [
  {
    id: 0,
    difficulty: "Easy",
    audio: KanyeWestRunaway,
    answerOptions: [
      { answerText: "Dark Fanstasy", isCorrect: false },
      { answerText: "Flashing Lights", isCorrect: false },
      { answerText: "Amazing", isCorrect: false },
      { answerText: "Runaway", isCorrect: true },
    ],
  },
  {
    id: 1,
    difficulty: "Easy",
    audio: KanyeWestFamilyBusiness,
    answerOptions: [
      { answerText: "All Falls Down", isCorrect: false },
      { answerText: "Family Business", isCorrect: true },
      { answerText: "Last Call", isCorrect: false },
      { answerText: "I Wonder", isCorrect: false },
    ],
  },
  {
    id: 2,
    difficulty: "Easy",
    audio: KanyeWestViolentCrimes,
    answerOptions: [
      { answerText: "No Mistakes", isCorrect: false },
      { answerText: "Violent Crimes", isCorrect: true },
      { answerText: "All Falls Down", isCorrect: false },
      { answerText: "All Mine", isCorrect: false },
    ],
  },
  {
    id: 3,
    difficulty: "Medium",
    audio: KanyeWestDevilInANewDress,
    answerOptions: [
      { answerText: "Addiction", isCorrect: false },
      { answerText: "Facts", isCorrect: false },
      { answerText: "Devil in a New Dress", isCorrect: true },
      { answerText: "So Appalled", isCorrect: false },
    ],
  },
  {
    id: 4,
    difficulty: "Medium",
    audio: KanyeWestNoChildLeftBehind,
    answerOptions: [
      { answerText: "No Child Left Behind", isCorrect: true },
      { answerText: "Heaven and Hell", isCorrect: false },
      { answerText: "Keep My Spirit Alive", isCorrect: false },
      { answerText: "New God Flow", isCorrect: false },
    ],
  },
  {
    id: 5,
    difficulty: "Medium",
    audio: KanyeWestLostInTheWorld,
    correctAnswer: "Lost in the World",
    answerOptions: [
      { answerText: "Say You Will", isCorrect: false },
      { answerText: "Love Lockdown", isCorrect: false },
      { answerText: "Welcome to Heartbreak", isCorrect: false },
      { answerText: "Lost in the World", isCorrect: true },
    ],
  },
  {
    id: 6,
    difficulty: "Medium",
    audio: KanyeWestClosedOnSunday,
    answerOptions: [
      { answerText: "Closed on Sunday", isCorrect: true },
      { answerText: "Coldest Winter", isCorrect: false },
      { answerText: "God Is", isCorrect: false },
      { answerText: "Drive Slow", isCorrect: false },
    ],
  },
  {
    id: 7,
    difficulty: "Difficult",
    audio: KanyeWestFeedback,
    answerOptions: [
      { answerText: "Fade", isCorrect: false },
      { answerText: "Feedback", isCorrect: true },
      { answerText: "FML", isCorrect: false },
      { answerText: "Freestyle 4", isCorrect: false },
    ],
  },
  {
    id: 8,
    difficulty: "Difficult",
    audio: KanyeWestNewDay,
    answerOptions: [
      { answerText: "Lift Off", isCorrect: false },
      { answerText: "No Church in the Wild", isCorrect: false },
      { answerText: "The Joy", isCorrect: false },
      { answerText: "New Day", isCorrect: true },
    ],
  },
  {
    id: 9,
    difficulty: "Insane",
    audio: KanyeWestCold,
    answerOptions: [
      { answerText: "All Day", isCorrect: false },
      { answerText: "Coldest Winter", isCorrect: false },
      { answerText: "Cold", isCorrect: true },
      { answerText: "To the World", isCorrect: false },
    ],
  },
];
