const Posts = (props) => {
    return (
        <div className="post mx-2">
            <figure className="img-post"></figure>
            <h5>{props.subtitle}</h5>
            <h3>{props.title}</h3>
            <p className="mt-1">{props.children}</p>
            <div className="flex pt-2">
                <figure className="img-profile"></figure>
                <div className="desc-profife ml-2">
                    <h6 className="color-blue">{props.author}</h6>
                    <p>
                        {props.date}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Posts;