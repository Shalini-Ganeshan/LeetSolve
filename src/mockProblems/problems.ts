export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};

export const problems: Problem[] = [
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
		videoId: "https://www.youtube.com/watch?v=IufUNRCQ37E",
	
	},
	{
		id: "reverse-linked-list",
		title: "Reverse Linked List",
		difficulty: "Hard",
		category: "Linked List",
		order: 2,
		videoId: "https://www.youtube.com/watch?v=S9kMVEUg-x4",
	},
	{
		id: "jump-game",
		title: "Jump Game",
		difficulty: "Medium",
		category: "Dynamic Programming",
		order: 3,
		videoId: "https://www.youtube.com/watch?v=muDPTDrpS28",
	},
	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Easy",
		category: "Stack",
		order: 4,
		videoId: "https://www.youtube.com/watch?v=HhBo1fckgBM",
	},
	{  
		id: "search-a-2d-matrix",
		title: "Search a 2D Matrix",
		difficulty: "Medium",
		category: "Binary Search",
		order: 5,
		videoId: "https://www.youtube.com/watch?v=Ber2pi2C0j0",
	},
	{
		id: "container-with-most-water",
		title: "Container With Most Water",
		difficulty: "Medium",
		category: "Two Pointers",
		order: 6,
		videoId: "https://www.youtube.com/watch?v=QNIgO9Ea0gw",
	},
	{
		id: "merge-intervals",
		title: "Merge Intervals",
		difficulty: "Medium",
		category: "Greedy",
		order: 7,
		videoId: "https://www.youtube.com/watch?v=hbPATy78Rss",
	},
	{
		id: "maximum-depth-of-binary-tree",
		title: "Maximum Depth of Binary Tree",
		difficulty: "Easy",
		category: "Tree",
		order: 8,
		videoId: "https://www.youtube.com/watch?v=xcVoP5wuOzM",
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Easy",
		category: "Dynammic Programming",
		order: 9,
		videoId: "",
	},
	{
		id: "subsets",
		title: "Subsets",
		difficulty: "Medium",
		category: "Backtracking",
		order: 10,
		videoId: "",
	},
];
