export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("your name")) {
    return ("Alexis")
  }
  const regex = /What is (\d+) plus (\d+)\?/i;
  const match = query.match(regex);
  
  if (match) {
    // Extract the numbers from the matched groups
    const x = parseInt(match[1]);
    const y = parseInt(match[2]);
    return ("" + x+y)
  }
  const regex1 = /Which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/i;
  const match1 = query.match(regex);
  
  if (match1) {
    // Extract the numbers from the matched groups
    const x = parseInt(match1[1]);
    const y = parseInt(match1[2]);
    const z = parseInt(match1[3]);
    return ("" + Math.max(x,y,z))
  }

  return "";
}
