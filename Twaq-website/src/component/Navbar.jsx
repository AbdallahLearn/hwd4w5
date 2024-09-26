import React from 'react'

function Navbar() {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                        {/* <div className="text"> */}
                        <img width="15%" src="https://web.archive.org/web/20240814102443im_/https://cdn.tuwaiq.edu.sa/landing/images/logo/logo-h-white.png" alt="" />
                        
                            {/* <h1>أكاديمية طويق</h1> */}
                        {/* </div> */}
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">الرئيسية</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">المعسكرات والبرامج</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">حول الاكاديمية</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ">الأكاديمية التابعة</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link "> مركز الأختبارات</a>
                            </li>
                            <div className="btn">
                                <li class="nav-item">
                                    <a class="nav-link "> تسجيل الدخول</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ">English</a>
                                </li>
                            </div>
                            

                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
            <div className='big-title'>
                <h3>أكاديمية طويق</h3>
            </div>
            
        </>
    )
}

export default Navbar
