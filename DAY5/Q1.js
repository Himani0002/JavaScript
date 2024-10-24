let str = "Himani";

function getUnique(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    let currChat = str[i];

    if (ans.indexOf(currChat) == -1) {
      ans += currChat;
    }
  }
  return ans;
}

console.log(getUnique(str));
