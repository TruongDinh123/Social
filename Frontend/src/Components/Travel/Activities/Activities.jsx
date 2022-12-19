import React from "react";
import "../Activities/activities.scss"
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Activity = ({ tour }) => {

    return (
        <div className="mainContent">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <br />

                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a href="#home" class="nav-link active" role="tab" data-toggle="tab">Điểm check in</a>
                    </li>

                    <li class="nav-item">
                        <a href="#profile" class="nav-link" role="tab" data-toggle="tab">Nơi ăn, uống</a>
                    </li>

                    <li class="nav-item">
                        <a href="#about" class="nav-link" role="tab" data-toggle="tab">Trung tâm thương mại</a>
                    </li>

                </ul>

                <div class="activities">
                    <div role="tabpanel" class="tab-pane fade in active" id="home">Home
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="profile">Profile</div>
                    <div role="tabpanel" class="tab-pane fade" id="about">About</div>
                </div>
                <div className="activities__wrapper">
                    <li className="activities__item">
                        <img className="item__image" src="/upload/Rung.jpg" alt="" />
                        <div className="item__content">
                            <h4 className="title">1. Thung lũng tình yêu</h4>
                            <span className="rate">⭐⭐⭐</span>
                            <span className="des">Thác đẹp, rất thích các hoạt động chơi mạo hiểm tại đây. Sẽ còn quay lại và giới thiệu đến bạn bè</span>
                            <div className="favorite">
                                <AiOutlineHeart></AiOutlineHeart>
                                Lưu vào danh sách
                            </div>
                        </div>

                    </li>

                    <li className="activities__item">
                        <img className="item__image" src="/upload/Sapa.jpg" alt="" />
                        <div className="item__content">
                            <h4 className="title">2. Thiền viện trúc lâm</h4>
                            <span className="rate">⭐⭐⭐</span>
                            <span className="des">Thác đẹp, rất thích các hoạt động chơi mạo hiểm tại đây. Sẽ còn quay lại và giới thiệu đến bạn bè</span>
                        </div>
                    </li>

                    <li className="activities__item">
                        <img className="item__image" src="/upload/AnGiang.jpg" alt="" />
                        <div className="item__content">
                            <h4 className="title">2. Đồi chè cầu đất</h4>
                            <span className="rate">⭐⭐⭐</span>
                            <span className="des">Thác đẹp, rất thích các hoạt động chơi mạo hiểm tại đây. Sẽ còn quay lại và giới thiệu đến bạn bè</span>
                        </div>
                    </li>



                </div>
            </div>
        </div>

    );
};

export default Activity;
