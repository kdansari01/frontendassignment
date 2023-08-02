import React from "react";
import { CompanyData } from "../Data";

const Companies = () => {
  return (
    <>
      <div>
        <section className="ag-format-container">
          <div className="">
            <h2 className="text-center fw-bold mt-4"> Companies</h2>
            <div className="ag-courses_box">
              {CompanyData.map((item) => (
                <div key={item.id} className="ag-courses_item ">
                  <div
                    className="ag-courses-item_link"
                    style={{ height: "240px" }}
                  >
                    <div className="ag-courses-item_bg"></div>
                    <div className="ag-courses-item_title text-center">
                      {item.title}
                    </div>

                    <div className="ag-courses-item_date-box">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Companies;
