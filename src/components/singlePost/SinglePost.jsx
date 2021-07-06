import "./singlePost.css"

export default function SinglePost(){
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg"
                src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Travel-Images-For-Desktop.jpg"
                alt=""
                />

                <h1 className="singlePostTitle">
                Take only memories, leave only footprints
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Madhushani</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>

                <p className="singlePostDesc">
                The exhaustion after a long in the saddle appeals to us but travelling by bicycle is not for everyone. 
                Nothing compares to the satisfaction of knowing that your travel experiences are powered by your own body. 
                Even without the claustrophobia, we would still be riding our bikes! Luckily for me, my partner Lars has comprehensive knowledge and, 
                shall we say, a bit of a love affair with bicycles. My bicycle experience up until now has been limited to a two mile daily commute and 
                the occasional weekend ride in the British countryside. It’s safe to say that I am jumping in at the deep end.
                So, even if you don’t suffer from claustrophobia or some other travel anxiety, would you consider ditching your backpack for a 
                pair of panniers? We’ve only been touring for a short while, but already we have experienced some of the most amazing 
                adventures and learnt some valuable lessons. We’ve compiled our stories and tips below.
                </p>


            </div>
        </div>
    )
}