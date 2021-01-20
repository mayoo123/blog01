import  React from 'react'
import ArticleContent from '../components/article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlePage = ({ match }) => {
    
    const name = match.params.name;
    const article = ArticleContent.find(article => article.Name === name );
    if(!article)
        return ( <div className = "page-content"><h1>No Articles Found</h1></div>);

    const otherArticles = ArticleContent.filter(article => article.Name !== name );

    return (
        <>
        <div className = "page-content article-page">
        <div className= "article-content" >
            <h1>{article.Title}</h1>
            { article.Contents.map((content) => (
                <p>
                    { content }
                </p>
            ))}
            <p>
            </p>
        </div>
        </div>
        <div className= "other-article-panel" > 
            <h1>Other Articles</h1>
            { <ArticlesList Articles = { otherArticles } />  }
        </div>
        </>
    );
}

export default ArticlePage;