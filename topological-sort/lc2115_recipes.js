/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  // 1. process supplies
  const sup = new Set();
  supplies.forEach((el) => sup.add(el));

  // 2. process recipes
  const rmap = new Map(); // <recipe, index>
  const indegree = new Array(recipes.length).fill(0);
  const map = new Map(); // recipes dependency map
  recipes.forEach((r, index) => {
    rmap.set(r, index);
    for (const ingre of ingredients[index]) {
      if (sup.has(ingre)) {
        continue; // ensure can make the recipe
      }
      if (!map.has(ingre)) {
        map.set(ingre, []);
      }
      map.get(ingre).push(r);
      indegree[index]++;
    }
  });

  // bfs
  const res = [];
  const q = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }
  while (q.length > 0) {
    const i = q.shift();
    const r = recipes[i];
    res.push(r);
    if (map.has(r)) {
      for (const next of map.get(r)) {
        if (--indegree[rmap.get(next)] === 0) {
          q.push(rmap.get(next));
        }
      }
    }
  }
  return res;
};
