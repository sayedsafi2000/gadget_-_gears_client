import { useState, useEffect } from "react";
const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading,setIsBuyerLoading]=useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://gadget-and-gears-server.vercel.app/users/buyer/${email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false)
                });
        }
    }, [email]);
    return [isBuyer,isBuyerLoading];
}
export default useBuyer;