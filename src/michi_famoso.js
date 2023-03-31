function findFamousCats(cats) {
  let total = 0;
  const nCats = cats.reduce((accumulator, cat) => {
    const follow = cat.followers.reduce((acum, currVal) => acum + currVal, 0);
    if (total < follow) {
      accumulator = [cat.name];
      total = follow;
    } else if (total === follow) {
      accumulator.push(cat.name);
    }
    return accumulator;
  }, []);
  console.log(nCats);
  return nCats;
}

findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70],
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200],
  },
  {
    name: "Gizmo",
    followers: [250, 750],
  },
]);

