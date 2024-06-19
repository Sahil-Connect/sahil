import { StatusPage } from 'ui';
import errorImg from '../../public/404.svg'

export default function Custom404() {
  return (
    <StatusPage 
      statusCode="Error 404"
      message="Oops! Page not Found"
      desc="Sorry, it seems the page you are trying to access has either been deleted or never existed."
      imgSource={errorImg}
      link="https://storyset.com/web"
      attribution="Storyset"
    />
  );
}
