import './App.css';
import Navbar from './component/Navbar';
import Card from './component/Card';
import Choose from './component/Choose.jsx';
import Button from './component/Button';
import Registration from './component/Registration';
import Footer from './component/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Choose Programs = "المعسكرات والبرامج" old = "الكبار" young ="النائشون"/>
      <div className='all'>
      <Card type="لقاء" title="فعالية WWDC24 Watch Party" locations="الرياض" days="يوم واحد" date="يبدأ في 2024/06/10" details ="التفاصيل"/>
      <Card type="معسكر" title="هندسة الحوسبة السحابية المتقدمة AWS" locations="الرياض" days="4 اسابيع" date="يبدأ في 2024/06/23" details ="التفاصيل" />
      <Card type="برنامج" title="إدارة خدمات تقنية المعلومات (ITIL)" locations="الرياض" days="اسبوع واحد" date="يبدأ في 2024/06/23" details ="التفاصيل" />
      <Card type="برنامج" title="أساسيات علوم الشبكات NETWORK+" locations="الرياض" days="اسبوعان" date="يبدأ في 2023/10/15" details ="مغلق" />
      <Card type="برنامج" title="البنية المؤسسية بمنهجية وإطار TOGAF" locations="الرياض" days="اسبوع واحد" date=" يبدأ في 2023/10/15" details ="مغلق" />
      <Card type="برنامج" title="أمن وحماية المعلومات في osi model" locations="الرياض" days="اسبوع واحد" date="يبدأ في 2023/10/15" details ="مغلق" />
      </div>
    <Button/>
    <Registration title = "خطوات الـتـسـجـيـل"  join = "الانضمام إلى المنصة" registration = "الـتـسـجـيـل في المعسكر او البرامج" message="انتظار رسالة القبول"/>
    <Footer/>
    </>
  );
}

export default App
