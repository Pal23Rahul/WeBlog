import Link from 'next/link';
import { API } from '../../config';
import renderHtml from 'react-render-html';
import moment from 'moment';


const Card = ({ blog }) => {

    const showBlogCategories = blog =>

        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary me-1 ms-1 mt-3 mb-3">{c.name}</a>
            </Link>
        ))


    const showBlogTags = blog => (

        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary me-1 ms-1 mt-3 mb-3">{t.name}</a>
            </Link>
        ))
    )


    return (<div className="lead pb-4">
        <header>
            <Link href={`/blogs/${blog.slug}`}>
                <a><h2 className=" pt-3 pb-3 fw-bold">{blog.title}</h2></a>
            </Link>
        </header>
        <section>
            <p className="mark ms-1 pt-2 pb-2">
                Written by <Link href={`/profile/${blog.postedBy.username}`}>
                    <a>{` ${blog.postedBy.username}`}
                    </a>
                </Link> | Published {moment(blog.updatedAt).fromNow()}
            </p>
        </section>
        <section>
            {showBlogCategories(blog)}
            {showBlogTags(blog)}
            <br />
            <br/>
        </section>
        <div className="row">
            <div className="col-md-4">
                <section>
                    <img
                        className="img img-fluid"
                        style={{ maxHeight: 'auto', width: '100%' }}
                        src={`${API}/blog/photo/${blog.slug}`}
                        alt={blog.title}>

                    </img>
                </section>
            </div>
            <div className="col-md-8">
                <section>
                    <div className="pb-3">
                        {renderHtml(blog.excerpt)}
                    </div>
                    <Link href={`/blogs/${blog.slug}`}>
                        <a className="btn btn-primary pt-2">Read More</a>
                    </Link>
                </section>
            </div>
        </div>
    </div>);

}

export default Card;