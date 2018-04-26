


export function  getRedirectPath({type, avatar}){
    //根据用户信息，跳转
    //user.type /boss           /genius 
    //user.avatar /bossinfo    /geniusinfo
    let url = (type === 'boss')?'/boss':'/genius'
    if (!avatar) {
        url += 'info'
    }
    console.log(url)
    return url
}