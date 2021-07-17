let isverified = true
let isloggedin = true
let haspaymenttoken = true
let isguest = true

if(isverified && isloggedin ){
    console.log('greeting message to user')
    console.log('grant acess')
}
else if(isverified || haspaymenttoken ){
    console.log('allow free previews')
}