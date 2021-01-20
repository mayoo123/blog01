import  React from 'react'
import ArticlesList from '../components/ArticlesList';
import ArticleContent from '../components/article-content';

const ArticleListPage = () => {
        return (
        <>
        <h1>Article List....</h1>
        <div className="page-content article-list-page">
            <ArticlesList Articles = {ArticleContent} />
        </div>
        </>
        );   
    }

export default ArticleListPage;