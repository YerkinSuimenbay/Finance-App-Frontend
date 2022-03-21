export function getUserInfo() {
    let name = ''
    let email = ''
    let settings = {
        app_language: '',
        default_account: '',
        default_period: '',
    }
    
    const userInfoStringified = localStorage.getItem('financeAppUserInfo')
    if (!!userInfoStringified) {
        const userInfo = JSON.parse(userInfoStringified)
        name = userInfo.name
        email = userInfo.email
        settings = userInfo.settings
    }


    return { name, email, settings }
}