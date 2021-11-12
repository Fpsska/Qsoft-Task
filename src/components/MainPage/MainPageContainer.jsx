import { connect } from "react-redux";
import MainPage from "./MainPage";
import { navHandler } from "../../Redux/Middleware/navHandler";

const mapStateToProps = (state) => {
  return {
    profileName: state.mainPage.profileName,
    cards: state.mainPage.cards,
    isNavMobileVisible: state.mainPage.isNavMobileVisible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navHandler: () => dispatch(navHandler()),
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainContainer;
