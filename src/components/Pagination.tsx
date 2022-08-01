import React from 'react';

interface Iprops {
    postsPerPage: number;
    totalPosts: number
    paginate: (pageNumber: number) => void
}

const Pagination = (props:Iprops) => {
    console.log(props)
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props?.totalPosts / props?.postsPerPage); i++) {
    pageNumbers.push(i);
  }
    return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => props.paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    );
};

export default Pagination;