export function getUserInfo() {
    let name = ''
    let email = ''
    
    const userInfoStringified = localStorage.getItem('financeAppUserInfo')
    if (!!userInfoStringified) {
        const userInfo = JSON.parse(userInfoStringified)
        name = userInfo.name
        email = userInfo.email
    }


    return { name, email }
}