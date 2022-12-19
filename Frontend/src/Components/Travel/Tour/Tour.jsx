import React from "react";
import "./tour.scss";
import { Navigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery, } from "@tanstack/react-query";
import { useState } from "react";
import { makeRequest } from "../../../axios";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { faCalendarDays, faCity, faMotorcycle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import axios from "axios";

const Tour = ({ tour }) => {
  const regionId = parseInt(useLocation().pathname.split("/")[2]);

  const { err, isLoading, data } = useQuery(["tour"], () =>
    makeRequest.get("/tours/find/" + regionId).then((res) => {
      return res.data;
    })
  )

  const { data: regionData } = useQuery(["region"], () =>
    makeRequest.get("/tours/regions").then((res) => {
      return res.data;
    })
  );
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <div className="mainContent">
      <div className="listTour">

        <div className="headerSearch">
          <div className="headerSearch-item">
            <FontAwesomeIcon icon={faMotorcycle} />
            <input
              type="text"
              placeholder="Bạn muốn đi đâu?"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearch-item">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText">
              {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
              <div className="calendar">
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
            </span>
          </div>

          <div className="headerSearch-item">
            <FontAwesomeIcon icon={faCity} />
            <select name="gender" id="">
              <option value={''}>Sapa</option>
              <option value={''}>Đà Lạt</option>
              <option value={''}>Đà Nẵng</option>
              <option value={''}>Tp Hồ Chí Minh</option>
              <option value={''}>Kiên Giang</option>


            </select>
          </div>

          <div className="headerSearch-item">
            <button className="btn-search">
              <FontAwesomeIcon icon={faSearch} />
              Tìm
            </button>
          </div>
        </div>

        <div className="tourContainer flex">
          <div className="region flex">

            {err
              ? "Something went wrong!"
              : isLoading
                ? "loading"
                : regionData?.map((region) => (
                  <>
                    <Link to={`/regions/${region.region_id} `}>
                      <button className="btn-region flex">{region.region_name}</button>
                    </Link>
                  </>
                ))}
          </div>
          {err
            ? "Something went wrong!"
            : isLoading
              ? "loading"
              : data?.map((tour) => (
                <div className="singleItem">
                  <AiFillHeart className="icon"></AiFillHeart>
                  <img src={"/upload/" + tour.image} alt="" />
                  <h3 >{tour.tour_name}</h3>
                  <span>{tour.schedual}</span>
                  <p>$ {tour.price}</p>
                  <Link
                    key={tour.tour_id}
                    to={`/tourdetail/${tour.tour_id}`}
                    className="btn">Đặt Ngay</Link>
                </div>
              ))}
        </div>

      </div>
    </div>

  );
};

export default Tour;
