import Filter from './Filter/Filter';
import './Sidebar.css';

 function Sidebar() {
  return (
    <>
    <section className='sidebar'>
        <div className='logo-container'>
         <h1>📈</h1>
        </div>
        <Filter />
    </section>
    </>
  )
}


export default Sidebar;