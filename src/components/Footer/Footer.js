import React from "react"
import { Wrapper } from "./Footer.styles"

const Footer = () => (
  <Wrapper>
     <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div class="content-box-footer">
                    <h3>Học Wordpress từ a đến z</h3>
                    <div class="logo">logo</div>
                    <p>Chuyên trang hướng dẫn wordpress từ a đến z. Hướng dẫn wordpress cơ bản, hướng dẫn lập trình theme. Chia sẻ khóa học wordpress miễn phí và có phí.</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div class="content-box-footer">
                    <h3>Chuyên mục 1</h3>
                    <ul class="list-cat">
                        <li><i class="fa fa-angle-right"></i> here1</li>
                    </ul>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div class="content-box-footer">
                    <h3>Chuyên mục 2</h3>
                    <ul class="list-cat">
                        <li><i class="fa fa-angle-right"></i> here1</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>Copyright © 2020 HOCWORDPRESS All Rights Reserved. Design by Huy Kira</p>
    </div>
    <div class="back-to-top-footer">
        
    </div>
  </Wrapper>
)

export default Footer