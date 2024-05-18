import React from 'react'
import Card from '../../UI/Card/Card';
import '../../UI/Card/Card.css'
import './SearchContent.css'
function SearchContent(props) {
  console.log(props.books);
  return (
    <div className='content-wrapper'>
        <div className="search__list-products">
        {props.books != undefined && props.books.length!==0 //If bookdata != undefined -> show books. else output in console -> error in parsing books
          ? props.books.map((prod) => <Card bookdata={prod} />) 
          : <p>Nothing found for the query "{props.searchInput}"</p>} 
      </div>
    </div>
  )
}

export default SearchContent;