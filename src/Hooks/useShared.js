// import { useState, useEffect } from "react";
// const useShared = email => {
//     const [isShared, setIsShared] = useState(false);
//     const [isSharedLoading, setIsSharedLoading] = useState(true);
//     useEffect(() => {
//         if (email) {
//             fetch(`http://localhost:5000/users/shared/${email}`,{
//                 headers:{
//                     authorization: `bearer ${localStorage.getItem("accessToken")}`
//                 }
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data)
//                     setIsShared(data.isShared)
//                     setIsSharedLoading(false)
//                 })
//         }
//     }, [email])
//     return [isShared, isSharedLoading];
// }
// export default useShared;

import { useEffect } from "react";
import { useState } from "react";

 const useShared = (email) => {
  const [isShared, setIsShared] = useState(true);
  const [isSharedLoading, setIsSharedLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/shared/${email}`, {
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