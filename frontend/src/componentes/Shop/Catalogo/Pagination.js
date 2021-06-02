import {FlexCenter} from "../../reusable-styled/flexConteiners";
import {Link} from "react-router-dom"


const style = {
    marginTop: "6rem"
}

const Pagination = ({number, path}) => (
    <FlexCenter style={style}>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {
            [...Array( number).keys()].map(value =>
                    <Link to={`${path}/${value}`}>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">{value}</a>
                      </li>
                    </Link>

            )
          }
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </FlexCenter>
)

export default Pagination
    
