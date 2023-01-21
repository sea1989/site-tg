// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
} from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

// Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Панель",
    },
    {
        icon: UilClipboardAlt,
        heading: "Заказы",
    },
    {
        icon: UilUsersAlt,
        heading: "Пользователи",
    },
    {
        icon: UilPackage,
        heading: 'Продукция'
    },
    {
        icon: UilChart,
        heading: 'Аналитика'
    },
];

// Analytics Cards Data
export const cardsData = [
    {
      title: "Продажи",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Прибыль",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Расходы",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "текст тестовый.",
    time: "25 секунд назад",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "текст тестовый текст тестовый.",
    time: "30 минут назад",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "текст тестовый текст тестовый текст тестовый",
    time: "2 часа назад",
  },
];