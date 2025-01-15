export interface FoodItem {
    id: number;
    name: string;
    image: string;
    description: string;
  }
  
  export const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Burger",
      image: "/food/burger.jpg",
      description: "Juicy Chicken burger with lettuce & fries.",
    },
    {
      id: 2,
      name: "Chicken Karahi",
      image: "/food/CHICKEN KARAHI.jpg",
      description: "Spicy chicken karahi cooked with green chilies.",
    },
    {
      id: 3,
      name: "Pizza",
      image: "/food/pizza.jpg",
      description: "Delicious Dough Joe pizza.",
    },
    {
      id: 4,
      name: "Sushi",
      image: "/food/Sushi.jpg",
      description: "Assorted sushi rolls with fresh fish and vegetables.",
    },
    {
      id: 5,
      name: "Salad",
      image: "/food/salad.jpg",
      description: "Fresh mixed greens with toppings and dressings.",
    },
    {
      id: 6,
      name: "Water",
      image: "/food/water.jpg",
      description: "Refreshing chilled water to quench your thirst.",
    },
  ];