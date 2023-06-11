import './sidebar.css'
import FeedIcon from '@mui/icons-material/Feed';
export default function Sidebar(){
    return(
    <div className="sidebar">
        <div className="SidebarrWrapper"> </div>
          <ul className="SidebarList">
        <li className="SidebarListItem">
        <FeedIcon/>
         <span className="SidebarListItemText">add projet</span>
            </li>
            </ul>  
    </div>
    )
}