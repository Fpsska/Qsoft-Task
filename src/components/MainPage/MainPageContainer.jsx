import { connect } from "react-redux";
import MainPage from "./MainPage";

const mapStateToProps = () => {
  return {};
};

const MainContainer = connect(mapStateToProps)(MainPage);

export default MainContainer;
