import React from 'react' ;
import Article from '../components/Article';

const ArticlesList = ({Articles}) => (
    
    <>
    <div className="article-list">
        {Articles.map((data, key) => (
            <div>
            <Article  article = {data} />
            <hr />
            </div>
        ))}
        </div>
    </>
)

export default ArticlesList ;