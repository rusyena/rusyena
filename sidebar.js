import React from 'react';
import './sidebar.css';
import ButtonIcon from './images/button_icon.svg';
import BetweenBar from './images/between_element_bar.svg';
import Note from './images/note.svg';
import PlayerIcon from './images/player.svg';
import ClockIcon from './images/clock.svg';
import UnlockIcon from './images/unlock.svg';


const SideBar = () => {

return(

    <div className="container-fluid">   


        <div id="mySidenav" className="sidebar__left position-relative">
           

            <div className="sidebar__left_button">
            <div className="button sidebar-button">
            {/* <label for="button">
                <input type="checkbox" id="button" />
                 */}
                <div className='button_image'>
                 <img src={ButtonIcon}/>
                 </div>

                {/* </label> */}
            </div> 
            </div>
            
            <div className="col">
            <div className="sidebar__left_content">
                
                <div className="sidebar__left_search-input"><input type="text" placeholder="Search Item"/>
                </div>
                <div className="courses-list">
                     <div className="courses-list_item">
                        <div className="courses-list_item-name">
                        Introduction
                         </div> 
                         <div className="between_bar"><img src={BetweenBar}/></div>
                       </div>
                       
                      <div className="courses-list_item-detailes flex item-end">
                       <div className="courses-list_inner-open">
                        <div className="courses-list_inner-content has-child position-relative">
                            <div className="content-icon"><img src={Note}/> </div>
                        <a href="" className="courses-list_link position-relative">Introduction to the course</a>
                            <div className="minutes">30 min</div>
                            <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                        </div>
                        </div>


                        <div className="courses-list_inner-locked">
                            <div className="courses-list_inner-content has-child position-relative">
                                <div className="content-icon"><img src={Note}/> </div>
                            <a href="" className="courses-list_link">Introduction</a>
                            <div className="play-lock-icon"><img src={UnlockIcon}/> </div>
                            </div></div>
                           

                            <div className="courses-list_inner-open">
                                <div className="courses-list_inner-content has-child position-relative">
                                    <div className="content-icon"><img src={ClockIcon}/> </div>
                                <a href="" className="courses-list_link">Structure of the course</a>
                                <div className="minutes">30 min</div>
                            <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                                </div>
                                </div>
                                
                                
                                
                                <div className="courses-list_inner-locked">
                                    <div className="courses-list_inner-content has-child position-relative">
                                        <div className="content-icon"><img src={ClockIcon}/> </div>
                                    <a href="" className="courses-list_link">Required Tools</a>
                                    <div className="minutes">45 min</div>
                                    <div className="play-lock-icon"><img src={UnlockIcon}/> </div>
                                    </div>
                                    </div>
                                   


                                    <div className="courses-list_inner-open">
                                        <div className="courses-list_inner-content has-child position-relative">
                                            <div className="content-icon"><img src={Note}/> </div>
                                        <a href="" className="courses-list_link">Get Your Free E-book</a>
                                        <div className="minutes">30 min</div>
                                         <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                                        </div>
                                    </div>
                                      
                                    
                      </div>

                     {/* новый айтем из курс-листа */}

                      <div className="courses-list_item">
                        <div className="courses-list_item-name">
                        Design Basics
                         </div> 
                         <div className="between_bar"><img src={BetweenBar}/></div>
                       </div>
                       
                      <div className="courses-list_item-detailes flex item-end">
                       <div className="courses-list_inner-open">
                        <div className="courses-list_inner-content has-child position-relative">
                            <div className="content-icon"><img src={Note}/> </div>
                        <a href="" className="courses-list_link position-relative">Introduction to the course</a>
                            <div className="minutes">30 min</div>
                            <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                        </div>
                        </div>


                        <div className="courses-list_inner-locked">
                            <div className="courses-list_inner-content has-child position-relative">
                                <div className="content-icon"><img src={Note}/> </div>
                            <a href="" className="courses-list_link">Introduction</a>
                            <div className="play-lock-icon"><img src={UnlockIcon}/> </div>
                            </div></div>
                           

                            <div className="courses-list_inner-open">
                                <div className="courses-list_inner-content has-child position-relative">
                                    <div className="content-icon"><img src={ClockIcon}/> </div>
                                <a href="" className="courses-list_link">Structure of the course</a>
                                <div className="minutes">30 min</div>
                            <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                                </div>
                                </div>
                                
                                
                                
                                <div className="courses-list_inner-locked">
                                    <div className="courses-list_inner-content has-child position-relative">
                                        <div className="content-icon"><img src={ClockIcon}/> </div>
                                    <a href="" className="courses-list_link">Required Tools</a>
                                    <div className="minutes">45 min</div>
                                    <div className="play-lock-icon"><img src={UnlockIcon}/> </div>
                                    </div>
                                    </div>
                                   


                                    <div className="courses-list_inner-open">
                                        <div className="courses-list_inner-content has-child position-relative">
                                            <div className="content-icon"><img src={Note}/> </div>
                                        <a href="" className="courses-list_link">Get Your Free E-book</a>
                                        <div className="minutes">30 min</div>
                                         <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                                        </div>
                                    </div>
                                      
                                    
                      </div> 
                      {/* конец нового айтема */}

                      {/* новый айтем из курс-листа */}

                      <div className="courses-list_item">
                        <div className="courses-list_item-name">
                        Figma Academy
                         </div> 
                         <div className="between_bar"><img src={BetweenBar}/></div>
                       </div>
                       
                      <div className="courses-list_item-detailes flex item-end">
                       <div className="courses-list_inner-open">
                        <div className="courses-list_inner-content has-child position-relative">
                            <div className="content-icon"><img src={Note}/> </div>
                        <a href="" className="courses-list_link position-relative">Introduction to the course</a>
                            <div className="minutes">30 min</div>
                            <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                        </div>
                        </div>


                        <div className="courses-list_inner-locked">
                            <div className="courses-list_inner-content has-child position-relative">
                                <div className="content-icon"><img src={Note}/> </div>
                            <a href="" className="courses-list_link">Introduction</a>
                            <div className="play-lock-icon"><img src={UnlockIcon}/> </div>
                            </div></div>
                           

                            <div className="courses-list_inner-open">
                                <div className="courses-list_inner-content has-child position-relative">
                                    <div className="content-icon"><img src={ClockIcon}/> </div>
                                <a href="" className="courses-list_link">Structure of the course</a>
                                <div className="minutes">30 min</div>
                            <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                                </div>
                                </div>
                                
                                
                                
                                <div className="courses-list_inner-locked">
                                    <div className="courses-list_inner-content has-child position-relative">
                                        <div className="content-icon"><img src={ClockIcon}/> </div>
                                    <a href="" className="courses-list_link">Required Tools</a>
                                    <div className="minutes">45 min</div>
                                    <div className="play-lock-icon"><img src={UnlockIcon}/> </div>
                                    </div>
                                    </div>
                                   


                                    <div className="courses-list_inner-open">
                                        <div className="courses-list_inner-content has-child position-relative">
                                            <div className="content-icon"><img src={Note}/> </div>
                                        <a href="" className="courses-list_link">Get Your Free E-book</a>
                                        <div className="minutes">30 min</div>
                                         <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                                        </div>
                                    </div>
                                      
                                    
                      </div> 
                      {/* конец нового айтема */}


                      {/* новый айтем из курс-листа */}

                       <div className="courses-list_item">
                        <div className="courses-list_item-name">
                        UI Elements
                         </div> 
                         <div className="between_bar"><img src={BetweenBar}/></div>
                       </div>
                       
                      <div className="courses-list_item-detailes flex item-end">
                       <div className="courses-list_inner-open">
                        <div className="courses-list_inner-content has-child position-relative">
                            <div className="content-icon"><img src={Note}/> </div>
                        <a href="" className="courses-list_link position-relative">Introduction to the course</a>
                            <div className="minutes">30 min</div>
                            <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                        </div>
                        </div>


                        <div className="courses-list_inner-locked">
                            <div className="courses-list_inner-content has-child position-relative">
                                <div className="content-icon"><img src={Note}/> </div>
                            <a href="" className="courses-list_link">Introduction</a>
                            <div className="play-lock-icon"><img src={UnlockIcon}/> </div>
                            </div></div>
                           

                            <div className="courses-list_inner-open">
                                <div className="courses-list_inner-content has-child position-relative">
                                    <div className="content-icon"><img src={ClockIcon}/> </div>
                                <a href="" className="courses-list_link">Structure of the course</a>
                                <div className="minutes">30 min</div>
                            <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                                </div>
                                </div>
                                
                                
                                
                                <div className="courses-list_inner-locked">
                                    <div className="courses-list_inner-content has-child position-relative">
                                        <div className="content-icon"><img src={ClockIcon}/> </div>
                                    <a href="" className="courses-list_link">Required Tools</a>
                                    <div className="minutes">45 min</div>
                                    <div className="play-lock-icon"><img src={UnlockIcon}/> </div>
                                    </div>
                                    </div>
                                   


                                    <div className="courses-list_inner-open">
                                        <div className="courses-list_inner-content has-child position-relative">
                                            <div className="content-icon"><img src={Note}/> </div>
                                        <a href="" className="courses-list_link">Get Your Free E-book</a>
                                        <div className="minutes">30 min</div>
                                         <div className="play-lock-icon"><img src={PlayerIcon}/> </div>
                                        </div>
                                    </div>
                                      
                                    
                      </div> 
                      {/* конец нового айтема */}




                 
                </div>



             </div>
            </div>

        </div>

           

        </div>
     

)
}

export default SideBar

