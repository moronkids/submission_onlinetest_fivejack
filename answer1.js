// Limitations
// Record is an array containing the following strings and its length is 1 ~ 100,000.

// Here is a description of the string in the record.
// - All users are separated by [user ID].
// - [User ID] enters the chat with [Nickname] - "Enter [User ID] [Nickname]" (ex. "Enter uid1234 Muzi")
// - [User ID] leaves the chat - "Leave [User ID]" (ex. "Leave uid1234")
// - [User ID] changes nickname to [Nickname] - "Change [User ID] [Nickname]" (ex. "Change uid1234 Muzi")
// - The first word is either Enter, Leave, or Change.
// - Each word is separated by a space and consists of only uppercase letters, lowercase letters, and numbers.
// - The user ID and nickname distinguish between uppercase and lowercase letters.
// - The length of the user ID and nickname is 1 ~ 10.
// - There is no wrong input such as an user who left the chat is changing their nickname.
// Input and output examples
// record:
// ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

// answer:
// ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]
function solution(record) {
  const regexFirstWord = [/Enter/, /Leave/, /Change/];
  let splitToArr = record.map((val) => val.split(" "));
  let validate = true;

  let arr1 = [];
  let data = {};
  splitToArr.map((val) => {
      regexFirstWord.forEach((valz) => {
        if (
          val[0].match(valz[0]) == null &&
          val[0].match(valz[2]) == null &&
          val[0].match(valz[1]) == null &&
          val[1].length != 0 &&
          !val[1].length <= 10
        ) {
          validate = false;
        }
      });

  })

  if(validate) {
    splitToArr.map((val) => {
      switch (val[0]) {
        case "Enter":
          if (arr1.length <= 0) {
            data[val[1]] = {
              name: val[2],
            };
            arr1.push(val);
          } else {
            arr1.forEach((valz, i) => {
              if (valz[1] == val[1]) {
                data[val[1]] = {
                  name: val[2],
                };
                arr1.push(val);
              } else {
                data[val[1]] = {
                  name: val[2],
                };
                arr1.push(val);
              }
            });
          }
          break;
        case "Leave":
          // delete data[val[1]]["name"];
          arr1.push(val);
          break;
        case "Change":
          data[val[1]] = {
            name: val[2],
          };
          break;
      }
    });
    let answer = [];
    const unique = arr1.filter((v, i, a) => a.indexOf(v) === i);
    unique.forEach((val, i, x) => {
      Object.keys(data).forEach((x) => {
        if (val[1] === x) {
          unique[i][2] = data[val[1]].name;
          switch (val[0]) {
            case "Enter":
              answer.push(`${unique[i][2]} came in.`);
              break;
            case "Leave":
              answer.push(`${unique[i][2]} has left.`);
              break;
          }
        }
      });
    });
    return console.log(answer);
  }
  else {
    return console.log("First Word or ID is wrong cause limitation!")
  }

}

const input = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",

];

solution(input);

// im sorry if my code is bad, i try my best... thanks for read
