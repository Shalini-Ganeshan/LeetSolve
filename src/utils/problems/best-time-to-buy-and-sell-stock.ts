import assert from "assert";
import { Problem } from "../types/problem";

// Best Time to Buy and Sell Stock function
function maxProfit(prices: number[]): number {
	let minPrice = Infinity;
	let maxProfit = 0;

	for (const price of prices) {
		if (price < minPrice) {
			minPrice = price;
		} else if (price - minPrice > maxProfit) {
			maxProfit = price - minPrice;
		}
	}

	return maxProfit;
}

export const maxProfitHandler = (fn: any) => {
	try {
		const tests = [
			[7, 1, 5, 3, 6, 4],
			[7, 6, 4, 3, 1],
			[1, 2, 3, 4, 5],
			[],
			[1]
		];
		const answers = [
			5,
			0,
			4,
			0,
			0
		];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.strictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from maxProfitHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeMaxProfitJS = `
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  // Write your code here
};`;

export const bestTimeToBuyAndSellStockProblem: Problem = {
	id: "best-time-to-buy-and-sell-stock",
	title: "Best Time to Buy and Sell Stock",
	order: 9,
	problemStatement: `<p class='mt-3'>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>
	<p>You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.</p>
	<p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>`,
	examples: [
		{
			id: 0,
			inputText: "prices = [7,1,5,3,6,4]",
			outputText: "5",
		},
		{
			id: 1,
			inputText: "prices = [7,6,4,3,1]",
			outputText: "0",
		},
		{
			id: 2,
			inputText: "prices = [1,2,3,4,5]",
			outputText: "4",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= prices.length <= 10<sup>5</sup></code></li>
<li class='mt-2'><code>0 <= prices[i] <= 10<sup>4</sup></code></li>`,
	starterCode: starterCodeMaxProfitJS,
	handlerFunction: maxProfitHandler,
	starterFunctionName: "function maxProfit(",
};
