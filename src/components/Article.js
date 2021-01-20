import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
    
    return (
        <>
        <div>
            <Link to={'/article/'+article.Name } >
            <h1>{ article.Title }</h1>
            
            {/* { article.Contents.map((content,key) => (
                    <p key= { key } >
                        { content }
                    </p>
            )) } */}

                    <p>
                        { article.Contents[0].substring(0,200) } more..... 
                    </p>
                    </Link>
        </div>
        </>
    );

}
export default Article;