type ResultItem = {
  title: string;
  sub: string;
};

type Result = {
  title: string;
  sub: (ResultItem | Result)[];
};

const treeStructure: Result[] = [];

// TODO: 값이 잘 나오게 리팩토링 하기 꼭!!!!! 하드 코딩 시러!!
const getFilePathRecursively = (data: any) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [key] of Object.entries(data)) {
    // console.log(getFilePathRecursively(data[key]), '????');
    if (typeof key === 'object' && !data[key]) {
      treeStructure.push({
        title: key,
        sub: getFilePathRecursively(data[key]),
      });
      treeStructure.push(...getFilePathRecursively(key));
    }
    if (typeof key === 'string') {
      treeStructure.push({
        title: key,
        sub: data[key],
      });
      console.log('herer!');
    }
  }

  return treeStructure;
};

// const recursiveFn = data => {
//   // Set array for function runtime result
//   const res = [];
//   // Iterate through keys in your object
//   for(const key in data) {
//     // If value is object, process it
//     // again in recursion
//     if(typeof data[key] === 'object' && data[key] !== null) {
//       res.push({
//         "title": key,
//         "sub": recursiveFn(data[key])
//       });
//     // If value is string
//     } else if(typeof data[key] === 'string') {
//       res.push({
//         "title": key,
//         "path": data[key]
//       });
//     }
//   }
//   // Return result
//   return res;
// }

export default getFilePathRecursively;
