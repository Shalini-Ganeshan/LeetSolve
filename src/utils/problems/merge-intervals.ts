import assert from "assert";
import { Problem } from "../types/problem";


// Merge Intervals function
function mergeIntervals(intervals: number[][]): number[][] {
	if (intervals.length === 0) return [];

	// Sort the intervals by their start time
	intervals.sort((a, b) => a[0] - b[0]);

	const merged: number[][] = [];
	let currentInterval = intervals[0];

	for (let i = 1; i < intervals.length; i++) {
		const [currentStart, currentEnd] = currentInterval;
		const [nextStart, nextEnd] = intervals[i];

		if (currentEnd >= nextStart) {
			// Merge the intervals
			currentInterval = [currentStart, Math.max(currentEnd, nextEnd)];
		} else {
			// No overlap, push the current interval and update to the next one
			merged.push(currentInterval);
			currentInterval = intervals[i];
		}
	}
	merged.push(currentInterval);

	return merged;
}

export const mergeIntervalsHandler = (fn: any) => {
	try {
		const tests = [
			[[1, 3], [2, 6], [8, 10], [15, 18]], 
			[[1, 4], [4, 5]], 
			[[1, 10], [2, 6], [8, 10], [15, 18]],
			[[1, 4], [2, 3]],
			[]
		];
		const answers = [
			[[1, 6], [8, 10], [15, 18]], 
			[[1, 5]], 
			[[1, 10], [15, 18]], 
			[[1, 4]], 
			[]
		];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.deepEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from mergeIntervalsHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeMergeIntervalsJS = `
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function mergeIntervals(intervals) {
  // Write your code here
};`;

export const mergeIntervalsProblem: Problem = {
	id: "merge-intervals",
	title: "Merge Intervals",
	order: 7,
	problemStatement: `<p class='mt-3'>Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.</p>`,
	examples: [
		{
			id: 0,
			inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
			outputText: "[[1,6],[8,10],[15,18]]",
		},
		{
			id: 1,
			inputText: "intervals = [[1,4],[4,5]]",
			outputText: "[[1,5]]",
		},
		{
			id: 2,
			inputText: "intervals = [[1,10],[2,6],[8,10],[15,18]]",
			outputText: "[[1,10],[15,18]]",
		},
	],
	constraints: `<li class='mt-2'> <code>0 <= intervals.length <= 10<sup>4</sup></code> </li>
<li class='mt-2'><code>intervals[i].length == 2</code></li>
<li class='mt-2'><code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>4</sup></code></li>`,
	starterCode: starterCodeMergeIntervalsJS,
	handlerFunction: mergeIntervalsHandler,
	starterFunctionName: "function mergeIntervals(",
};
