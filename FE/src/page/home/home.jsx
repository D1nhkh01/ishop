import { useState } from 'react'

function Home() {
    const [count, setCount] = useState(0)

    return (
    <div>
        <Header/>
        <div class="main-layout">
            <div class="loader_bg">
                <div class="loader"><img src="images/loading.gif" alt="#" /></div>
            </div>
            <header>

                <div class="header">
                    <div class="head_top">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="top-box">
                                        <ul class="sociel_link">
                                            <li> <a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="top-box">
                                        <p>long established fact that a reader will be </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div class="full">
                                    <div class="center-desk">
                                        <div class="logo"> <a href="index.html"><img src="images/logo.jpg" alt="logo" /></a> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                                <div class="menu-area">
                                    <div class="limit-box">
                                        <nav class="main-menu">
                                            <ul class="menu-area-main">
                                                <li class="active"> <a href="index.html">Home</a> </li>
                                                <li> <a href="about.html">About</a> </li>
                                                <li> <a href="product.html">product</a> </li>
                                                <li> <a href="blog.html"> Blog</a> </li>
                                                <li> <a href="contact.html">Contact</a> </li>
                                                <li class="mean-last"> <a href="#contact">signup</a> </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                <li><a class="buy" href="#">Login</a></li>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

            <section class="slider_section">
                <div id="main_slider" class="carousel slide banner-main" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            {/* <img class="first-slide" src="images/banner2.jpg" alt="First slide"> */}
                            <div class="container">
                                <div class="carousel-caption relative">
                                    <h1>Our <strong class="black_bold">Latest </strong>
                                        <strong class="yellow_bold">Product </strong></h1>
                                    <p>It is a long established fact that a r
                                        eader will be distracted by the readable content of a page </p>
                                    <a href="#">see more Products</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            {/* <img class="second-slide" src="images/banner2.jpg" alt="Second slide"> */}
                            <div class="container">
                                <div class="carousel-caption relative">
                                    <h1>Our <strong class="black_bold">Latest </strong>
                                        <strong class="yellow_bold">Product </strong></h1>
                                    <p>It is a long established fact that a r
                                        eader will be distracted by the readable content of a page </p>
                                    <a href="#">see more Products</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            {/* <img class="third-slide" src="images/banner2.jpg" alt="Third slide"> */}
                            <div class="container">
                                <div class="carousel-caption relative">
                                    <h1>Our  <strong class="black_bold">Latest </strong>
                                        <strong class="yellow_bold">Product </strong></h1>
                                    <p>It is a long established fact that a r
                                        eader will be distracted by the readable content of a page </p>
                                    <a href="#">see more Products</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                        <i class='fa fa-angle-right'></i>
                    </a>
                    <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                        <i class='fa fa-angle-left'></i>
                    </a>

                </div>

            </section>


            <div class="whyschose">
                <div class="container">

                    <div class="row">
                        <div class="col-md-7 offset-md-3">
                            <div class="title">
                                <h2>Why <strong class="black">choose us</strong></h2>
                                <span>Fastest repair service with best price!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="choose_bg">
                <div class="container">
                    <div class="white_bg">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="for_box">
                                    <i><img src="icon/1.png" /></i>
                                    <h3>Data recovery</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="for_box">
                                    <i><img src="icon/2.png" /></i>
                                    <h3>Computer repair</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="for_box">
                                    <i><img src="icon/3.png" /></i>
                                    <h3>Mobile service</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="for_box">
                                    <i><img src="icon/4.png" /></i>
                                    <h3>Network solutions</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <a class="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="service">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <div class="title">
                                <h2>Service <strong class="black">Process</strong></h2>
                                <span>Easy and effective way to get your device repair</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                <i><img src="icon/service1.png" /></i>
                                <h3>Fast service</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                <i><img src="icon/service2.png" /></i>
                                <h3>Secure payments</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                <i><img src="icon/service3.png" /></i>
                                <h3>Expert team</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                <i><img src="icon/service4.png" /></i>
                                <h3>Affordable services</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                <i><img src="icon/service5.png" /></i>
                                <h3>90 Days warranty</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                <i><img src="icon/service6.png" /></i>
                                <h3>Award winning</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">
                                <h2>our <strong class="black">products</strong></h2>
                                <span>We package the products with best services to make you a happy customer.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-bg">
                <div class="product-bg-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src="icon/p1.png" /></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src="icon/p2.png" /></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src="icon/p3.png" /></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src="icon/p4.png" /></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src="icon/p5.png" /></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src="icon/p2.png" /></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src="icon/p6.png" /></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src="icon/p7.png" /></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
                <div class="Clients_bg_white">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="title">
                                    <h3>What Clients Say?</h3>
                                </div>
                            </div>
                        </div>
                        <div id="client_slider" class="carousel slide banner_Client" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#client_slider" data-slide-to="0" class="active"></li>
                                <li data-target="#client_slider" data-slide-to="1"></li>
                                <li data-target="#client_slider" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="container">
                                        <div class="carousel-caption text-bg">
                                            <div class="img_bg">
                                                <i><img src="images/lllll.png" /><span>Jone Due<strong class="date">12/02/2019</strong></span></i>

                                            </div>

                                            <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.
                                                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>

                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="container">
                                        <div class="carousel-caption text-bg">
                                            <div class="img_bg">
                                                <i><img src="images/lllll.png" /><span>Jone Due<strong class="date">12/02/2019</strong></span></i>

                                            </div>
                                            <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.
                                                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>

                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="container">
                                        <div class="carousel-caption text-bg">
                                            <div class="img_bg">
                                                <i><img src="images/lllll.png" /><span>Jone Due<strong class="date">12/02/2019</strong></span></i>

                                            </div>
                                            <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.
                                                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="container">
                    <div class="yellow_bg">
                        <div class="row">
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                <div class="yellow-box">
                                    <h3>REQUEST A FREE QUOTE<i><img src="icon/calll.png" /></i></h3>

                                    <p>Get answers and advice from people you want it from.</p>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                <div class="yellow-box">
                                    <a href="#">Get  Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container-fluid padi">
                <div class="map">
                    <img src="images/mapimg.jpg" alt="img" />
                </div>
            </div>





            <footr>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 offset-md-3">
                                <ul class="sociel">
                                    <li> <a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                    <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                    <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>conatct us</h3>
                                    <span>123 Second Street Fifth Avenue,
                                        Manhattan, New York
                                        +987 654 3210</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>ADDITIONAL LINKS</h3>
                                    <ul class="lik">
                                        <li> <a href="#">About us</a></li>
                                        <li> <a href="#">Terms and conditions</a></li>
                                        <li> <a href="#">Privacy policy</a></li>
                                        <li> <a href="#">News</a></li>
                                        <li> <a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>service</h3>
                                    <ul class="lik">
                                        <li> <a href="#"> Data recovery</a></li>
                                        <li> <a href="#">Computer repair</a></li>
                                        <li> <a href="#">Mobile service</a></li>
                                        <li> <a href="#">Network solutions</a></li>
                                        <li> <a href="#">Technical support</a></li>
                                        /</ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>About lighten</h3>
                                    <span>Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet ultrices, </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free html Templates</a> Distributed By <a href="https://themewagon.com">ThemeWagon </a></p>
                    </div>

                </div>
            </footr>

            <script src="js/jquery.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.bundle.min.js"></script>
            <script src="js/jquery-3.0.0.min.js"></script>
            <script src="js/plugin.js"></script>

            <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
            <script src="js/custom.js"></script>
            <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>

            <div />
        </div>
        </div>
    )
}

export default Home
