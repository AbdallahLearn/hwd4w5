
import './App.css'
import Navbar from './component/Navbar'
import Bootcamp from './component/Bootcamp'
import BootcampCard from './component/BootcampCard'
import Step from './component/Step'
import Footer from './component/Footer'
function App() {

  return (
    <>
      <Navbar/>

      <Bootcamp/>
      {/* //row-cols-1 row-cols-md-3 g-4 */}
      <div className="row mt-3 pb-5">
      <div className="col-lg-4 col-md-6 col-sm-12">
      <BootcampCard title={'لقاء'} subtitle={'لقاء WWDC24 Watch Party'} location= {"الرياض"} time={'يوم واحد'} date={'2024-11-21'} />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
      <BootcampCard title={'معسكر'} subtitle={'جافا سكربت'} location= {"الرياض"} time={'20 اسبوع'} date={'2025-11-21'} />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
      <BootcampCard title={'برنامج'} subtitle={' Flutter'} location= {"الرياض"} time={'10 اسابيع'} date={'2024-11-21'} />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
      <BootcampCard title={'لقاء'} subtitle={'بداية التقنية'} location= {"الرياض"} time={'يوم واحد'} date={'2020-11-21'} />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
      <BootcampCard title={'لقاء'} subtitle={'استعداد للمقابلات الوظيفية'} location= {"الرياض"} time={'يوم واحد'} date={'2022-11-21'} />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
      <BootcampCard title={'لقاء'} subtitle={'كيف تصبح ناجحا'} location= {"الرياض"} time={'يوم واحد'} date={'2023-11-01'} />
      </div>
      

      </div>
      <div className="more">
      <button className='more-btn mt-3 mb-5'>تحميل المزيد</button>
      </div>
      
      <Step/>

      <Footer/>
    </>
  )
}

export default App
