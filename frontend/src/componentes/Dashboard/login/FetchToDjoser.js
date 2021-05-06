import axios from "axios"
import Cookies from "js-cookie";

const fetchToDjoser = data => {
    const url = "/auth/token/login"
    const cookie = Cookies.get("csrftoken")
    const confi = {
        headers: {'X-CSRFToken': cookie}
    }
    return axios.post(url, data, confi)
}

export default fetchToDjoser