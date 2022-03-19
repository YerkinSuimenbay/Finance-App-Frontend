// import React from 'react'

// export const Sidebar = () => {
//     const [sidebarVisible, setSidebarVisible] = useState(false)

//     return (
//         <div 
//                     className={sidebarVisible ? 'background sidebar show' : `background sidebar`} 
//                     onClick={() => setSidebarVisible(false)}
//                 >
//                     <div className="sidebar__center">
//                         <div className="sidebar__top">
//                             {/* <img src="" alt="" /> */}
//                             <Link to='/' className='sidebar__title'>YFinance App</Link>
//                         </div>
//                         <div className='sidebar__middle'>
//                             <ul className='sidebar__middle__links'>
//                                 <li>
//                                     <NavLink 
//                                         to='/' 
//                                         // className={({ isActive }) => isActive ? "activeeee": ''}  // BY DEFAULT ACTIVE CLASS IS ASSIGNED 
//                                     >
//                                     <icons.GENERAL_ICONS.MdOutlineAddBox />
//                                     <span>Home</span>
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to='/accounts'>
//                                         <icons.GENERAL_ICONS.MdOutlineAddBox />
//                                         <span>Accounts</span>    
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to='/categories'>
//                                         <icons.GENERAL_ICONS.MdOutlineAddBox />
//                                         <span>Categories</span>    
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink 
//                                         to={`/transactions?type=${EDefaultTransactionQueries.type}&grouped=${EDefaultTransactionQueries.grouped}&period=${EDefaultTransactionQueries.period}`}>
//                                             <icons.GENERAL_ICONS.MdOutlineAddBox />
//                                             <span>Transactions</span>    
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     {/* <NavLink to={`/${name}`}>My Profile</NavLink> */}
//                                     <NavLink to={`/profile`}>
//                                         <icons.GENERAL_ICONS.MdOutlineAddBox />
//                                         <span>My Profile</span>
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="sidebar__bottom">
//                             <button className='sidebar__bottom__logout-btn'>
//                                 <HiOutlineLogout />
//                                 <span>Log out</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//     )
// }
export {}