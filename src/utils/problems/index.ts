import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";
import { mergeIntervalsProblem } from "./merge-intervals";
import { containerWithMostWaterProblem } from "./container-with-most-water";
import { maxDepthProblem } from "./maximum-depth-of-binary-tree";
import { bestTimeToBuyAndSellStockProblem } from "./best-time-to-buy-and-sell-stock";
import { subsetsProblem } from "./subsets";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	"reverse-linked-list": reverseLinkedList,
	"jump-game": jumpGame,
	"search-a-2d-matrix": search2DMatrix,
	"valid-parentheses": validParentheses,
	"merge-intervals":mergeIntervalsProblem,
"container-with-most-water":containerWithMostWaterProblem,
"maximum-depth-of-binary-tree":maxDepthProblem,
"best-time-to-buy-and-sell-stock":bestTimeToBuyAndSellStockProblem,
"subsets":subsetsProblem





};
