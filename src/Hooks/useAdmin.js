import { useState, useEffect } from "react";
const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setisAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://gadget-and-gears-server.vercel.app/users/admin/${email}
            `)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setIsAdmin(data.isAdmin)
                    setisAdminLoading(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading];
}
export default useAdmin;