import Tour from "../tour/Tour";
import "./tours.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Tours = () => {
  const { isLoading, error, data } = useQuery(["tour"], () =>
    makeRequest.get("/tours").then((res) => {
      return res.data;
    })
  );
  console.log(data);

  return (
    <div className="body">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((tour) => <Tour tour={tour} key={tour.id} />)}
    </div>
  );
};

export default Tours;
