
const getCookie = name => {

    const cookie = document.cookie
    console.log(cookie);
    const allCookie = cookie.split('; ')
    let findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        "country=US"
        const cValue = findCookie.split('=');
        return cValue[1];

    }
}
getCookie()