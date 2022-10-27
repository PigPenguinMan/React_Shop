// Context에 대한 내용은 공식홈페이지 고급안내서 -Context
// Context를 사용해서 , value값도 현재 파일에서 지정하고 내보내기 

import { useState } from "react";
import { createContext } from "react"
// 내보낸 DataContext에 value에 넣어줘서 사용 
const DataContext = createContext();

// 미리 Provider를 작성하여 value값을 가진 컴포넌트를 내보냄 
// 컴포넌트이기때문에 함수형 컴포넌트 형식으로 작성 (return이 있는 컴포넌트가 아니라 const만 있다 ) 
const DataProvider = ({children}) =>{
    // 사용할 값들을 useState를 통해 값을 들고옴 
    // 유저 정보 {name :"이재용", profile:사진 ,likelist :[]} 
    const [user,setUser] = useState({name :"희성", profile:null ,likelist :[]});
    
    // 상품 정보 : 상품배열로 들어감  
    const [productList ,setProductList] = useState([
        {
            productId : 1,
            productName : "책",
            productDetail : "리액트를 알려주는 책입니다",
            productColor : ["white","black"],
            productPicture : "1.jpg"
        },
        {
            productId : 2,
            productName : "책2",
            productDetail : "리액트를 알려주는 책입니다",
            productColor : ["black","dimgray"],
            productPicture : "1.jpg"
        }
    ])
    // 댓글 정보 

    // 사용할 value 값을 state와 action으로 분리해서 넣어둠 
    const value = { 
        state : {user, productList},
        action : {setUser , setProductList},
    }
    // DataProvider를 사용할때 DataContext.Provider를 사용할수 있도록 함 
    // 이때 children은 Provider를 쓸때 데이터를 공용으로 쓰는 컴포넌트들 
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

// Consumer 작성
// DataContext의 값을 가져와서 DataConsumer으로 사용 
const {Consumer : DataCosumer } = DataContext;

// 컴포넌트로 사용하기위해 export > .Provider 대신 사용할 컴포넌트
export {DataCosumer, DataProvider}
// 값을 사용하기 위해 가져오는 컨텍스트 export > 각 컴포넌트에서 useContext로 가져올 것 
export default DataContext ; 
