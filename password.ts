const seeds: string[] = [
  'A','B','C',
  'a','b','c',
  '1','2','3',
  '!','#','@',
]

const password_length: number = Number(process.argv[2])
let password: string = ''
let randam

for (let i:number=0; i<password_length; i++){
  let randam = Math.floor(Math.random() * seeds.length) 
  password += seeds[randam]
}

console.log(password)