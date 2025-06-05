// waysToGiveData.ts
export interface WayToGiveItem {
  id: number;
  amount: string;
  description: string;
}

export const waysToGiveData: WayToGiveItem[] = [
  {
    id: 1,
    amount: "$50 provides",
    description: "Essential medical supplies for a community health worker",
  },
  {
    id: 2,
    amount: "$100 provides",
    description: "Training for a healthcare worker to serve their community",
  },
  {
    id: 3,
    amount: "$500 provides",
    description: "Essential medical equipment for a rural health clinic",
  },
  {
    id: 4,
    amount: "$1,000 provides",
    description:
      "Support for a mobile health clinic serving remote communities",
  },
];
