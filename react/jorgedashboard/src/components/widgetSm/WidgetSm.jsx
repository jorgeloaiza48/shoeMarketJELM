
import "./widgetSm.css"
import {Visibility} from '@mui/icons-material';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItemc">
                <img src="photo-1659221789590.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ana Keller</span>
                    <span className="widgetSmUserTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
            <li className="widgetSmListItemc">
                <img src="photo-1659221789590.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ana Keller</span>
                    <span className="widgetSmUserTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
            <li className="widgetSmListItemc">
                <img src="photo-1659221789590.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ana Keller</span>
                    <span className="widgetSmUserTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
