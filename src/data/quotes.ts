export interface Quote {
  text: string;
  author: string;
}

/**
 * Cycles automatically in the footer every 6 seconds — add, remove, or
 * reorder freely, the rotation logic doesn't care about list length.
 */
export const quotes: Quote[] = [
  {
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    author: "ELON MUSK",
  },
  {
    text: "The biggest risk is not taking any risk.",
    author: "MARK ZUCKERBERG",
  },
  {
    text: "The people who are crazy enough to think they can change the world are the ones who do.",
    author: "STEVE JOBS",
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "LINUS TORVALDS",
  },
  {
    text: "The only way to go fast, is to go well.",
    author: "ROBERT C. MARTIN",
  },
];
