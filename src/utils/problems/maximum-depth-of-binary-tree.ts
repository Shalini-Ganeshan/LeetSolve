import assert from "assert";
import { Problem } from "../types/problem";

// Definition for a binary tree node.
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

// Maximum Depth of Binary Tree function
function maxDepth(root: TreeNode | null): number {
	if (root === null) return 0;
	const leftDepth = maxDepth(root.left);
	const rightDepth = maxDepth(root.right);
	return Math.max(leftDepth, rightDepth) + 1;
}

export const maxDepthHandler = (fn: any) => {
	try {
		const tests = [
			[1, 2, 3, 4, 5, null, null],
			[1, null, 2, 3],
			[1],
			[]
		];
		const answers = [
			3,
			3,
			1,
			0
		];
		for (let i = 0; i < tests.length; i++) {
			const tree = createBinaryTree(tests[i]);
			const result = fn(tree);
			assert.strictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from maxDepthHandler: ", error);
		throw new Error(error);
	}
};

// it creates a binary tree from an array
function createBinaryTree(values: (number | null)[]): TreeNode | null {
	if (values.length === 0) return null;
	const root = new TreeNode(values[0] as number);
	const queue = [root];
	let i = 1;
	while (i < values.length) {
		const current = queue.shift();
		if (values[i] !== null) {
			const leftNode = new TreeNode(values[i] as number);
			current!.left = leftNode;
			queue.push(leftNode);
		}
		i++;
		if (i < values.length && values[i] !== null) {
			const rightNode = new TreeNode(values[i] as number);
			current!.right = rightNode;
			queue.push(rightNode);
		}
		i++;
	}
	return root;
}

const starterCodeMaxDepthJS = `
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  // Write your code here
};`;

export const maxDepthProblem: Problem = {
	id: "maximum-depth-of-binary-tree",
	title: "Maximum Depth of Binary Tree",
	order: 8,
	problemStatement: `<p class='mt-3'>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>
	<p>A binary tree's <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>`,
	examples: [
		{
			id: 0,
			inputText: "root = [3,9,20,null,null,15,7]",
			outputText: "3",
		},
		{
			id: 1,
			inputText: "root = [1,null,2]",
			outputText: "2",
		},
		{
			id: 2,
			inputText: "root = []",
			outputText: "0",
		},
	],
	constraints: `<li class='mt-2'><code>The number of nodes in the tree is in the range [0, 10<sup>4</sup>]</code></li>
<li class='mt-2'><code>-100 <= Node.val <= 100</code></li>`,
	starterCode: starterCodeMaxDepthJS,
	handlerFunction: maxDepthHandler,
	starterFunctionName: "function maxDepth(",
};
