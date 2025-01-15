export interface DessertItem {
    id: number;
    name: string;
    image: string;
    description: string;
  }
  
  export const dessertItems: DessertItem[] = [
    {
      id: 1,
      name: "Maltesers",
      image: "/dessert/MALTESERS.jpeg",
      description: "Delicious Maltesers chocolate-covered malted milk balls.",
    },
    {
      id: 2,
      name: "Ice Cream",
      image: "/dessert/ice cream.jpg",
      description: "Classic vanilla ice cream with a variety of toppings.",
    },
    {
      id: 3,
      name: "Doughnuts",
      image: "/dessert/doughnuts.jpg",
      description: "Soft and fluffy doughnuts glazed with sweet icing.",
    },
    {
      id: 4,
      name: "Cupcakes",
      image: "/dessert/cupcakes.jpg",
      description: "Colorful and tasty cupcakes topped with creamy frosting.",
    },
    {
      id: 5,
      name: "Cheesecake",
      image: "/dessert/cheesecake.jpg",
      description: "Rich and creamy cheesecake with a buttery graham cracker crust.",
    },
  ];