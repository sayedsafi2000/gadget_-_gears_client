import {useState,useEffect} from "react"
const useSeller = email =>{
    const [isSeller,setIsSeller]=useState(false);
    const [isSellerLoding,setIsSellerLoding] = useState(true);
    useEffect(()=>{
        if(email){
            fetch(`https://gadget-and-gears-server.vercel.app/users/seller/${email}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                setIsSeller(data.isSeller);
                setIsSellerLoding(false)
            })
        }
    },[email])
    return [isSeller,isSellerLoding]
}
export default useSeller;