import { connect } from "react-redux";
import { Outlet } from 'react-router-dom';

function Layout({children}){
    return(
        <div>
            {children}
        </div>
    )
}

const mapStateToProps = state =>({})

export default connect(mapStateToProps,null) (Layout)