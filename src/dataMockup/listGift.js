import { faker } from "@faker-js/faker";
import imgPlayer from "../asset/shirt.png";
const randomAvatar = faker.image.avatar();

export const Gift = [
  {
    avatar: randomAvatar,
    title: "Iphone 14",
    dateTime: "Ngày trúng giải: 18/07/2022",
  },
  {
    avatar: randomAvatar,
    title: "Voucher 500k",
    dateTime: "Ngày trúng giải: 18/07/2022",
  },
  {
    avatar: randomAvatar,
    title: "Voucher 20k",
    dateTime: "Ngày trúng giải: 18/07/2022",
  },
  {
    avatar: randomAvatar,
    title: "Voucher 10k",
    dateTime: "Ngày trúng giải: 18/07/2022",
  },
  {
    avatar: randomAvatar,
    title: "Voucher 300k",
    dateTime: "Ngày trúng giải: 18/07/2022",
  },
  {
    avatar: randomAvatar,
    title: "Voucher 10k",
    dateTime: "Ngày trúng giải: 18/07/2022",
  },
  {
    avatar: randomAvatar,
    title: "Voucher 300k",
    dateTime: "Ngày trúng giải: 18/07/2022",
  },
];

export const superStarCollection = [
  {
    avatar: imgPlayer,
    player: "Cr.Ronaldo",
    owned: true,
  },
  {
    avatar: imgPlayer,
    player: "Cr.Ronaldo",
    owned: false,
  },
  {
    avatar: imgPlayer,
    player: "Cr.Ronaldo",
    owned: false,
  },
  {
    avatar: imgPlayer,
    player: "Cr.Ronaldo",
    owned: true,
  },
  {
    avatar: imgPlayer,
    player: "Cr.Ronaldo",
    owned: false,
  },
  {
    avatar: imgPlayer,
    player: "Cr.Ronaldo",
    owned: false,
  },
  {
    avatar: imgPlayer,
    player: "Cr.Ronaldo",
    owned: true,
  },
  {
    avatar: imgPlayer,
    player: "Cr.Ronaldo",
    owned: false,
  },
];

export const youngStarCollection = [
  {
    avatar: imgPlayer,
    Player: "Cr.Ronaldo",
    Owned: true,
  },
  {
    avatar: imgPlayer,
    Player: "Cr.Ronaldo",
    Owned: true,
  },
  {
    avatar: imgPlayer,
    Player: "Cr.Ronaldo",
    Owned: true,
  },
];
