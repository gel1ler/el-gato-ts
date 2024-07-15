'use server'

export const getInfo = async () => {
  console.log(process.env.INSTAGRAM_KEY)
  // const url = `https://graph.instagram.com/me?fields=id,username&access_token=${process.env.INSTAGRAM_KEY}`
  const url = `https://graph.instagram.com/me&access_token=IGQWRPUm9MLU5JUk0za2lsR04wd0hBQmg3YW9rcWJ4dU9pb29fWTJYdXV3RXJNOHFBTGhUQXlUa3JNRlZAoX2FJMzlqY2F5ZAFFPS3h6M0lyX3BEZAzVMNDJzT2dKcEx6ZAUVKY3dVSThnVFhXT2lqanpRRDBsZA0lrcm8ZD`
  const data = await fetch(url)
  const info = await data.json()
  console.log(info)
}