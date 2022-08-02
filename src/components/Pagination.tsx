import React from 'react';

interface Iprops {
    postsPerPage: number;
    totalPosts: number
    paginate: (pageNumber: number) => void
}

const Pagination = (props:Iprops) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props?.totalPosts / props?.postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
    <div>
      <ul>
        {pageNumbers?.map(number => (
          <li key={number}>
            <a onClick={() => props.paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default React.memo(Pagination);