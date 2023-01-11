import React, { useContext, useState } from 'react'
import ReactPaginate from 'react-paginate'
import MasterContext from './MasterContext';
import UserProducts from './UserProducts';
export default function PaginatedItems({itemsPerPage}) {
  let {productList} = useContext(MasterContext);
//   let items = [{
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'A',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'B',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'C',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'D',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'E',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'F',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'G',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'H',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'I',
//     price:500,
//   },

//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'J',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'K',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'L',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'M',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'N',
//     price:500,
//   },

//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'O',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'P',
//     price:500,
//   },
//   {
//     image:'https://images.meesho.com/images/products/161867279/ibmgq_512.jpg',
//     name:'Q',
//     price:500,
//   },

  
// ]
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productList.length / itemsPerPage);

  
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <UserProducts currentItems={currentItems}/>
      <ReactPaginate
      className='pagination'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}

        breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'active'}
      />
    </>
  );
}
