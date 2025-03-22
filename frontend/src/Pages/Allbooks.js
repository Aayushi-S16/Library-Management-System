import React from "react";
import "./Allbooks.css";
import  { useState } from 'react';



  function Allbooks() {
    const [expandedU, setExpandedU] = useState(false);
    const [expandedP, setExpandedP] = useState(false);
  
    const toggleExpandU = () => {
      setExpandedU(!expandedU);
    };
  
    const toggleExpandP = () => {
      setExpandedP(!expandedP);
    };
      return (
        <div className="syllabus-page"> 
        <div className={`expandable-window ${expandedU ? 'expanded' : ''}`}>
          <div className="toggle-icon" onClick={toggleExpandU}>
            {expandedU ? "-" : "+"} Undergraduate
          </div>
          {expandedU && (
            <div className="panel-collapse collapse show">
              <div className="panel-body">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <div className="panel-title">
                          <h6>
                            <span id="rtSyllabusUG_ctl00_ucSyllabusUG_lblAcademic">
                              <div className='title1'>B. Tech. in Electronics Engineering</div>
                              
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <div id="rtSyllabusUG_ctl00_ucSyllabusUG_dvPEO" className="block">
                              <h4>Syllabus</h4>
                              <div>
                                <table id="rtSyllabusUG_ctl00_ucSyllabusUG_grdBPEO" className="table table-bordered" style={{ borderCollapse: 'collapse' }}>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <span id="rtSyllabusUG_ctl00_ucSyllabusUG_grdBPEO_ctl03_lblPEO">
                                          B.Tech. Course Structure NEP w.e.f. 2022-23
                                        </span>
                                      </td>
                                      <td>
                                        <a href="https://hbtu.ac.in/syllabus/ET Dept. B.Tech. Course Structure NEP.pdf" id="rtSyllabusUG_ctl00_ucSyllabusUG_grdBPEO_ctl03_attachmentSyllabus" className="btn btn-info btn-sm" title="View" target="_blank" rel="noopener">VIEW</a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span id="rtSyllabusUG_ctl00_ucSyllabusUG_grdBPEO_ctl03_lblPEO">
                                          B.Tech. Syllabus NEP w.e.f. 2022-23
                                        </span>
                                      </td>
                                      <td>
                                        <a href="https://hbtu.ac.in/syllabus/ET. Dept. B.Tech. Syllabus NEP.pdf" id="rtSyllabusUG_ctl00_ucSyllabusUG_grdBPEO_ctl03_attachmentSyllabus" className="btn btn-info btn-sm" title="View" target="_blank" rel="noopener">VIEW</a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

<div className={`expandable-window ${expandedP ? 'expanded' : ''}`}>
<div className="toggle-icon" onClick={toggleExpandP}>
{expandedP ? "-" : "+"} Postrgraduate
</div>
{expandedP && (
<div className="panel-collapse collapse show">
  <div className="panel-body">
    <div className="row">
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="panel-title">
              <h6>
                <span id="rtSyllabusUG_ctl00_ucSyllabusUG_lblAcademic">
                <div className='title1'>M.Tech. in Electronics &amp; Communication</div>
                
                </span>
              </h6>
            </div>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-12">
                <div id="rtSyllabusUG_ctl00_ucSyllabusUG_dvPEO" className="block">
                  <h4>Syllabus</h4>
                  <div>
                    <table id="rtSyllabusUG_ctl00_ucSyllabusUG_grdBPEO" className="table table-bordered" style={{ borderCollapse: 'collapse' }}>
                      <tbody>
                        <tr>
                          <td>
                            <span id="rtSyllabusUG_ctl00_ucSyllabusUG_grdBPEO_ctl03_lblPEO">
                            M.Tech. Course Structure NEP w.e.f. 2022-23
                            </span>
                          </td>
                          <td>
                            <a href="https://hbtu.ac.in/syllabus/ET Dept. M.Tech. Course Stucture NEP.pdf" id="rtSyllabusUG_ctl00_ucSyllabusUG_grdBPEO_ctl03_attachmentSyllabus" className="btn
                             btn-info btn-sm" title="View" target="_blank" rel="noopener">VIEW</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span id="rtSyllabusUG_ctl00_ucSyllabusUG_grdBPEO_ctl03_lblPEO">
                            M.Tech. Syllabus NEP w.e.f. 2022-23
                            </span>
                          </td>
                          <td>
                            <a href="https://hbtu.ac.in/syllabus/ET Dept. M.Tech. Syllabus NEP.pdf" id="rtSyllabusUG_ctl00_ucSyllabusUG_grdBPEO_ctl03_attachmentSyllabus" className="btn btn-info btn-sm" title="View" target="_blank" rel="noopener">VIEW</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)}
</div>
</div>
      );
    }
export default Allbooks;


   