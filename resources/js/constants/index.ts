import type {
  ItemwImage,
  ItemwIcon
} from "../types";

import {
  audiomack_service,
  clubhouse_service,
  datpiff_service,
  deezer_service,
  discord_service,
  kiwi_service,
  likee_service,
  logo,
  reddit_service,
  snapchat_service,
  soundcloud_service,
  spotify_service,
  telegram_service,
  tumblr_service,
  twitch_service,
  twitter_service,
  youtube_service
} from "../assets";
import { SiLinkedin, SiSoundcloud, SiSpotify, SiTelegram, SiTwitter, SiYoutube } from "react-icons/si";
import { CiDiscount1 } from "react-icons/ci";


const serviceImages: ItemwImage[] = [
  {
    img: youtube_service
  },
  {
    img: telegram_service,
  },
  {
    img: spotify_service,
  },
  {
    img: twitch_service,
  },
  {
    img: twitter_service,
  },
  {
    img: discord_service,
  },
  {
    img: soundcloud_service,
  },
  {
    img: audiomack_service,
  }, 
  {
    img: clubhouse_service,
  },
  {
    img: reddit_service,
  },
  {
    img: datpiff_service,
  },
  {
    img: deezer_service,
  },
  {
    img: kiwi_service,
  },
  {
    img: tumblr_service,
  },
  {
    img: snapchat_service,
  },
  {
    img: likee_service,
  }
];

const policyImages: ItemwImage[] = [
  {
    img: logo
  },
  {
    img: logo,
  },
  {
    img: logo,
  },
  {
    img: logo,
  }
];

const homeServiceIcons: ItemwIcon[] = [
  {
    Icon: SiSpotify
  },
  {
    Icon: SiSoundcloud,
  },
  {
    Icon: SiYoutube,
  },
  {
    Icon: SiTwitter,
  },
  {
    Icon: SiLinkedin,
  },
  {
    Icon: SiTelegram,
  }
];

const homeBenefitIcons: ItemwIcon[] = [
  {
    Icon: CiDiscount1
  },
  {
    Icon: SiSoundcloud,
  },
  {
    Icon: SiYoutube,
  },
  {
    Icon: SiTwitter,
  },
  {
    Icon: SiLinkedin,
  },
  {
    Icon: SiTelegram,
  }
];

export { 
  serviceImages,
  policyImages,
  homeServiceIcons,
  homeBenefitIcons
 };
