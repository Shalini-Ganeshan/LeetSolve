import assert from "assert";
import { Problem } from "../types/problem";

// Container With Most Water function
function maxArea(height: number[]): number {
	let left = 0;
	let right = height.length - 1;
	let maxArea = 0;

	while (left < right) {
		const width = right - left;
		const currentHeight = Math.min(height[left], height[right]);
		const currentArea = width * currentHeight;
		maxArea = Math.max(maxArea, currentArea);

		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}

	return maxArea;
}

export const containerWithMostWaterHandler = (fn: any) => {
	try {
		const tests = [
			[[1,8,6,2,5,4,8,3,7]], 
			[[1,1]], 
			[[4,3,2,1,4]],
			[[1,2,1]],
			[]
		];
		const answers = [
			49, 
			1, 
			16, 
			2,
			0
		];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.strictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from containerWithMostWaterHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeMaxAreaJS = `
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  // Write your code here
};`;

export const containerWithMostWaterProblem: Problem = {
	id: "container-with-most-water",
	title: "Container With Most Water",
	order: 6,
	problemStatement: `<p class='mt-3'>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>
<p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>
<p>Return the maximum amount of water a container can store.</p>`,
	examples: [
		{
			id: 0,
			inputText: "height = [1,8,6,2,5,4,8,3,7]",
			outputText: "49",
		},
		{
			id: 1,
			inputText: "height = [1,1]",
			outputText: "1",
		},
		{
			id: 2,
			inputText: "height = [4,3,2,1,4]",
			outputText: "16",
		},
	],
	constraints: `<li class='mt-2'> <code>n == height.length</code> </li>
<li class='mt-2'><code>2 <= n <= 10<sup>5</sup></code></li>
<li class='mt-2'><code>0 <= height[i] <= 10<sup>4</sup></code></li>`,
	starterCode: starterCodeMaxAreaJS,
	handlerFunction: containerWithMostWaterHandler,
	starterFunctionName: "function maxArea(",
};
