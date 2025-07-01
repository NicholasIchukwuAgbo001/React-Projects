import {Link} from 'react-router-dom';
import SearchOrder from '../features/order/searchOrder';

function Header() {
    return(
        <header>
            <Link to="/">Fast Pizza</Link>

            <SearchOrder />
            <p>Nichols</p>
        </header>
    )
}

export default Header;