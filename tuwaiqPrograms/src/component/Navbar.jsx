import logoT from "./logo-tu.png"
function Navbar() {
  return (
    <>
    <div className="container-">
        <nav>
            <div dir="rtl" className="navbar-left">
                <a href="#">تسجيل الدخول</a>
                <a href="#">English</a>
            </div>
            <div className="navbar-right">
                <ul className="nav-list">
                    <li><a href="Tests.html">مركز الاختبارات</a></li>
                    <li><a href="#">الاكاديميات التابعة</a></li>
                    <li><a href="about.html">حول الاكاديمية</a></li>
                    <li><a href="#">المعسكرات والبرامج</a></li>
                    <li><a href="">الرئيسية</a></li>
                    <li><a href="#"><img src={logoT} className="logo"></img></a></li>
                </ul>
            </div>
        </nav>
        <header className="TitleStart">
            <h1 className="Title-Start">اكاديمية طويق</h1>
        </header>
    </div>
    </>
  )
}

export default Navbar