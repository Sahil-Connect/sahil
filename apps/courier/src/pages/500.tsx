import { StatusPage } from 'ui';
import errorImg from '../../public/500.svg'

export default function Custom500() {
  return (
    <StatusPage 
      statusCode="Error 500"
      message="Oops! Server-side error"
      desc="Sorry, it seems we have encountered an internal server error. Please try again later."
      imgSource={errorImg}
      link="https://storyset.com/web"
      attribution="Storyset"
    />
  );
}
