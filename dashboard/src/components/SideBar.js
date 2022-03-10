import React from "react";
import image from "../assets/images/logo2.png";
import ContentWrapper from "./ContentWrapper";
import BrandsInDb from "./BrandsInDb";
import LastProductInDb from "./LastProductInDb";
import ContentRowQuantity from "./ContentRowQuantity";
import SearchProducts from "./SearchProducts";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-50" src={image} alt="Digital House" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Products</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/BrandsInDb">
            <i className="fas fa-fw fa-folder"></i>
            <span>Brands</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/LastProductInDb">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Last</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ContentRowQuantity">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/SearchProducts">
            <i className="fas fa-fw fa-table"></i>
            <span>Search</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/BrandsInDb">
          <BrandsInDb />
        </Route>
        <Route path="/LastProductInDb">
          <LastProductInDb />
        </Route>
        <Route path="/ContentRowQuantity">
          <ContentRowQuantity />
        </Route>
        <Route path="/SearchProducts">
          <SearchProducts />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}
export default SideBar;
