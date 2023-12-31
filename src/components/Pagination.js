import React from 'react';
import styles from '../styles/Pagination.module.css';

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {
    let pages = []
    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
     pages.push(i)
   }


   return(


        <div className={styles.pagination}>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
//      <div>
//         <nav>
//             <ul className={styles.pagination}>
//                 {pages.map((page, index)=>{
//             return <li key={index} className={`pageItem ${activePage===page?"active":""}`}>
//                     <a 
//                     href='!#'
//                     className={styles.pageClick}
//                     onClick= {()=>{
//                     handlerPageClick(page);
//                     setCurrentPage(page)}}
//                     >
//                     {page}
//                     </a>
                
//                     </li> 
//          })
//         }
//             </ul>
//         </nav>
       
//      </div>

}

export default Pagination