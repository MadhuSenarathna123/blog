import "./write.css"

export default function Write(){
    return (
        <div className="write">
            <img className="writeImg"
            src="https://inform.tmforum.org/wp-content/uploads/2015/09/kandy_srilanka_shutterstock_136119599.jpg"
            alt=""
            />
           <form className="writeForm">
               <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                   <input type="file" id="fileInput" style={{display:"none"}} />
                   <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
               </div>

               <div className="writeFormGroup">
                   <textarea placeholder="Share your Experience" type="text" className="writeInput writeText">
                   </textarea>
               </div>
               <button className="writeSubmit">Publish</button>
           </form>
        </div>
    )
}