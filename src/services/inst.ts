export const getInfo = async () => {
    // console.log(process.env.INSTAGRAM_KEY)

    // const url = `https://graph.instagram.com/me?fields=id,username&access_token=${process.env.INSTAGRAM_KEY}`
    const url = `https://graph.instagram.com/me?access_token=IGQWRQZA0EzUWZABUEVGbG1CaDNxOUJwRTM2OThzSndrMzAwdkJtQjFfbHZAvOGd6REpwY0NmNjNMeXgyb0tmeEVlek5fN2luTm1JRmRwYlpwTFRDOGF0QTZAJRGtpZAFRIUmd0clppV2RaVHRWeUxpV3pxZA0dEUkpqOUkZD`

    const data = await fetch(url)
    // console.log(data)

    const info = await data.json()
    console.log(info)
}