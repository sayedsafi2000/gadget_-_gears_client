import { useState, useEffect } from "react";
const useToken = email => {
    const [token, setToken] = useState("");
    console.log(email)
    useEffect(() => {
        if (email) {
            fetch(`https://gadget-and-gears-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem("accessToken", data.accessToken)
                        setToken(data.accessToken)
                    }
                });
        }
    }, [email]);
    return [token];
}
export default useToken;