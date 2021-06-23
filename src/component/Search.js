import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '../img/search.png';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Search(){
  const[search,setSearch]=useState()
  const history =useHistory()


return (
    <div className="d-flex justify-content-center align-items-center bodycss" style={{height: "93%" }}>
      <div className="container" >
        <div className="row d-flex justify-content-center ">
          <h1 className="fontstyle text-white">Gmit HR</h1>
        </div>
        <div className="row">
          <div className="search_wrap search_wrap_over fontstyle">
            <div className="search_box">
              <input type="text" className="input" placeholder="Search Skill" onChange={(e)=>{setSearch(e.target.value)}} onKeyDown={(ev)=>{if (ev.key==='Enter'){history.push(`search/${search}`)}}}/>
              <Link to={`search/${search}`} className="btn btn_common">
                <img src={SearchIcon} alt='SearchIcon' style={{height:'85%',paddingTop:'40%'}} />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="row d-flex justify-content-center ">
          <div className="p-3">
            <button type="button" className="btn btn-info fontstyle">All Students</button>
          </div>
          <div className="sm p-3">
            <button type="button" className="btn btn-info fontstyle">High Marks Students</button>
          </div>
          <div className="p-3">
            <button type="button" className="btn btn-info fontstyle">High Coding Skilled Students</button>
          </div>
          <div className=" p-3">
            <button type="button" className="btn btn-info fontstyle">High Achievement Students</button>
          </div>
        </div> */}
      </div>
    </div>
    );
}

export default Search;