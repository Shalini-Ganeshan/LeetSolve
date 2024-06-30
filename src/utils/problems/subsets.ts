import assert from "assert";
import { Problem } from "../types/problem";

// Subsets function
function subsets(nums: number[]): number[][] {
	const result: number[][] = [];
	const subset: number[] = [];

	function backtrack(start: number) {
		result.push([...subset]);

		for (let i = start; i < nums.length; i++) {
			subset.push(nums[i]);
			backtrack(i + 1);
			subset.pop();
		}
	}

	backtrack(0);
	return result;
}

export const subsetsHandler = (fn: any) => {
	try {
		const tests = [
			[1, 2, 3],
			[0],
			[],
			[1, 2]
		];
		const answers = [
			[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]],
			[[], [0]],
			[[]],
			[[], [1], [1, 2], [2]]
		];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.deepEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from subsetsHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeSubsetsJS = `
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  // Write your code here
};`;

export const subsetsProblem: Problem = {
	id: "subsets",
	title: "Subsets",
	order: 10,
	problemStatement: `<p class='mt-3'>Given an integer array <code>nums</code> of unique elements, return <em>all possible subsets (the power set)</em>.</p>
	<p>The solution set must not contain duplicate subsets. Return the solution in <em>any order</em>.</p>`,
	examples: [
		{
			id: 0,
			inputText: "nums = [1,2,3]",
			outputText: "[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]",
		},
		{
			id: 1,
			inputText: "nums = [0]",
			outputText: "[[],[0]]",
		},
		{
			id: 2,
			inputText: "nums = [1,2]",
			outputText: "[[],[1],[1,2],[2]]",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= nums.length <= 10</code></li>
<li class='mt-2'><code>-10 <= nums[i] <= 10</code></li>
<li class='mt-2'><code>All the numbers of <code>nums</code> are unique.</code></li>`,
	starterCode: starterCodeSubsetsJS,
	handlerFunction: subsetsHandler,
	starterFunctionName: "function subsets(",
};
