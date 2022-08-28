import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import Navigation from "../Navigation/Navigation"

const Header = () => {
    const { site, menu } = useMenuQuery()
    const render_template_header = 
        <header>
            <div class="top-header">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <form action="/" method="GET" role="form">
                                <div class="main-input">
                                    <i class="fa fa-search"></i> 
                                </div>
                            </form>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div class="top-social"><a href="https://facebook.com/hocwordpressdotvn" target="_blank" rel="noreferrer"><i class="fa fa-facebook"></i></a> <a href="https://twitter.com/huykira" target="_blank" rel="noreferrer"><i class="fa fa-twitter"></i></a> <a href="https://instagram.com/huykira" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a> <a href="https://youtube.com/huykira" target="_blank" rel="noreferrer"><i class="fa fa-youtube-play"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-header">
                <div class="container">
                    <div class="logo">
                        <Link to="/" title="logo nha">
                            <img src="https://hocwordpress.vn/wp-content/uploads/2020/03/hocwordpress.png" alt={site.siteMetadata.title} />
                        </Link>
                        <h1>Học Wordpress từ a đến z</h1>
                    </div>
                </div>
            </div>
            <div class="main-menu">
                <div class="container">
                    <div class="content-menu">
                        <Navigation menu={menu.menuItems.nodes} />
                    </div>
                </div>
            </div>
        </header>
    // render template header
    return (
        render_template_header
    )
}

export default Header