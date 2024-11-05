import basket_icon from "./basket_icon.png";
import logo from "./logo.png";
import header_img from "./header_img.png";
import search_icon from "./search_icon.png";
import menu_1 from "./menu_1.png";
import menu_3 from "./menu_3.png";
import menu_4 from "./menu_4.png";
import menu_5 from "./menu_5.png";
import menu_6 from "./menu_6.png";
import menu_7 from "./menu_7.png";
import menu_8 from "./menu_8.png";

import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import cross_icon from "./cross_icon.png";
import selector_icon from "./selector_icon.png";
import rating_starts from "./rating_starts.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";

export const assets = {
  logo,
  basket_icon,
  header_img,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
};

export const menu_list = [
  {
    menu_name: "breakfast",
    menu_image: menu_1,
  },

  {
    menu_name: "lunch",
    menu_image: menu_3,
  },
  {
    menu_name: "dinner",
    menu_image: menu_4,
  },
  {
    menu_name: "Vegan",
    menu_image: menu_7,
  },
  {
    menu_name: "Beverages",
    menu_image: menu_6,
  },
];

export const food_list = [
  {
    _id: "1",
    name: "TIMATIM SELAXA (ቲማቲም ሰላጣ)",
    category: "dinner",
    price: 5.99,
    image:
      "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp",
    description: `Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s also popular in Eritrea. It’s made with diced tomatoes, minced onions, and finely chopped peppers dressed with a mixture of berbere spices, olive oil, vinegar, and lemon juice.`,
  },
  {
    _id: "2",
    name: "TIBS (ጥብስ)",
    category: "lunch",
    price: 22.99,
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280",
    description: `Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is one of the most popular dishes among Ethiopians. It comes in a variety of forms, varying in type, size or shape of the cuts of meat used, and can range from hot to mild or contain little to no vegetables. A particularly recommended variation is shekla tibs, in which the strips of meat arrive at your table roasting atop a clay pot stoked with hot coals – dramatic and delicious.`,
  },
  {
    _id: "3",
    name: "GENFO (ገንፎ)",
    category: "breakfast",
    price: 20.99,
    image:
      "https://cdn.tasteatlas.com//images/dishes/d64fe1f3c3754340bfbc7e20510110ef.jpg?w=905&h=510",
    description: `Genfo is a simple Ethiopian porridge that is commonly consumed for breakfast, made by adding dry-roasted barley flour to boiling water and stirring the concoction with a wooden utensil until it develops a smooth, yet extremely thick consistency.`,
  },
  {
    _id: "4",
    name: "KINCHE (ቂንጬ)",
    category: "dinner",
    price: 7.99,
    image:
      "https://cdn.tasteatlas.com//images/dishes/5746f1c174664a01990eb04377c9228a.jpg?w=905&h=510",
    description: `Simple, nutritious, and inexpensive, kinche is an Ethiopian breakfast staple made with cracked wheat that is boiled in either water or milk. The best way to describe kinche would be as the Ethiopian equivalent of oatmeal. After it has been cooked, kinche is added to the pan with either clarified spiced butter known as niter qibe or with oil and fried onions, although kinche can also be consumed without any flavorings.`,
  },
  {
    _id: "5",
    name: "KITFO (ክትፎ)",
    category: "lunch",
    price: 25.99,
    image:
      "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp",
    description: `Made from the leanest meat, kitfo is viewed as a big treat by ordinary Ethiopians, while its nutritional powers are also praised. Similar to French steak tartare, the meat is minced and warmed in a pan with a little butter, mitmita (a stronger version of berbere) and sometimes thyme. Kitfo is typically served leb leb (warmed, not cooked), though you can ask for it to be betam leb leb (“very warmed,” which basically means cooked).`,
  },
  {
    _id: "6",
    name: "KIK ALICHA (ክክ አልጫ)",
    category: "dinner",
    price: 12.99,
    image:
      "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kik-alicha.jpg.webp",
    description: `If you don’t have a high tolerance for spicy food, then you’re going to be thankful for kik alicha. It refers to an Ethiopian lentil stew made from split peas, niter kibbeh, and turmeric. Unlike many of the dishes in this Ethiopian food guide, it isn’t made with any berbere so it isn’t nearly as spicy as dishes like doro wat and siga wat.Kik alicha is a mildly flavored stew made with yellow split peas simmered with garlic, onions, ginger, turmeric, and niter kibbeh. It’s a popular type of vegetarian stew that’s often served as part of a combination platter.`,
  },
  {
    _id: "7",
    name: "GORED GORED (ጎረድ ጎረድ)",
    category: "lunch",
    price: 28.99,
    image:
      "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo-gored.jpg.webp",
    description: `If kitfo piqued your interest, then you may want to try gored gored as well. It’s a similar dish to kitfo except it’s made with cubes of raw beef – usually tenderloin or round steak – seasoned with niter kibbeh, mitmita, berbere, and awaze (chili mustard sauce). Like kitfo, it’s usually served with injera.`,
  },
  {
    _id: "8",
    name: "FATIRA (ፈጢራ)",
    category: "breakfast",
    price: 18.99,
    image:
      "https://cdn.tasteatlas.com//images/dishes/f99dcc3dfcc642348a40b19f51f32b74.jpg?w=905&h=510",
    description: `Fatira is a traditional Ethiopian street food item that is commonly consumed for breakfast, consisting of a large, crispy, wheat flour pancake. It is traditionally served with scrambled eggs, honey, or both. Fatira is often cut into smaller pieces, and it is especially popular during Eid-al-Fitr in Ethiopia.`,
  },
  {
    _id: "9",
    name: "KIXA FIR-FIR (ቂጣ ፍር ፍር)",
    category: "breakfast",
    price: 15.99,
    image:
      "https://cdn.tasteatlas.com//images/dishes/685b5e5b70b441a7a4e7279a43a89333.jpg?w=905&h=510",
    description: `Kixa fir-fir is a fit-fit variety prepared with a combination of torn pieces of kitcha flatbread, clarified butter, and berbere spices. The dish is traditionally served for breakfast, when it’s accompanied by plain yogurt. Unlike most Ethiopian dishes, kitcha fit-fit is typically consumed with a spoon instead of using the right hand.`,
  },
];
