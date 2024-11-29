import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome to Your Dashboard</h2>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="dashboard-table">
          <thead className="dashboard-table-head">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Joining Date</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="user-info">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="John Doe"
                    className="user-avatar"
                  />
                  <span>John Doe</span>
                </div>
              </td>
              <td>2023-01-10</td>
              <td>Admin</td>
              <td className="status active">Active</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <div className="user-info">
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="Jane Smith"
                    className="user-avatar"
                  />
                  <span>Jane Smith</span>
                </div>
              </td>
              <td>2022-05-20</td>
              <td>User</td>
              <td className="status pending">Pending</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <div className="user-info">
                  <img
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="Robert Brown"
                    className="user-avatar"
                  />
                  <span>Robert Brown</span>
                </div>
              </td>
              <td>2021-08-15</td>
              <td>User</td>
              <td className="status active">Active</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <div className="user-info">
                  <img
                    src="https://randomuser.me/api/portraits/men/4.jpg"
                    alt="Michael Johnson"
                    className="user-avatar"
                  />
                  <span>Michael Johnson</span>
                </div>
              </td>
              <td>2020-11-30</td>
              <td>Admin</td>
              <td className="status inactive">Inactive</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <div className="user-info">
                  <img
                    src="https://randomuser.me/api/portraits/women/5.jpg"
                    alt="Emily Davis"
                    className="user-avatar"
                  />
                  <span>Emily Davis</span>
                </div>
              </td>
              <td>2019-02-14</td>
              <td>User</td>
              <td className="status active">Active</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default Dashboard;
