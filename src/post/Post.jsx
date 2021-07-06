import "./post.css"

export default function Post(){
    return (
        <div className="post">
            <img className="postImg"
            src="https://th.bing.com/th/id/OIP.ecnFGcyJTs9OUCRNBdhcdQHaEo?pid=ImgDet&rs=1"
            alt=""
            />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Life</span>
                    <span className="postCat">Other</span>
                </div>
                <span className="postTitle">
                    Nine Arch - Ella, Sri Lanka
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
            THE NINE ARCH BRIDGE IN ELLA, SRI LANKA. Ella is has become one of the major tourist hotspots of Sri Lanka and 
            it is largely due to the epic scenery and hikes in the region such as Ella Rock and Little Adam’s Peak. However, 
            it’s the smaller attractions, 
            hidden gems and laid back vibes of the town that keep people in Ella for up to a week at a time.
            </p>
        </div>
    )
}