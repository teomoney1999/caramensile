import { FiAward } from "react-icons/fi";
import { LoadScript, GoogleMap } from "@react-google-maps/api";
import keys from "../../config/api.json";

const containerStyle = {
  width: "400px",
  height: "400px"
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Customer = ({ className }) => {
  return (
    <div className="customer">
      <div className="custormer__image">
        <FiAward />
      </div>
      <div className="customer__title">
        Các khách hàng hiện tại của chúng tôi
      </div>
      <div className="customer__list">
        <LoadScript googleMapsApiKey={keys.GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Customer;
