import { useState } from "react";

export const Home = () => {
    // create statistics for user.
    // get Total user count from DB,
    // other fields are in memory values stored in context API.
    // they will reset to 0
    // if page gets refreshed
  
    // thins to store in context api
    //   total: get from db,
    //   terminated: 0, // inc when user in terminated
    //   promoted: 0,// inc when user in promoted
    //   total_new: 0,// inc when a new user in created
    const [total,setTotal]=useState("10")

    const [term,setTerm]=useState("0")
    const [perm,setPerm]=useState("0")
  
    return (
      <>
        <h3 className="welcome">Welcome To employee management system</h3>
        <div className="home">
          <span>Stats</span>
          <div>
            Total Employees   {total}<span className="totalemp"></span>
          </div>
          <div>
            Total Terminated: {term}<span className="total_terminated"></span>
          </div>
          <div>
            Total Promoted: {perm} <span className="total_promoted"></span>
          </div>
          <div>
            Total New: {}<span className="total_new"></span>
          </div>
        </div>
      </>
    );
  };
  