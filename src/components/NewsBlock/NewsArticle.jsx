// import React, {useState} from "react";
// import { News, NewsTitle, NewsDesc, NewsSource, NewsText } from "./News.styled";
// import Pagination from '@mui/material/Pagination';
// import StyledEngineProvider from '@mui/material/StyledEngineProvider';

// function NewsArticle({ data }) {
// const [page, setPage] = useState();
//   const handleChange = (event) => {
//     setPage(data.page);
//     };
    
//     return (
//         <StyledEngineProvider>
            
//       <News>
//           <NewsTitle >{data.title}</NewsTitle>
//           <NewsSource>
//               <a href={data.url} target="_blank" rel="noreferrer noopener">{data.source.name}</a>
//           </NewsSource>
//           <NewsText>
//                     <img src={data.urlToImage} alt={data.title} width="300px" height="130px" />
//                     <div>
//                         <NewsDesc>{data.description}</NewsDesc>
//                     </div>
//           </NewsText>
//          {page > 0 && (
 
//             <Pagination setPage={setPage} page={page} color="success"
//             sx={{ color: "#24CCA7", width: "100%", marginTop: "30px", alignSelf: "center" }} onChange={handleChange} />
  
//         )}
//             </News>
//             </StyledEngineProvider>
//   );
// }

// export default NewsArticle;