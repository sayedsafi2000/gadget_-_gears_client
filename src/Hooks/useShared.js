import { useEffect } from "react";
import { useState } from "react";

 const useShared = (email) => {
  const [isShared, setIsShared] = useState(true);
  const [isSharedLoading, setIsSharedLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://gadget-and-gears-server.vercel.app/users/shared/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
          setIsShared(data.isShared);
          setIsSharedLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [email]);
  return [isShared, isSharedLoading];
};
export default useShared;