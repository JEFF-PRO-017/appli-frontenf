import { BrowserRouter ,Link, useParams} from 'react-router-dom';
import article from '../data.json'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/css/style.css';

const ArticleOne = () => {
   
return(
   
    <BrowserRouter>
    <div className='parentArticle'>
    <div  className="card contain-body-width article">
            <img
              src={article[1].imageUrl}
              className="card-img-top"
              alt={article[1].imageUrl}
            />
            <div className="card-body">
              <h5 className="card-title"> {article[1].title} </h5>
              <p className="card-text">{article[1].description}</p>
              <Link to="/update" className="btn btn-success">
                Update
              </Link>

              <Link to="/delette" className="btn btn-danger">
                Delette
              </Link>
            </div>
          </div>
    </div>
            

          <div>
          <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
          </div>
    
    </BrowserRouter>
 
)
};

export default ArticleOne;
