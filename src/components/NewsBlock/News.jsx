// import React, { useContext } from "react";
// import { NewsContext } from "./NewsBlock";
// import NewsArticle from "./NewsArticle";
// import { AllNews, NewsHeader, Fire, FireDiv } from "./News.styled";
 
// function News(props) {
//   const { data } = useContext(NewsContext);
//   console.log(data);

//   return (
//       <>
          
//           <AllNews>
//               <NewsHeader>
//                 <FireDiv>
//                 <Fire>🔥 </Fire>
//                 Fresh Business Headlines
//                     <Fire> 💸</Fire>
//                     </FireDiv>
//             </NewsHeader>
//         {data
//           ? data.articles.map((news) => (
//               <NewsArticle data={news} key={news.url} />
//             ))
//           : "Loading"}
//       </AllNews>
//     </>
//   );
// }

// export default News;