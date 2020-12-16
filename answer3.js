// A Candidate Key is an attribute or a set of attributes that can uniquely identify a tuple of a relation in the relational database and satisfies the following two properties.

// - Uniqueness: The relation does not have two distinct tuples (i.e. rows or records in common database language) with the same values for these attributes.
// - Minimality: There should no subset of these attributes satisfy uniqueness, which means if we exclude one of these attributes, then uniqueness will be broken.

// [Student number, Name, Major, Grade]

// [100,"ryan","music",2]
// [200,"apeach","math",2]
// [300,"tube","computer",3]
// [400,"con","computer",4]
// [500,"muzi","music",3]
// [600,"apeach","music",2]

// In the above example, each student has a unique "student number".
// Thus, the ["student number"] can be the candidate key of the relation.

// Then, because there are students who use the same name ("apeach") for "name", "name" can not be a candidate key.

// However, if you use ["name", "major"] together, all the tuples of the relation can be uniquely identified, so they can become candidate keys.

// Of course, it is possible to uniquely identify all tuples in a relation using ["name", "major", "grade"], but it can not be a candidate key because it does not satisfy the minimum.

// Therefore, the candidate key of the input above is ["student number"], ["name", "major"].

// Find how many candidate keys are there for given array relation.

function solution(relation) {
  const uniquex = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  const obj = {};
  let final = {};
  let key_candidate = {
    id: 1,
    major: 0,
    grade: 0,
  };
  relation.map((val, i) => {
    obj[val[1]] = obj[val[1]] || [];
    let hitung = obj[val[1]].length;
    if (hitung > 0) {
      obj[val[1]][hitung] = i;
    } else {
      obj[val[1]] = [i];
    }
  });
  Object.keys(obj).map((val) => {
    if (obj[val].length > 1) {
      let unique = [];
      obj[val].forEach((valz, i) => {
        unique.push(relation[valz][1] + "_" + relation[valz][2]);
      });
      let hitung = unique.length;
      let result = unique.filter(uniquex);
      if (result.length == hitung) {
        key_candidate = {
          ...key_candidate,
          major: 1,
        };
      } else {
        final = {
          ...key_candidate,
          grade: 0,
        };
      }
      unique = []
      obj[val].forEach((valz, i) => {
        unique.push(relation[valz][1] + "_" + relation[valz][3]);
      });
      hitung = unique.length;
      result = unique.filter(uniquex);
      if (result.length == hitung) {
        final = {
          ...key_candidate,
          grade: 1 ,
        };
      }
      else {
        final = {
          ...key_candidate,
          grade: 0,
        };
      }
    }
  });
  return console.log(final.id + final.grade + final.major);
}

const relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];

solution(relation);

// console.log(obj, val, "hitung")
// obj[val[0]] = {
//   id: val[0],
//   name: val[1],
//   major: val[2],
//   grade: val[3],
// };
