import { exit } from "process"

const user_name: string = 'moriyama'
const passwoerd: string = '12345'

if (!(user_name === 'moriyama' && passwoerd === '12345')){
  console.log('ログインに失敗しました')
  exit(1)
}

console.log('ログインしました')
exit(0)