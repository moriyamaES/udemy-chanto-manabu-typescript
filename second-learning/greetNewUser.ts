function greetNewUser(func: (name: string) => string) {
  console.log(func("ご新規"));
}

function hello(name: string) {
  return `こんにちは！${name}さん！！`;
}

function goodMorning(name: string) {
  return `おはようございます！${name}さん！！`;
}

// こんにちは！ご新規さん!!
greetNewUser(hello);

// おはようございます！ご新規さん!!
greetNewUser(goodMorning);