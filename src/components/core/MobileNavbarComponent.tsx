import "../../assets/navbar.css";
import { ChatBubbleOutline, PersonOutlined, HomeOutlined, PhotoCameraOutlined, SettingsOutlined } from '@mui/icons-material';

export const MobileNavbarComponent = ({ }): Promise<any> | any => {
    var list = document.querySelectorAll('.list');
    function activeLink() {
        list.forEach((item: any) => {
            item.classList.remove('active');
        });
        
    };
    
    list.forEach((item: any) => {
        item.addEventListener("click", activeLink);
    });

    return (
        <>
            <div className="navigation">
                <ul>
                    <li className="list active">
                        <a href="#">
                            <span className="icon">
                                <HomeOutlined></HomeOutlined>
                            </span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <PersonOutlined></PersonOutlined>
                            </span>
                            <span className="text">Profile</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                               <ChatBubbleOutline></ChatBubbleOutline>
                            </span>
                            <span className="text">Messages</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <PhotoCameraOutlined></PhotoCameraOutlined>
                            </span>
                            <span className="text">Photos</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <SettingsOutlined></SettingsOutlined>
                            </span>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </>
    )
};