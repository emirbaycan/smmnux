import type {
  ItemwIcon,
  ItemwImage
} from "../types";

import {
  cheapest,
  easy,
  highest,
  fastest,
  rtd,
  securepayment
} from "../assets";

import { SiLinkedin, SiSoundcloud, SiSpotify, SiTelegram, SiTwitter, SiYoutube } from "react-icons/si";
import { GiSeedling, GiStarsStack } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const serviceIcons: ItemwIcon[] = [
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

const benefitImages: ItemwImage[] = [
  {
    img: cheapest
  },
  {
    img: easy,
  },
  {
    img: highest,
  },
  {
    img: fastest,
  },
  {
    img: rtd,
  },
  {
    img: securepayment,
  }
];

const whyusIcons: ItemwIcon[] = [
  {
    Icon: GiSeedling
  },
  {
    Icon: GiStarsStack,
  },
  {
    Icon: BiSupport,
  }
];

export { 
  benefitImages,
  serviceIcons,
  whyusIcons
 };
