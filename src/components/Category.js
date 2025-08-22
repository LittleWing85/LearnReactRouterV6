import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../features/categories/categoriesSlice";
import { selectArticles } from "../features/articles/articlesSlice";
import { Link, useParams } from "react-router-dom";

export default function Category() {
    const categories = useSelector(selectCategories);
    const articles = useSelector(selectArticles);

    const { categoryname } = useParams();

    return (
        <div>
            <h2>Articles Related to {categoryname}</h2>
            <ul>
                {categories[categoryname].map((articleSlug) => (
                    <li>
                        <Link to={`/articles/${articleSlug}`}>
                            {articles[articleSlug].title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
