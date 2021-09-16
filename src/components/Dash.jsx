import React, { useState } from "react";
import "./dashboard.css";

const Dash = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showOrders, setShowOrders] = useState(true);
  const [showLatest, setShowLatest] = useState(true);

  return (
    <main>
      <div class="dropdown">
        <button className="dropbtn">+ ADD WIDGET</button>
        <div class="dropdown-content">
          <button className="ddbtn" onClick={() => setShowWelcome(true)}>
            Welcome
          </button>
          <button className="ddbtn" onClick={() => setShowOrders(true)}>
            Orders Summary
          </button>
          <button className="ddbtn" onClick={() => setShowLatest(true)}>
            Latest orders
          </button>
        </div>
      </div>
      <section className="widget-container ">
        {showWelcome && (
          <div className="welcome-widget widget">
            <div className="alag">
              <p>Welcome</p>
              <button
                onClick={() => setShowWelcome(false)}
                className="closebtn"
              >
                x
              </button>
            </div>
            <div className="text">
              <p className="greet">Welcome, Super Admin</p>
              <p>Last login : 15mins ago</p>
              <br></br>
              <p className="slogan">Vendure Admin UI v1.2.0</p>
            </div>
          </div>
        )}

        {showOrders && (
          <div className="welcome-widget widget">
            <div className="alag">
              <p>Orders Summary</p>
              <button onClick={() => setShowOrders(false)} className="closebtn">
                x
              </button>
            </div>
            <div className="inside">
              <div className="one">
                <button>TODAY</button>
                <button>YESTERDAY</button>
                <button>THIS WEEK</button>
                <button>THIS MONTH</button>
              </div>

              <div className="two">
                <h1>2</h1>
                <p>orders</p>
              </div>
              <div className="three">
                <h1>$1,814.28</h1>
                <p>TOTAL VALUE</p>
              </div>
            </div>
          </div>
        )}

        {showLatest && (
          <div className="welcome-widget widget">
            <div className="alag">
              <p>Latest orders</p>
              <button className="closebtn" onClick={() => setShowLatest(false)}>
                x
              </button>
            </div>
            <div>
              <ul className="list-orders">
                <li>Product name</li>
                <li>user name</li>
                <li>$amount</li>
                <li>time hrs ago</li>
                <li>showcart</li>
              </ul>
              <ul className="list-orders">
                <li>Product name</li>
                <li>user name</li>
                <li>$amount</li>
                <li>time hrs ago</li>
                <li>showcart</li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Dash;
