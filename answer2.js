// Limitations
// - N, total stages: 1 ~ 500
// - users:
//   The length of array users: 1 ~ 200,000
//   users contain numbers 1 ~ N + 1.
// - Each number in users represents the stage that the user is currently playing.
// - Where (N + 1) represents the user who cleared the last stage (Nth stage).
// - If there is a stage with the same failure rate, the smaller number of stages should be placed first.
// - If there is no user who reaches the stage, the failure rate of the stage is 0.

function solution(N, users) {
  let temp = {};
  let temp1 = [];
  let answer;
  let xLength = users.length;
  for (let index = 1; index <= N; index++) {
    temp1 = [];
    users.forEach((val, i, x) => {
      if (val == index) {
        temp1.push(val);
        let failure = temp1.length;
        const uLength = index == 1 ? xLength : temp[index - 1][0].users;
        let users = index == 1 ? uLength : uLength - temp[index - 1][0].failure;
        temp[index] = [
          {
            failure: failure,
            users: users,
            result: failure / users,
            stage: index,
          },
        ];
      }
    });
    let failure = temp1.length;
    const uLength = index == 1 ? xLength : temp[index - 1][0].users;
    let usersx = index == 1 ? uLength : uLength - temp[index - 1][0].failure;
    temp[index] = [
      {
        failure: failure,
        users: usersx,
        result: failure / usersx,
        stage: index,
      },
    ];
  }
  answer = Object.keys(temp).sort(function (a, b) {
    return temp[b][0].result - temp[a][0].result;
  });
  return console.log(answer);
}

N = 5;
users = [2, 1, 2, 6, 2, 4, 3, 3];
// N = 4;
// users = [4, 4, 4, 4, 4];
solution(N, users);
