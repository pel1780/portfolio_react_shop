import { Link } from "react-router-dom";
import { Info } from "../data/Info";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="inner">
                <ul className="foot_left">
                    <li>상호 : {Info.company}</li>
                    <li>대표자 : {Info.ceo}</li>
                    <li>사업자등록번호 : {Info.num}</li>
                    <li>주소 : {Info.address}</li>
                    <li><a href={`mailto:${Info.csEmail}`}>고객문의 : {Info.csEmail}</a></li>
                    <li><a href={`mailto:${Info.helpEmail}`}>기타문의 : {Info.helpEmail}</a></li>
                </ul>
                <ul className="foot_right">
                    <li><a href={`tel:${Info.csNum}`}>고객문의 : {Info.csNum}</a></li>
                    <li>{Info.hours}</li>
                    <li>{Info.an}</li>
                </ul>
            </div>
            <div className="copy">
                &copy; ㈜다하우스 All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;