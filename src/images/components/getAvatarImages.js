const avatars = [1, 2, 3, 4];

const getAvatarImage = (index) => {
  switch (index) {
    case 0:
      return require("../img_1.json");
    case 1:
      return require("../img_2.json");
    case 2:
      return require("../img_3.json");
    case 3:
      return require("../img_4.json");
    default:
      return require("../img_2.json");
  }
};

const getAvatarBodyImage = (index) => {
  switch (index) {
    case 0:
      return require("../img_1_1.json");
    case 1:
      return require("../img_2_1.json");
    case 2:
      return require("../img_3_1.json");
    case 3:
      return require("../img_4_1.json");
    default:
      return require("../img_2_1.json");
  }
};
export { avatars, getAvatarImage, getAvatarBodyImage };
