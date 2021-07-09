import "./sidebar.css"

export default function Sidebar(){
    return (
        <div className="sidebar">
         <div className="sidebarItem">
             <span className="sidebarTitle">About Me</span>
             <img 
             src="https://qtxasset.com/2016-12/ethical traveler.jpg?yJ__1ihm0Wy4nFf_h.gBO_jwX4G4Ntli"
             alt=""
             />
             <p>
             Video provides a powerful way to help you prove your point. When you click Online Video, 
             you can paste in the embed code for the video you want to add. 
              </p>
         </div>

         <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Environment</li>
                <li className="sidebarListItem">Classic</li>
                <li className="sidebarListItem">Beaches</li>
                <li className="sidebarListItem">Waterfalls</li>
                <li className="sidebarListItem">Hotels</li>
                <li className="sidebarListItem">Other</li>
            </ul>
         </div>

         <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
         </div>
           
        </div>
    )
}