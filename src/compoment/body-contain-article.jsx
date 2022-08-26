import { BrowserRouter, Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/css/style.css';
import data from '../data.json';

const Body_contain_article = () => {
  return (
    <BrowserRouter>
      <div className="contain-body-a">
        {
        data.map( (article,index) => (
          <div key={`${article._id}-${index}`} className="card contain-body-width ">
            <img
              src={article.imageUrl}
              className="card-img-top"
              alt={article.imageUrl}
            />
            <div className="card-body">
              <h5 className="card-title"> {article.title} </h5>
              <p className="card-text">{article.description}</p>
              <Link to={`/${article._id}--${index}`} className="btn btn-secondary">
                Click there
              </Link>
            </div>
          </div>
        ))
        }
      </div>
    </BrowserRouter>
  );
};

export default Body_contain_article;
