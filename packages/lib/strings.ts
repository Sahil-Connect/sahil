export const formatCategoryName = (categoryName: string) => {
  // Replace "_and_" with " & ", split the category name by underscores,
  // capitalize each word, and join them back with spaces
  return categoryName
    .replace(/_and_/g, " & ")
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const generateInitials = (name: string) => {
  return name
    .split(" ")
    .slice(0, 3)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
