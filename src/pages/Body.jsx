import { BrowserRouter } from 'react-router-dom';
import Body_contain_article from '../compoment/body-contain-article';

function Body(params) {
  return (
    <BrowserRouter>
      <Body_contain_article />
    </BrowserRouter>
  );
}

export default Body;
