import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ColumnFiltering from "../GridsForUI/InfragisticsGrid/ColumnFiltering";
import InfragisticsGrid from "../GridsForUI/InfragisticsGrid/InfragisticsGrid";
import NewInfraGrid from "../GridsForUI/InfragisticsGrid/NewInfraGrid";
import RowGrouping from "../GridsForUI/InfragisticsGrid/RowGrouping";
import SimpleColumnChooser from "../GridsForUI/InfragisticsGrid/SimpleColumnChooser";
import StatusBadgeGrid from "../GridsForUI/InfragisticsGrid/StatusBadgeGrid";

function Routers(){
  return(
    <div className="Routers">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<div></div>}/>
          <Route path="/InfragisticsGrid" element={<InfragisticsGrid/>}/>
          <Route path="/InfragisticsGrid2" element={<NewInfraGrid/>}/>
          <Route path="/RowGrouping" element={<RowGrouping/>}/>
          <Route path="/ColumnFiltering" element={<ColumnFiltering/>}/>
          <Route path="/SimpleColumnChooser" element={<SimpleColumnChooser/>}/>
          <Route path="/StatusBadgeGrid" element={<StatusBadgeGrid/>}/>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
 }

export default Routers;
